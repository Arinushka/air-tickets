import './Main.css';
import { Filters } from './../Filters/Filters';
import { Tickets } from './../Tickets/Tickets';

export const Main = () => {
	return (
		<main className="main">
		<Filters></Filters>
		<Tickets></Tickets>
		</main>
	);
}
