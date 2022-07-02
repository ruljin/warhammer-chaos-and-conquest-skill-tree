import { Bonus } from "./Bonus";

export type SelectedSkill = Pick<
	Skill,
	"name" | "bonusType" | "bonusSheet" | "isPercentage"
> & {
	currentLevel: number;
};

export type Skill = {
	name: string;
	description: string;
	icon: string;
	maxLevel: number;
	bonusType: string;
	bonusSheet: Bonus[];
	isPercentage: boolean;
	childrenSkills?: Skill[];
	requirement?: SelectedSkill;
};
