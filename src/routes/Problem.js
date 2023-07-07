import { useNavigate } from "react-router-dom";
import styles from "./Problem.module.css";
import Option from "../components/Option";
import { useScore } from "../App";

const Problem = () => {
	const options = [["#ED1C24", "#DC0B13", "#EE2C29", "#FE2D35"]];
	const answers = [2];
	const { score, setScore, index, setIndex } = useScore();
	const navigate = useNavigate();

	console.log(score);

	return (
		<div className={styles.container}>
			<h1>문제 {index + 1}</h1>
			<img
				src={`${process.env.PUBLIC_URL}/assets/${index}\.svg`}
				alt=""
			/>
			<h2>위 로고는 무슨 색인가요?</h2>
			<div className={styles.options}>
				{options[index].map((option, i) => (
					<Option
						id={i}
						key={i}
						color={option}
						onClick={(event) => {
							if (
								parseInt(event.target.id) === answers[index] ||
								parseInt(event.target.parentElement.id) ===
									answers[index]
							) {
								setScore((cur) => cur + 1);
							}
							index + 1 === options.length
								? navigate("/result", { replace: true })
								: setIndex((cur) => cur + 1);
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default Problem;
