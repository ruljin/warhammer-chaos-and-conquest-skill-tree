import { SkillTreeProvider } from "../../context/SkillTreeContext";
import { Button, Tooltip } from "../../../../components";
import { Skill } from "../../models/Skill";
import styles from "./SkillTree.module.scss";
import { useSkillTree } from "../../hooks/useSkillTree";

type SkillsRowProps = Pick<SkillTreeProps, "skills">;

type SkillLabelProps = {
	currentLevel: number;
	maxLevel: number;
};

type SkillNodeProps = SkillColumnProps;

type SkillColumnProps = {
	skill: Skill;
};

type SkillTreeProps = {
	skills: Skill[];
	showSummary?: boolean;
};

const SkillsRow = ({ skills }: SkillsRowProps) => (
	<div className={styles.tree__row}>
		{skills.map((skill) => (
			<SkillsColumn key={skill.name} skill={skill} />
		))}
	</div>
);

const SkillLabel = ({ currentLevel, maxLevel }: SkillLabelProps) => (
	<div>
		{currentLevel === maxLevel ? (
			<>&#10003;</>
		) : (
			<>
				{currentLevel}/{maxLevel}
			</>
		)}
	</div>
);

const SkillNode = ({ skill }: SkillNodeProps) => {
	const {
		checkIsSkillRequirementNotMet,
		checkSelectedSkillLevel,
		handleIncreaseSkillLevel,
		handleDecreaseSkillLevel,
	} = useSkillTree();
	const {
		name,
		description,
		icon,
		maxLevel,
		bonusType,
		bonusSheet,
		isPercentage,
		requirement,
	} = skill;
	const isSkillRequirementNotMet = checkIsSkillRequirementNotMet(requirement);
	const skillCurrentLevel = checkSelectedSkillLevel(name);
	const isSkillMaxed = skillCurrentLevel === maxLevel;

	const handleClick = () => {
		handleIncreaseSkillLevel({ name, bonusType, bonusSheet, isPercentage });
	};

	const handleRightClick = () => {
		if (skillCurrentLevel === 0) {
			return;
		}

		handleDecreaseSkillLevel(name);
	};

	const TooltipContent = (
		<>
			<p>{description}</p>
			<p>
				Current bonus:
				{bonusSheet[skillCurrentLevel - 1]
					? bonusSheet[skillCurrentLevel - 1].value
					: "-"}
			</p>
			<p>
				With next point:{" "}
				{bonusSheet[skillCurrentLevel]
					? bonusSheet[skillCurrentLevel].value
					: "-"}
			</p>
		</>
	);

	return (
		<Tooltip content={TooltipContent}>
			<Button
				isImageButton
				onClick={handleClick}
				onRightClick={handleRightClick}
				disabled={isSkillMaxed || isSkillRequirementNotMet}
			>
				<img src={icon} />
				<SkillLabel currentLevel={skillCurrentLevel} maxLevel={maxLevel} />
				<span className={styles.skill__name}>{name}</span>
			</Button>
		</Tooltip>
	);
};

const SkillsColumn = ({ skill }: SkillColumnProps) => {
	return (
		<div className={styles.tree__column}>
			<div className={styles.tree__row}>
				<SkillNode skill={skill} />
			</div>
			{!skill?.childrenSkills ? null : (
				<SkillsRow skills={skill.childrenSkills} />
			)}
		</div>
	);
};

const Summary = () => {
	const { getSummary } = useSkillTree();
	const summary = getSummary();

	return (
		<div>
			{summary.map(({ name, value, isPercentage }) => (
				<span key={name}>
					{name}: {value}
					{isPercentage && "%"}
				</span>
			))}
		</div>
	);
};

export const SkillTree = ({ skills, showSummary = false }: SkillTreeProps) => {
	return (
		<SkillTreeProvider>
			<div className={styles.tree}>
				{skills.map((skill) => (
					<SkillsColumn key={skill.name} skill={skill} />
				))}
			</div>
			{showSummary && <Summary />}
		</SkillTreeProvider>
	);
};
