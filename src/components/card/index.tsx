import { ReactNode } from "react";
import clsx from "clsx";
import styles from "./Card.module.scss";

type CardProps = { children: ReactNode; title?: string };

type ContentProps = Pick<CardProps, "children">;

type ParagraphProps = Pick<CardProps, "children">;

type FooterProps = Pick<CardProps, "children">;

export const Card = ({ children, title }: CardProps) => {
	const cardClasses = clsx(styles.card, { [styles["card--padding"]]: !title });

	return (
		<div className={cardClasses}>
			{title ? (
				<>
					<header className={styles.card__title}>{title}</header>
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

export const Footer = ({ children }: FooterProps) => (
	<footer className={styles.card__footer}>{children}</footer>
);

Card.Content = Content;
Card.Description = Paragraph;
Card.Footer = Footer;
