import './Ticket.css';

import { Trip } from './../Trip/Trip';

export const Ticket = () => {
	return (
		<div>
			<div className="ticket">
      <div className="ticket__header">
        <div className="ticket__container">
          <p className="ticket__text">Перевозчик</p>
          <p className="ticket__text">Цена</p>
        </div>
        <p className="ticket__text">Стоимость для одного взрослого пассажира</p>
      </div>
			</div>
			
			<Trip></Trip>
			<div className="ticket__line"></div>
			<Trip></Trip>
			<button className="ticket__button">выбрать</button>
		</div>
	);
}