import { useState } from "react";
import { Card } from "../../../components";
import { SkillPoints } from "../components/skill-points";
import { SkillTree } from "../components/skill-tree";
import { LEVELS } from "../constants/levels";
import { VANQUISH_SKILLS } from "../constants/vanquish-skills";

export const Vanquish = () => {
	const [level, setLevel] = useState(1);
	const [skillPoints, setSkillPoints] = useState(0);

	const handleDecrementLevel = () => {
		if (level === 1) {
			return;
		}

		setLevel(level - 1);
		setSkillPoints(LEVELS[level - 2].vanquishPoints);
	};

	const handleIncrementLevel = () => {
		setLevel(level + 1);
		setSkillPoints(LEVELS[level].vanquishPoints);
	};

	const handleDecrementSkillPoints = () => setSkillPoints(skillPoints - 1);

	const handleIncrementSkillPoints = () => setSkillPoints(skillPoints + 1);

	return (
		<Card title="Vanquish">
			<SkillPoints
				level={level}
				skillPoints={skillPoints}
				handleDecrementLevel={handleDecrementLevel}
				handleIncrementLevel={handleIncrementLevel}
			/>
			<Card.Content>
				<SkillTree
					skills={VANQUISH_SKILLS}
					showSummary={true}
					level={level}
					skillPoints={skillPoints}
					skillPointsMax={LEVELS[level - 1].vanquishPoints}
					handleDecrementSkillPoints={handleDecrementSkillPoints}
					handleIncrementSkillPoints={handleIncrementSkillPoints}
				/>
			</Card.Content>
		</Card>
	);
};
