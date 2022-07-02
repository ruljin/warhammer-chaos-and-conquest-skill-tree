import { useContext } from "react";
import { SkillTreeContext } from "../context/SkillTreeContext";

export const useSkillTree = () => {
	const context = useContext(SkillTreeContext);

	if (context === undefined) {
		throw new Error("useSkillTree must be used within a SkillTreeProvider");
	}

	return context;
};
