import './Main.css';
import { Filters } from './../Filters/Filters';
import { Tickets } from './../Tickets/Tickets';

export const Main = (props) => {
	return (
		<main className="main">
			<Filters />
			<Tickets
			tickets={props.tickets} />
		</main>
	);
}
