import { createContext, ReactNode, useState } from "react";
import groupBy from "lodash.groupby";
import { calculateBonuses } from "../utils/calculateBonuses";
import { SelectedSkill, Skill } from "../models/Skill";
import { Requirement } from "../models/Requirement";
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
	checkIfAnyChildIsSelected: (childrenSkills?: Skill[]) => boolean;
	checkSelectedSkillLevel: (name: string) => number;
	checkIsSkillRequirementNotMet: (requirement?: Requirement) => boolean;
	getSummary: () => ({
		name: string;
		value: number;
		isPercentage: boolean;
	} | null)[];
	resetSkills: () => void;
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

	const checkIfAnyChildIsSelected = (childrenSkills?: Skill[]) => {
		if (!childrenSkills?.length) {
			return false;
		}

		const childrenNamesArray = childrenSkills.map(({ name }) => name);

		return selectedSkills.some(({ name, currentLevel }) => {
			return childrenNamesArray.includes(name) && currentLevel > 0;
		});
	};

	const checkSelectedSkillLevel = (name: string) => {
		const selectedSkill = selectedSkills.find((skill) => skill.name === name);

		return selectedSkill?.currentLevel ?? 0;
	};

	const checkIsSkillRequirementNotMet = (requirement?: Requirement) => {
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
				if (skillGroupEntries[1][0].currentLevel === 0) {
					return null;
				}

				return {
					name: skillGroupEntries[0],
					value: calculateBonuses(skillGroupEntries[1]),
					isPercentage: skillGroupEntries[1][0].isPercentage,
				};
			}
		);

		return summary.filter((row) => row !== null);
	};

	const resetSkills = () => setSelectedSkills([]);

	const value = {
		handleIncreaseSkillLevel,
		handleDecreaseSkillLevel,
		checkIfAnyChildIsSelected,
		checkSelectedSkillLevel,
		checkIsSkillRequirementNotMet,
		getSummary,
		resetSkills,
	};

	return (
		<SkillTreeContext.Provider value={value}>
			{children}
		</SkillTreeContext.Provider>
	);
};
