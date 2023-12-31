"use client";
import styles from "../styles/sass/components/Button.module.scss";

type ButtonProp = {
	label?: string;
	bgColor: string;
	radius: number;
	color?: string;
	paddingY?: number;
	paddingX?: number;
	onClick?: (...args: any[]) => void;
};

function Button(props: ButtonProp) {
	return props.label ? (
		<div
			className={styles.button}
			role="button"
			style={{
				borderRadius: `${props.radius}px`,
				backgroundColor: props.bgColor,
				padding: `${props.paddingY}px ${props.paddingX}px`,
				color: props.color,
				cursor: "pointer",
			}}
			onClick={props.onClick}
		>
			<span className={styles.label}>{props.label}</span>
		</div>
	) : null;
}

export default Button;
