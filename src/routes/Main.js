import { useNavigate } from "react-router-dom";
import styles from "./Main.module.css";

const Main = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.container}>
			<h1>색감 테스트</h1>
			<h2>
				브랜드 로고를 보고
				<br />
				알맞는 색을 찾을 수 있을까?
				<br />
				나의 색감을 알아보자!
			</h2>
			<button onClick={() => navigate("/problem", { replace: true })}>
				시작하기
			</button>
		</div>
	);
};

export default Main;
