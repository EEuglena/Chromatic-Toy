import { useNavigate } from "react-router-dom";
import { useScore } from "../App";
import styles from "./Result.module.css";
import html2canvas from "html2canvas";

const Result = () => {
	const { score, setScore, setIndex } = useScore();
	const navigate = useNavigate();

	return (
		<div className={styles.container}>
			<h2>당신의 색감 점수는?</h2>
			<h1>{score * 10}점입니다!</h1>
			<p>
				{score > 8 ? (
					"혹시, 나 전생에 피카소였나?!"
				) : score > 6 ? (
					<>
						오우~
						<br />색 좀 볼 줄<br />
						아는 친구인가~?
					</>
				) : score > 4 ? (
					"삐빅, 정상입니다."
				) : score > 2 ? (
					<>
						근데 넌 모르잖아,
						<br />
						알록달록한 세상.
					</>
				) : (
					"나... 색맹은 아니겠지?"
				)}
			</p>
			<button
				id={styles.first}
				onClick={() => {
					setScore(0);
					setIndex(0);
					navigate("/", { replace: true });
				}}
			>
				다시 해보기
			</button>
			<button
				id={styles.second}
				onClick={() => {
					window.blur();
					const text = "https://eeuglena.github.io/Chromatic-Toy";
					navigator.clipboard.writeText(text);
				}}
			>
				테스트 공유하기
			</button>
			<button
				id={styles.third}
				onClick={() => {
					window.blur();
					html2canvas(document.querySelector("div div")).then(
						(canvas) => {
							const el = document.createElement("a");
							el.href = canvas.toDataURL("image/jpeg");
							el.download = "Screenshot.jpg";
							el.click();
						}
					);
				}}
			>
				결과 캡처하기
			</button>
		</div>
	);
};

export default Result;
