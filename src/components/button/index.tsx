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
	isImageButton?: boolean;
};

export const Button = ({
	children,
	type = "button",
	disabled = false,
	onClick,
	onRightClick,
	to,
	isImageButton = false,
}: ButtonProps) => {
	const classes = clsx(styles.button, {
		[styles.button__link]: to,
		[styles.button__image]: isImageButton,
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
