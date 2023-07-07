import styles from "./Option.module.css";

const Option = ({ id, color, onClick }) => {
	return (
		<button
			id={id}
			className={styles.container}
			style={{ backgroundColor: color }}
			onClick={onClick}
		>
			<p>{color}</p>
		</button>
	);
};

export default Option;
