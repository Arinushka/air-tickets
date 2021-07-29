import './Tickets.css';
import { Ticket } from './../Ticket/Ticket';

export const Tickets = (props) => {
	return (
		<div className="tickets">
			{props.tickets.slice(0,2).map((ticket) => (
				<Ticket
					key={ticket.flightToken}
					ticket={ticket}
					filterByAscendingPrice={props.filterByAscendingPrice} />
			))}

			<button className="tickets__button">Показать еще</button>
		</div>
	);
}