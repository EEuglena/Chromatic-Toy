import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Problem from "./routes/Problem";
import Main from "./routes/Main";
import { createContext, useContext, useState } from "react";
import Result from "./routes/Result";

const ScoreContext = createContext();

const ScoreProvider = ({ children }) => {
	const [score, setScore] = useState(0);
	const [index, setIndex] = useState(0);

	return (
		<ScoreContext.Provider value={{ score, setScore, index, setIndex }}>
			{children}
		</ScoreContext.Provider>
	);
};

export const useScore = () => {
	const { score, setScore, index, setIndex } = useContext(ScoreContext);
	return { score, setScore, index, setIndex };
};

const App = () => {
	return (
		<div className="App">
			<ScoreProvider>
				<Router>
					<Routes>
						<Route path="/problem" element={<Problem />}></Route>
						<Route path="/result" element={<Result />}></Route>
						<Route path="/" element={<Main />}></Route>
					</Routes>
				</Router>
			</ScoreProvider>
		</div>
	);
};

export default App;
