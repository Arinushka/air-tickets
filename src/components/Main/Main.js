import './Main.css';
import { Filters } from './../Filters/Filters';
import { Tickets } from './../Tickets/Tickets';

export const Main = (props) => {
	return (
		<main className="main">
			<Filters 
			filterByAscendingPrice={props.filterByAscendingPrice}
			filterByDescendingPrice={props.filterByDescendingPrice}
			filterByTravelTime={props.filterByTravelTime}
			sortByOneDirection={props.sortByOneDirection}
			sortByDirect={props.sortByDirect}
			filterByPrice={props.filterByPrice}/>
			<Tickets
			tickets={props.tickets} />
		</main>
	);
}
