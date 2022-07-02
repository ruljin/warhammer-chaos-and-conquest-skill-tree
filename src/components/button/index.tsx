import { ReactNode, MouseEvent } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./Button.module.scss";

type ButtonProps = {
	children: ReactNode;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
	onClick?: () => void;
	onRightClick?: () => void;
	to?: string;
	isMaxed?: boolean;
	isImageButton?: boolean;
};

export const Button = ({
	children,
	type = "button",
	disabled = false,
	onClick,
	onRightClick,
	to,
	isMaxed = false,
	isImageButton = false,
}: ButtonProps) => {
	const classes = clsx(styles.button, {
		[styles.button__link]: to,
		[styles.button__image]: isImageButton,
		[styles["button__image--max"]]: isMaxed,
	});

	const handleContextMenuClick = (e: MouseEvent<HTMLButtonElement>) => {
		if (onRightClick) {
			e.preventDefault();
			onRightClick();
		}
	};

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
			onContextMenu={handleContextMenuClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};
