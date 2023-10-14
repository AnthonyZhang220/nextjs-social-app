"use client";
import React from "react";
import styles from "../../styles/sass/components/Chip.module.scss";
import Link from "next/link";

interface ChipProps {
	link: string;
	label: string;
	Icon: JSX.Element;
	fontSize?: number | 100;
	selected?: boolean | undefined;
}

const Chip: React.FC<ChipProps> = ({
	fontSize,
	link,
	label,
	Icon,
	selected,
}) => {
	return (
		<Link href={link} className={styles.chip}>
			<div className={styles.chip_container}>
				<div className={styles.chip_icon}>{Icon}</div>
				<div
					className={styles.chip_content}
					style={{ fontWeight: selected ? "bold" : "inherit" }}
				>
					<span>{label.toUpperCase()}</span>
				</div>
			</div>
		</Link>
	);
};

export default Chip;