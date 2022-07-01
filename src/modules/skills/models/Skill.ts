import { Bonus } from "./Bonus";

export type Skill = {
	name: string;
	description: string;
	maxLevel: number;
	bonusType: string;
	bonusSheet: Bonus[];
	isPercentage: boolean;
};
