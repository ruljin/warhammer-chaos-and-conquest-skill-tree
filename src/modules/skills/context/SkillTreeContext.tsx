import { createContext, ReactNode, useState } from "react";
import groupBy from "lodash.groupby";
import { SelectedSkill } from "../models/Skill";
import { Bonus } from "../models/Bonus";

type SkillTreeContextProps = {
	handleIncreaseSkillLevel: ({
		name,
		bonusType,
		bonusSheet,
		isPercentage,
	}: {
		name: string;
		bonusType: string;
		bonusSheet: Bonus[];
		isPercentage: boolean;
	}) => void;
	handleDecreaseSkillLevel: (name: string) => void;
	checkSelectedSkillLevel: (name: string) => number;
	checkIsSkillRequirementNotMet: (requirement?: SelectedSkill) => boolean;
	getSummary: () => {
		name: string;
		value: number;
		isPercentage: boolean;
	}[];
};

type SkillTreeProviderProps = {
	children: ReactNode;
};

export const SkillTreeContext = createContext<
	SkillTreeContextProps | undefined
>(undefined);

export const SkillTreeProvider = ({ children }: SkillTreeProviderProps) => {
	const [selectedSkills, setSelectedSkills] = useState<SelectedSkill[]>([]);

	const handleIncreaseSkillLevel = ({
		name,
		bonusType,
		bonusSheet,
		isPercentage,
	}: {
		name: string;
		bonusType: string;
		bonusSheet: Bonus[];
		isPercentage: boolean;
	}) => {
		const selectedSkillsCopy = [...selectedSkills];
		const skillIsSelected = selectedSkillsCopy.find(
			(skill) => skill.name === name
		);

		if (skillIsSelected) {
			skillIsSelected.currentLevel++;
			setSelectedSkills(selectedSkillsCopy);
			return;
		}

		setSelectedSkills([
			...selectedSkills,
			{ name, currentLevel: 1, bonusType, bonusSheet, isPercentage },
		]);
	};

	const handleDecreaseSkillLevel = (name: string) => {
		const selectedSkillsCopy = [...selectedSkills];
		const skillIsSelected = selectedSkills.find((skill) => skill.name === name);

		if (skillIsSelected) {
			skillIsSelected.currentLevel--;
			setSelectedSkills(selectedSkillsCopy);
			return;
		}

		setSelectedSkills(selectedSkills.filter((skill) => skill.name !== name));
	};

	const checkSelectedSkillLevel = (name: string) => {
		const selectedSkill = selectedSkills.find((skill) => skill.name === name);

		return selectedSkill?.currentLevel ?? 0;
	};

	const checkIsSkillRequirementNotMet = (requirement?: SelectedSkill) => {
		if (!requirement) {
			return false;
		}

		const skillIsSelected = selectedSkills.find(
			(skill) => skill.name === requirement.name
		);

		if (!skillIsSelected) {
			return true;
		}

		return skillIsSelected.currentLevel < requirement.currentLevel;
	};

	const getSummary = () => {
		const selectedSkillsGroupedByBonusType = groupBy(
			[...selectedSkills],
			"bonusType"
		);

		const summary = Object.entries(selectedSkillsGroupedByBonusType).map(
			(skillGroupEntries) => {
				console.log(skillGroupEntries);

				return {
					name: skillGroupEntries[0],
					value: calculateBonuses(skillGroupEntries[1]),
					isPercentage: skillGroupEntries[1][0].isPercentage,
				};
			}
		);

		return summary;
	};

	const value = {
		handleIncreaseSkillLevel,
		handleDecreaseSkillLevel,
		checkSelectedSkillLevel,
		checkIsSkillRequirementNotMet,
		getSummary,
	};

	return (
		<SkillTreeContext.Provider value={value}>
			{children}
		</SkillTreeContext.Provider>
	);
};

const calculateBonuses = (skills: SelectedSkill[]) => {
	let value = 0;

	skills.forEach(({ currentLevel, bonusSheet }) => {
		value += bonusSheet[currentLevel - 1].value;
	});

	return value;
};
