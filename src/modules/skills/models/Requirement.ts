import { Skill } from "./Skill";

export type Requirement = Pick<Skill, "name"> & {
	currentLevel: number;
};
