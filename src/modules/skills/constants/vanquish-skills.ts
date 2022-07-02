const BLOODTHIRSTY = {
	name: "Bloodthirsty",
	description:
		"Grants your Chaos Champion the chance to replenish some of their stamina when striking killing blows against enemy foes.",
	icon: "../src/assets/temporary.png",
	maxLevel: 15,
	bonusType: "Vanquish Defeated Enemy Stamina Restored",
	bonusSheet: [
		{ level: 1, value: 5 },
		{ level: 2, value: 10 },
		{ level: 3, value: 15 },
		{ level: 4, value: 20 },
		{ level: 5, value: 25 },
	],
	isPercentage: true,
	requirement: { name: "Gloat II", currentLevel: 3 },
};

const GLOAT_II = {
	name: "Gloat II",
	description: "Increase the chance of gaining loot after defeating foes.",
	icon: "../src/assets/temporary.png",
	maxLevel: 25,
	bonusType: "Vanquish Double Reward Chance",
	bonusSheet: [
		{ level: 1, value: 0.5 },
		{ level: 2, value: 1 },
		{ level: 3, value: 1.5 },
		{ level: 4, value: 2 },
		{ level: 5, value: 2.5 },
	],
	isPercentage: true,
	childrenSkills: [BLOODTHIRSTY],
	requirement: { name: "Flurry of the Attacks II", currentLevel: 3 },
};

const FLURRY_OF_ATTACKS_II = {
	name: "Flurry of the Attacks II",
	description:
		"Increases the number of attacks a Chaos Champion can make against foes in each march.",
	icon: "../src/assets/temporary.png",
	maxLevel: 25,
	bonusType: "Vanquish Chain Attacks",
	bonusSheet: [
		{ level: 1, value: 1 },
		{ level: 2, value: 2 },
		{ level: 3, value: 3 },
		{ level: 4, value: 4 },
		{ level: 5, value: 5 },
	],
	isPercentage: false,
	childrenSkills: [GLOAT_II],
	requirement: { name: "Vanquish Speed II", currentLevel: 3 },
};

const VANQUISH_SPEED_II = {
	name: "Vanquish Speed II",
	description:
		"Increase the march speed of your Chaos Champion when on a vanquish march.",
	icon: "../src/assets/temporary.png",
	maxLevel: 25,
	bonusType: "Champion Stamina Regen per Minute",
	bonusSheet: [
		{ level: 1, value: 1.5 },
		{ level: 2, value: 3 },
		{ level: 3, value: 4.5 },
		{ level: 4, value: 6 },
		{ level: 5, value: 7.5 },
	],
	isPercentage: true,
	childrenSkills: [FLURRY_OF_ATTACKS_II],
	requirement: { name: "Gloat I", currentLevel: 3 },
};

const GLOAT_I = {
	name: "Gloat I",
	description: "Increase the chance of gaining loot after defeating foes.",
	icon: "../src/assets/temporary.png",
	maxLevel: 15,
	bonusType: "Vanquish Double Reward Chance",
	bonusSheet: [
		{ level: 1, value: 0.5 },
		{ level: 2, value: 1 },
		{ level: 3, value: 1.5 },
		{ level: 4, value: 2 },
		{ level: 5, value: 2.5 },
	],
	isPercentage: true,
	childrenSkills: [VANQUISH_SPEED_II],
	requirement: { name: "Flurry of Attacks I", currentLevel: 3 },
};

const FLURRY_OF_ATTACKS_I = {
	name: "Flurry of Attacks I",
	description:
		"Increases the number of attacks a Chaos Champion can make against foes in each march.",
	icon: "../src/assets/temporary.png",
	maxLevel: 15,
	bonusType: "Vanquish Chain Attacks",
	bonusSheet: [
		{ level: 1, value: 1 },
		{ level: 2, value: 2 },
		{ level: 3, value: 3 },
		{ level: 4, value: 4 },
		{ level: 5, value: 5 },
	],
	isPercentage: false,
	childrenSkills: [GLOAT_I],
	requirement: { name: "Vanquish Speed I", currentLevel: 3 },
};

const VANQUISH_SPEED_I = {
	name: "Vanquish Speed I",
	description:
		"Increase the march speed of your Chaos Champion when on a vanquish march.",
	icon: "../src/assets/temporary.png",
	maxLevel: 15,
	bonusType: "Champion Stamina Regen per Minute",
	bonusSheet: [
		{ level: 1, value: 1 },
		{ level: 2, value: 2 },
		{ level: 3, value: 3 },
		{ level: 4, value: 4 },
		{ level: 5, value: 5 },
	],
	isPercentage: true,
	childrenSkills: [FLURRY_OF_ATTACKS_I],
	requirement: { name: "Champion Recovery I", currentLevel: 3 },
};

const BANE_OF_THE_UNDEAD_I = {
	name: "Bane of the Undead I",
	description:
		"Your Chaos Champion does additional damage against Undead foes.",
	icon: "../src/assets/temporary.png",
	maxLevel: 15,
	bonusType: "Undead Vanquish Damage Bonus",
	bonusSheet: [
		{ level: 1, value: 0.5 },
		{ level: 2, value: 1 },
		{ level: 3, value: 1.5 },
		{ level: 4, value: 2 },
		{ level: 5, value: 2.5 },
	],
	isPercentage: true,
	requirement: { name: "Bane of the Dwarfs II", currentLevel: 3 },
};

const BANE_OF_THE_BEASTMEN_II = {
	name: "Bane of the Beastmen II",
	description:
		"Your Chaos Champion does additional damage against Beastmen foes.",
	icon: "../src/assets/temporary.png",
	maxLevel: 25,
	bonusType: "Beastmen Vanquish Damage Bonus",
	bonusSheet: [
		{ level: 1, value: 0.5 },
		{ level: 2, value: 1 },
		{ level: 3, value: 1.5 },
		{ level: 4, value: 2 },
		{ level: 5, value: 2.5 },
	],
	isPercentage: true,
	requirement: { name: "Bane of the Empire II", currentLevel: 3 },
};

const BANE_OF_THE_DWARFS_II = {
	name: "Bane of the Dwarfs II",
	description: "Your Chaos Champion does additional damage against Dwarf foes.",
	icon: "../src/assets/temporary.png",
	maxLevel: 25,
	bonusType: "Dwarf Vanquish Damage Bonus",
	bonusSheet: [
		{ level: 1, value: 0.5 },
		{ level: 2, value: 1 },
		{ level: 3, value: 1.5 },
		{ level: 4, value: 2 },
		{ level: 5, value: 2.5 },
	],
	isPercentage: true,
	childrenSkills: [BANE_OF_THE_UNDEAD_I],
	requirement: { name: "Bane of the Empire II", currentLevel: 3 },
};

const BANE_OF_THE_GREENSKINS_II = {
	name: "Bane of the Greenskins II",
	description:
		"Your Chaos Champion does additional damage against Greenskin foes.",
	icon: "../src/assets/temporary.png",
	maxLevel: 25,
	bonusType: "Greenskin Vanquish Damage Bonus",
	bonusSheet: [
		{ level: 1, value: 0.5 },
		{ level: 2, value: 1 },
		{ level: 3, value: 1.5 },
		{ level: 4, value: 2 },
		{ level: 5, value: 2.5 },
	],
	isPercentage: true,
	requirement: { name: "Bane of the Empire II", currentLevel: 3 },
};

const BANE_OF_THE_EMPIRE_II = {
	name: "Bane of the Empire II",
	description:
		"Your Chaos Champion does additional damage against Empire foes.",
	icon: "../src/assets/temporary.png",
	maxLevel: 25,
	bonusType: "Empire Vanquish Damage Bonus",
	bonusSheet: [
		{ level: 1, value: 0.5 },
		{ level: 2, value: 1 },
		{ level: 3, value: 1.5 },
		{ level: 4, value: 2 },
		{ level: 5, value: 2.5 },
	],
	isPercentage: true,
	childrenSkills: [
		BANE_OF_THE_GREENSKINS_II,
		BANE_OF_THE_DWARFS_II,
		BANE_OF_THE_BEASTMEN_II,
	],
	requirement: { name: "Vanquish Damage II", currentLevel: 3 },
};

const VANQUISH_DAMAGE_II = {
	name: "Vanquish Damage II",
	description:
		"Increase the damage done by your Chaos Champion when vanquishing foes.",
	icon: "../src/assets/temporary.png",
	maxLevel: 25,
	bonusType: "Champion Vanquish Damage",
	bonusSheet: [
		{ level: 1, value: 1 },
		{ level: 2, value: 2 },
		{ level: 3, value: 3 },
		{ level: 4, value: 4 },
		{ level: 5, value: 5 },
	],
	isPercentage: true,
	childrenSkills: [BANE_OF_THE_EMPIRE_II],
	requirement: { name: "Bane of the Dwarfs I", currentLevel: 3 },
};

const BANE_OF_THE_DWARFS_I = {
	name: "Bane of the Dwarfs I",
	description: "Your Chaos Champion does additional damage against Dwarf foes.",
	icon: "../src/assets/temporary.png",
	maxLevel: 15,
	bonusType: "Dwarf Vanquish Damage Bonus",
	bonusSheet: [
		{ level: 1, value: 0.5 },
		{ level: 2, value: 1 },
		{ level: 3, value: 1.5 },
		{ level: 4, value: 2 },
		{ level: 5, value: 2.5 },
	],
	isPercentage: true,
	childrenSkills: [VANQUISH_DAMAGE_II],
	requirement: { name: "Bane of the Greenskins I", currentLevel: 3 },
};

const BANE_OF_THE_GREENSKINS_I = {
	name: "Bane of the Greenskins I",
	description:
		"Your Chaos Champion does additional damage against Greenskin foes.",
	icon: "../src/assets/temporary.png",
	maxLevel: 15,
	bonusType: "Greenskin Vanquish Damage Bonus",
	bonusSheet: [
		{ level: 1, value: 0.5 },
		{ level: 2, value: 1 },
		{ level: 3, value: 1.5 },
		{ level: 4, value: 2 },
		{ level: 5, value: 2.5 },
	],
	isPercentage: true,
	childrenSkills: [BANE_OF_THE_DWARFS_I],
	requirement: { name: "Bane of the Beastmen I", currentLevel: 3 },
};

const BANE_OF_THE_BEASTMEN_I = {
	name: "Bane of the Beastmen I",
	description:
		"Your Chaos Champion does additional damage against Beastmen foes.",
	icon: "../src/assets/temporary.png",
	maxLevel: 15,
	bonusType: "Beastmen Vanquish Damage Bonus",
	bonusSheet: [
		{ level: 1, value: 0.5 },
		{ level: 2, value: 1 },
		{ level: 3, value: 1.5 },
		{ level: 4, value: 2 },
		{ level: 5, value: 2.5 },
	],
	isPercentage: true,
	childrenSkills: [BANE_OF_THE_GREENSKINS_I],
	requirement: { name: "Bane of the Empire I", currentLevel: 3 },
};

const BANE_OF_THE_EMPIRE_I = {
	name: "Bane of the Empire I",
	description:
		"Your Chaos Champion does additional damage against Empire foes.",
	icon: "../src/assets/temporary.png",
	maxLevel: 15,
	bonusType: "Empire Vanquish Damage Bonus",
	bonusSheet: [
		{ level: 1, value: 0.5 },
		{ level: 2, value: 1 },
		{ level: 3, value: 1.5 },
		{ level: 4, value: 2 },
		{ level: 5, value: 2.5 },
	],
	isPercentage: true,
	childrenSkills: [BANE_OF_THE_BEASTMEN_I],
	requirement: { name: "Vanquish Damage I", currentLevel: 3 },
};

const VANQUISH_DAMAGE_I = {
	name: "Vanquish Damage I",
	description:
		"Increase the damage done by your Chaos Champion when vanquishing foes.",
	icon: "../src/assets/temporary.png",
	maxLevel: 15,
	bonusType: "Champion Vanquish Damage",
	bonusSheet: [
		{ level: 1, value: 1 },
		{ level: 2, value: 2 },
		{ level: 3, value: 3 },
		{ level: 4, value: 4 },
		{ level: 5, value: 5 },
	],
	isPercentage: true,
	childrenSkills: [BANE_OF_THE_EMPIRE_I],
	requirement: { name: "Champion Recovery I", currentLevel: 3 },
};

const BOUNDLESS_STAMINA_III = {
	name: "Boundless Stamina III",
	description: "Increases the maximum stamina of your Chaos Champion.",
	icon: "../src/assets/temporary.png",
	maxLevel: 30,
	bonusType: "Champion Maximum Stamina",
	bonusSheet: [
		{ level: 1, value: 50 },
		{ level: 2, value: 100 },
		{ level: 3, value: 150 },
		{ level: 4, value: 200 },
		{ level: 5, value: 250 },
	],
	isPercentage: false,
	requirement: { name: "Inhuman Vigour III", currentLevel: 3 },
};

const INHUMAN_VIGOUR_III = {
	name: "Inhuman Vigour III",
	description:
		"Reduces your Chaos Champion's stamina used in each vanquish attack against enemy foes.",
	icon: "../src/assets/temporary.png",
	maxLevel: 30,
	bonusType: "Vanquish March Stamina Cost Reduction",
	bonusSheet: [
		{ level: 1, value: -0.25 },
		{ level: 2, value: -0.5 },
		{ level: 3, value: -0.75 },
		{ level: 4, value: -1 },
		{ level: 5, value: -1.25 },
	],
	isPercentage: true,
	childrenSkills: [BOUNDLESS_STAMINA_III],
	requirement: { name: "Boundless Stamina II", currentLevel: 3 },
};

const BOUNDLESS_STAMINA_II = {
	name: "Boundless Stamina II",
	description: "Increases the maximum stamina of your Chaos Champion.",
	icon: "../src/assets/temporary.png",
	maxLevel: 25,
	bonusType: "Champion Maximum Stamina",
	bonusSheet: [
		{ level: 1, value: 50 },
		{ level: 2, value: 100 },
		{ level: 3, value: 150 },
		{ level: 4, value: 200 },
		{ level: 5, value: 250 },
	],
	isPercentage: false,
	childrenSkills: [INHUMAN_VIGOUR_III],
	requirement: { name: "Inhuman Vigour II", currentLevel: 3 },
};

const INHUMAN_VIGOUR_II = {
	name: "Inhuman Vigour II",
	description:
		"Reduces your Chaos Champion's stamina used in each vanquish attack against enemy foes.",
	icon: "../src/assets/temporary.png",
	maxLevel: 25,
	bonusType: "Vanquish March Stamina Cost Reduction",
	bonusSheet: [
		{ level: 1, value: -0.25 },
		{ level: 2, value: -0.5 },
		{ level: 3, value: -0.75 },
		{ level: 4, value: -1 },
		{ level: 5, value: -1.25 },
	],
	isPercentage: true,
	childrenSkills: [BOUNDLESS_STAMINA_II],
	requirement: { name: "Champion Recovery II", currentLevel: 3 },
};

const CHAMPION_RECOVERY_II = {
	name: "Champion Recovery II",
	description:
		"Increase the rate at which your Chaos Champion recovers stamina.",
	icon: "../src/assets/temporary.png",
	maxLevel: 3,
	bonusType: "Champion Stamina Regen per Minute",
	bonusSheet: [
		{ level: 1, value: 1 },
		{ level: 2, value: 2 },
		{ level: 3, value: 3 },
	],
	isPercentage: false,
	childrenSkills: [INHUMAN_VIGOUR_II],
	requirement: { name: "Boundless Stamina I", currentLevel: 3 },
};

const BOUNDLESS_STAMINA_I = {
	name: "Boundless Stamina I",
	description: "Increases the maximum stamina of your Chaos Champion.",
	icon: "../src/assets/temporary.png",
	maxLevel: 15,
	bonusType: "Champion Maximum Stamina",
	bonusSheet: [
		{ level: 1, value: 25 },
		{ level: 2, value: 50 },
		{ level: 3, value: 75 },
		{ level: 4, value: 100 },
		{ level: 5, value: 125 },
	],
	isPercentage: false,
	childrenSkills: [CHAMPION_RECOVERY_II],
	requirement: { name: "Inhuman Vigour I", currentLevel: 3 },
};

const INHUMAN_VIGOUR_I = {
	name: "Inhuman Vigour I",
	description:
		"Reduces your Chaos Champion's stamina used in each vanquish attack against enemy foes.",
	icon: "../src/assets/temporary.png",
	maxLevel: 15,
	bonusType: "Vanquish March Stamina Cost Reduction",
	bonusSheet: [
		{ level: 1, value: -0.25 },
		{ level: 2, value: -0.5 },
		{ level: 3, value: -0.75 },
		{ level: 4, value: -1 },
		{ level: 5, value: -1.25 },
	],
	isPercentage: true,
	childrenSkills: [BOUNDLESS_STAMINA_I],
	requirement: { name: "Champion Recovery I", currentLevel: 3 },
};

const CHAMPION_RECOVERY_I = {
	name: "Champion Recovery I",
	description:
		"Increase the rate at which your Chaos Champion recovers stamina.",
	icon: "../src/assets/temporary.png",
	maxLevel: 3,
	bonusType: "Champion Stamina Regen per Minute",
	bonusSheet: [
		{ level: 1, value: 1 },
		{ level: 2, value: 2 },
		{ level: 3, value: 3 },
	],
	isPercentage: false,
	childrenSkills: [INHUMAN_VIGOUR_I, VANQUISH_DAMAGE_I, VANQUISH_SPEED_I],
};

export const VANQUISH_SKILLS = [CHAMPION_RECOVERY_I];
