import { ReactNode, useRef } from "react";
import styles from "./Tooltip.module.scss";

type TooltipProps = {
	children: ReactNode;
	content: ReactNode;
};

export const Tooltip = ({ children, content }: TooltipProps) => {
	const tooltipRef = useRef<HTMLDivElement | null>(null);
	let tooltipTimeout: number;

	const handleShopTooltip = () => {
		tooltipTimeout = setTimeout(() => {
			tooltipRef.current?.classList.add(
				styles["tooltip__content--visible"],
				styles.tooltip__bottom
			);
		}, 400);
	};

	const handleHideTooltip = () => {
		clearInterval(tooltipTimeout);
		tooltipRef.current?.classList.remove(
			styles["tooltip__content--visible"],
			styles.tooltip__bottom
		);
	};

	return (
		<div
			className={styles.tooltip}
			onMouseEnter={handleShopTooltip}
			onMouseLeave={handleHideTooltip}
		>
			{children}
			<div ref={tooltipRef} className={styles.tooltip__content}>
				{content}
			</div>
		</div>
	);
};
