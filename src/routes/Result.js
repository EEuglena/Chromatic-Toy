import { useNavigate } from "react-router-dom";
import { useScore } from "../App";
import styles from "./Result.module.css";

const Result = () => {
	const { score, setScore, setIndex } = useScore();
	const navigate = useNavigate();

	return (
		<div className={styles.container}>
			<h2>당신의 색감 점수는?</h2>
			<h1>{score * 10}점입니다!</h1>
			<p>
				대법원장과 대법관이 아닌 법관은 대법관회의의 동의를 얻어
				대법원장이 임명한다. 국민경제자문회의의 조직·직무범위 기타
				필요한 사항은 법률로 정한다. 재의의 요구가 있을 때에는 국회는
				재의에 붙이고, 재적의원과반수의 출석과 출석의원 3분의 2 이상의
				찬성으로 전과 같은 의결을 하면 그 법률안은 법률로서 확정된다.
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
			<button id={styles.second}>링크 공유하기</button>
			<button id={styles.third}>결과 캡처하기</button>
		</div>
	);
};

export default Result;
