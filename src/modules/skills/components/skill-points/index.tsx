import clsx from "clsx";
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
						className={clsx(
							styles.points__button,
							styles["points__button--decrement"]
						)}
						onClick={handleDecrementLevel}
						disabled={level === 1}
					/>
					<span className={styles["points__text--level"]}>Level</span>
					<button
						className={clsx(
							styles.points__button,
							styles["points__button--increment"]
						)}
						onClick={handleIncrementLevel}
						disabled={level === 61}
					/>
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
