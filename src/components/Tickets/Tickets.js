import './Tickets.css';
import { Ticket } from './../Ticket/Ticket';

export const Tickets = () => {
	return (
		<div className="tickets">
			<Ticket></Ticket>
			<Ticket></Ticket>
			<button className="tickets__button">Показать еще</button>
		</div>
	);
}