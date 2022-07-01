import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./Button.module.scss";

type ButtonProps = {
	children: ReactNode;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
	onClick?: () => void;
	to?: string;
	isImageButton?: boolean;
};

export const Button = ({
	children,
	type = "button",
	disabled = false,
	onClick,
	to,
	isImageButton = false,
}: ButtonProps) => {
	const classes = clsx(styles.button, {
		[styles.button__link]: to,
		[styles.button__image]: isImageButton,
	});

	if (to) {
		return (
			<NavLink className={classes} to={to}>
				{children}
			</NavLink>
		);
	}

	return (
		<button
			className={classes}
			type={type}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};
