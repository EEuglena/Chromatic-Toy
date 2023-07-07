import styles from "./Option.module.css";

const Option = ({ id, color, onClick }) => {
	return (
		<button
			id={id}
			className={styles.container}
			style={{ backgroundColor: color }}
			onClick={onClick}
		></button>
	);
};

export default Option;
