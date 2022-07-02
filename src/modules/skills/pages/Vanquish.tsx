import { Card } from "../../../components";
import { SkillTree } from "../components/skill-tree";
import { VANQUISH_SKILLS } from "../constants/vanquish-skills";

export const Vanquish = () => (
	<Card>
		<p>Vanquish</p>
		<SkillTree skills={VANQUISH_SKILLS} showSummary={true} />
	</Card>
);
