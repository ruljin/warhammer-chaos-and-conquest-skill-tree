import { ReactNode } from "react";
import styles from "./Card.module.scss";

type CardProps = { children: ReactNode };

type ParagraphProps = CardProps;

export const Card = ({ children }: CardProps) => (
	<div className={styles.card}>{children}</div>
);

export const Paragraph = ({ children }: ParagraphProps) => (
	<p className={styles.card__paragraph}>{children}</p>
);

Card.Description = Paragraph;
