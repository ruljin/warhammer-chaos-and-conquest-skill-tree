import { Button, Card } from "../../../components";
import styles from "./Main.module.scss";

export const Main = () => (
	<Card>
		<p>
			The sound of footsteps accompanies you as two tall ogres covered with
			tattoos of all the gods of chaos you know, escort you to the main hall.
		</p>
		<p>
			After a while, you enter a dimly lit room in which the characters hide out
			of sight in the shadows, and all you can see is a small throne of skulls
			on which sits a shadow-covered figure. This character suddenly asks you a
			question ...
		</p>
		<p>What gifts from the Gods are you here for today?</p>
		<div className={styles.main__actions}>
			<Button to="skills/vanquish">Vanquish skills</Button>
			<Button to="skills/champion">Champion skills</Button>
		</div>
	</Card>
);
