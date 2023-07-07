import { useNavigate } from "react-router-dom";
import styles from "./Problem.module.css";
import Option from "../components/Option";
import { useScore } from "../App";

const Problem = () => {
	const options = [
		["#ED1C20", "#DE2C20", "#EE2C29", "#E02029"],
		["#F0C308", "#FFC300", "#FFB305", "#FFC910"],
		["#82D7D0", "#87E2D5", "#7AD2C9", "#80DDD9"],
		["#006341", "#106648", "#166055", "#056050"],
		["#30AAE2", "#3FAFEA", "#40A7E2", "#37ACE2"],
		["#10B96D", "#1AB26B", "#1FB65F", "#0FBB6B"],
		["#FB9F03", "#FA9508", "#FD960F", "#FF9A00"],
		["#603F8B", "#69388A", "#673C8E", "#694090"],
		["#2F566E", "#2B506E", "#355673", "#2A5A6F"],
		["#10D090", "#05CD82", "#03C77A", "#0FD477"],
	];
	const answers = [2, 1, 0, 0, 3, 1, 3, 2, 0, 1];
	const { score, setScore, index, setIndex } = useScore();
	const navigate = useNavigate();

	console.log(score);

	return (
		<div className={styles.container}>
			<h1>문제 {index + 1}</h1>
			<img
				src={`${process.env.PUBLIC_URL}/assets/${index}\.png`}
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
							window.blur();
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
