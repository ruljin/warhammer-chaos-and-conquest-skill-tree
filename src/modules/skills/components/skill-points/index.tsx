import { Dispatch, SetStateAction } from "react";
import styles from "./SkillPoints.module.scss";

type SkillPointsProps = {
	level: number;
	skillPoints: number;
	handleDecrementLevel: () => void;
	handleIncrementLevel: () => void;
};

export const SkillPoints = ({
	level,
	skillPoints,
	handleDecrementLevel,
	handleIncrementLevel,
}: SkillPointsProps) => {
	return (
		<div className={styles.points}>
			<div className={styles.points__level}>
				<div className={styles.points__container}>
					<button
						className={styles.points__button}
						onClick={handleDecrementLevel}
						disabled={level === 1}
					>
						<img
							className={styles.points__image}
							src="../src/assets/decrement.png"
						/>
					</button>
					<span className={styles["points__text--level"]}>Level</span>
					<button
						className={styles.points__button}
						onClick={handleIncrementLevel}
						disabled={level === 61}
					>
						<img
							className={styles.points__image}
							src="../src/assets/increment.png"
						/>
					</button>
				</div>
				<div className={styles["points__text--value"]}>{level}</div>
			</div>
			<div className={styles.points__skills}>
				<span className={styles["points__text--skills"]}>
					Remaining Skill Points:
				</span>{" "}
				{skillPoints}
			</div>
		</div>
	);
};
