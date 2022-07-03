type SkillLabelProps = {
	currentLevel: number;
	maxLevel: number;
};

export const SkillLabel = ({ currentLevel, maxLevel }: SkillLabelProps) => (
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
