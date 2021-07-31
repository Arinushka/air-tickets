import './Tickets.css';
import { Ticket } from './../Ticket/Ticket';
import React from 'react';

export const Tickets = (props) => {

	const [ticketsCount, setTicketsCount] = React.useState(2);

	const handlerTicketsCount = () => {
		setTicketsCount((state)=> state + 2)
	}

	return (
		<div className="tickets">
			{props.tickets.slice(0,ticketsCount).map((ticket) => (
				<Ticket
					key={ticket.flightToken}
					ticket={ticket}
					filterByAscendingPrice={props.filterByAscendingPrice} />
			))}

		{ticketsCount<props.tickets.length && <button type="button" onClick={handlerTicketsCount} className="tickets__button">Показать еще</button>}
		</div>
	);
}