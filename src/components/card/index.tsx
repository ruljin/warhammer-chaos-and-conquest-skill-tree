import { ReactNode } from "react";
import clsx from "clsx";
import styles from "./Card.module.scss";

type CardProps = { children: ReactNode; title?: string };

type ContentProps = Pick<CardProps, "children">;

type ParagraphProps = Pick<CardProps, "children">;

export const Card = ({ children, title }: CardProps) => {
	const cardClasses = clsx(styles.card, { [styles["card--padding"]]: !title });

	return (
		<div className={cardClasses}>
			{title ? (
				<>
					<div className={styles.card__title}>{title}</div>
					{children}
				</>
			) : (
				children
			)}
		</div>
	);
};
export const Content = ({ children }: ContentProps) => (
	<div className={styles.card__content}>{children}</div>
);

export const Paragraph = ({ children }: ParagraphProps) => (
	<p className={styles.card__paragraph}>{children}</p>
);

Card.Content = Content;
Card.Description = Paragraph;
