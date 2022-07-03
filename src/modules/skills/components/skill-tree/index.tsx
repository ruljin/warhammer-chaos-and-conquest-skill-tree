import { useEffect } from "react";
import clsx from "clsx";
import { SkillTreeProvider } from "../../context/SkillTreeContext";
import { useSkillTree } from "../../hooks/useSkillTree";
import { Button, Tooltip } from "../../../../components";
import { SkillLabel } from "./SkillLabel";
import { Skill } from "../../models/Skill";
import styles from "./SkillTree.module.scss";
import icon from "../../../../assets/temporary.png";

type SkillsRowProps = Pick<
	SkillTreeProps,
	| "level"
	| "skills"
	| "skillPoints"
	| "skillPointsMax"
	| "handleDecrementSkillPoints"
	| "handleIncrementSkillPoints"
>;

type SkillNodeProps = Pick<
	SkillColumnProps,
	| "skill"
	| "skillPoints"
	| "skillPointsMax"
	| "handleDecrementSkillPoints"
	| "handleIncrementSkillPoints"
>;

type SkillColumnProps = Pick<
	SkillTreeProps,
	| "level"
	| "skillPoints"
	| "skillPointsMax"
	| "handleDecrementSkillPoints"
	| "handleIncrementSkillPoints"
> & {
	skill: Skill;
};

type SkillTreeProps = {
	skills: Skill[];
	showSummary?: boolean;
	level: number;
	skillPoints: number;
	skillPointsMax: number;
	handleDecrementSkillPoints: () => void;
	handleIncrementSkillPoints: () => void;
};

const SkillsRow = ({
	skills,
	level,
	skillPoints,
	skillPointsMax,
	handleDecrementSkillPoints,
	handleIncrementSkillPoints,
}: SkillsRowProps) => (
	<div className={styles.tree__row}>
		{skills.map((skill) => (
			<SkillsColumn
				key={skill.name}
				skill={skill}
				level={level}
				skillPoints={skillPoints}
				skillPointsMax={skillPointsMax}
				handleDecrementSkillPoints={handleDecrementSkillPoints}
				handleIncrementSkillPoints={handleIncrementSkillPoints}
			/>
		))}
	</div>
);

const SkillNode = ({
	skill,
	skillPoints,
	skillPointsMax,
	handleDecrementSkillPoints,
	handleIncrementSkillPoints,
}: SkillNodeProps) => {
	const tooltipClasses = clsx(
		styles.tooltip__text,
		styles["tooltip__text--bold"]
	);
	const {
		checkIfAnyChildIsSelected,
		checkIsSkillRequirementNotMet,
		checkSelectedSkillLevel,
		handleIncreaseSkillLevel,
		handleDecreaseSkillLevel,
	} = useSkillTree();
	const {
		name,
		description,
		maxLevel,
		bonusType,
		bonusSheet,
		isPercentage,
		childrenSkills,
		requirement,
	} = skill;
	const isSkillRequirementNotMet = checkIsSkillRequirementNotMet(requirement);
	const skillCurrentLevel = checkSelectedSkillLevel(name);
	const isSkillMaxed = skillCurrentLevel === maxLevel;

	const handleClick = () => {
		if (skillPoints === 0) {
			return;
		}

		handleDecrementSkillPoints();
		handleIncreaseSkillLevel({ name, bonusType, bonusSheet, isPercentage });
	};

	const handleRightClick = () => {
		if (
			skillPoints === skillPointsMax ||
			skillCurrentLevel === 0 ||
			checkIfAnyChildIsSelected(childrenSkills)
		) {
			return;
		}

		handleIncrementSkillPoints();
		handleDecreaseSkillLevel(name);
	};

	const TooltipContent = (
		<>
			<p>{description}</p>
			<p>
				<span className={tooltipClasses}>Current bonus:</span>
				{bonusSheet[skillCurrentLevel - 1] ? (
					<>
						{bonusSheet[skillCurrentLevel - 1].value}
						{isPercentage && "%"}
					</>
				) : (
					"-"
				)}
			</p>
			<p>
				<span className={tooltipClasses}>With next point:</span>
				{bonusSheet[skillCurrentLevel] ? (
					<>
						{bonusSheet[skillCurrentLevel].value}
						{isPercentage && "%"}
					</>
				) : (
					"-"
				)}
			</p>
		</>
	);

	return (
		<Tooltip content={TooltipContent}>
			<Button
				isImageButton
				isMaxed={skillCurrentLevel === maxLevel}
				onClick={handleClick}
				onRightClick={handleRightClick}
				disabled={isSkillMaxed || isSkillRequirementNotMet}
			>
				<div className={styles.skill}>
					<img className={styles.skill__image} src={icon} />
					<SkillLabel currentLevel={skillCurrentLevel} maxLevel={maxLevel} />
					<span className={styles.skill__name}>{name}</span>
				</div>
				{requirement && (
					<div
						className={clsx(styles.skill__child, {
							[styles["skill__connector--highlight"]]:
								isSkillMaxed || (requirement && !isSkillRequirementNotMet),
						})}
					/>
				)}
				{childrenSkills?.length === 2 && (
					<div
						className={clsx(styles["skill__connector--double"], {
							[styles["skill__connector--highlight"]]:
								isSkillMaxed || (requirement && !isSkillRequirementNotMet),
						})}
					/>
				)}
				{childrenSkills?.length === 3 && (
					<div
						className={clsx(
							styles.skill__connector,
							styles["skill__connector--triple"],
							{
								[styles["skill__connector--highlight"]]:
									isSkillMaxed || (requirement && !isSkillRequirementNotMet),
							}
						)}
					/>
				)}
			</Button>
		</Tooltip>
	);
};

const SkillsColumn = ({
	skill,
	level,
	skillPoints,
	skillPointsMax,
	handleDecrementSkillPoints,
	handleIncrementSkillPoints,
}: SkillColumnProps) => {
	const { resetSkills } = useSkillTree();

	useEffect(() => {
		resetSkills();
	}, [level]);

	return (
		<div className={styles.tree__column}>
			<div className={styles.tree__row}>
				<SkillNode
					skill={skill}
					skillPoints={skillPoints}
					skillPointsMax={skillPointsMax}
					handleDecrementSkillPoints={handleDecrementSkillPoints}
					handleIncrementSkillPoints={handleIncrementSkillPoints}
				/>
			</div>
			{!skill?.childrenSkills ? null : (
				<SkillsRow
					skills={skill.childrenSkills}
					level={level}
					skillPoints={skillPoints}
					skillPointsMax={skillPointsMax}
					handleDecrementSkillPoints={handleDecrementSkillPoints}
					handleIncrementSkillPoints={handleIncrementSkillPoints}
				/>
			)}
		</div>
	);
};

const checkIsSummaryNotNull = (
	summary: ({
		name: string;
		value: number;
		isPercentage: boolean;
	} | null)[]
): summary is {
	name: string;
	value: number;
	isPercentage: boolean;
}[] => {
	return (
		(
			summary as {
				name: string;
				value: number;
				isPercentage: boolean;
			}[]
		)[0] !== null
	);
};

const Summary = () => {
	const { getSummary } = useSkillTree();
	const summary = getSummary();

	if (!checkIsSummaryNotNull(summary)) {
		return null;
	}

	return (
		<div className={styles.skill__summary}>
			{summary.map(({ name, value, isPercentage }) => (
				<span key={name}>
					{name}: {value}
					{isPercentage && "%"}
				</span>
			))}
		</div>
	);
};

export const SkillTree = ({
	skills,
	showSummary = false,
	level,
	skillPoints,
	skillPointsMax,
	handleDecrementSkillPoints,
	handleIncrementSkillPoints,
}: SkillTreeProps) => {
	return (
		<SkillTreeProvider>
			<div className={styles.tree}>
				{skills.map((skill) => (
					<SkillsColumn
						key={skill.name}
						skill={skill}
						level={level}
						skillPoints={skillPoints}
						skillPointsMax={skillPointsMax}
						handleDecrementSkillPoints={handleDecrementSkillPoints}
						handleIncrementSkillPoints={handleIncrementSkillPoints}
					/>
				))}
			</div>
			{showSummary && <Summary />}
		</SkillTreeProvider>
	);
};
