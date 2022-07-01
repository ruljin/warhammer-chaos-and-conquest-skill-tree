import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./modules/main";
import { Vanquish, Champion } from "./modules/skills";
import styles from "./App.module.scss";

export const App = () => (
	<div className={styles.app}>
		<BrowserRouter>
			<Routes>
				<Route path="skills/vanquish" element={<Vanquish />} />
				<Route path="skills/champion" element={<Champion />} />
				<Route path="*" element={<Main />} />
			</Routes>
		</BrowserRouter>
	</div>
);
