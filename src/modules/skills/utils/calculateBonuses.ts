import { SelectedSkill } from "../models/Skill";

export const calculateBonuses = (skills: SelectedSkill[]) => {
	let value = 0;

	skills.forEach(({ currentLevel, bonusSheet }) => {
		value += bonusSheet[currentLevel - 1].value;
	});

	return value;
};
