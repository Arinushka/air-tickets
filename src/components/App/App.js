import { Main } from './../Main/Main';
import flights from './../../utils/flights.json';
import React from 'react';

export const App = () => {

  const [tickets, setTickets] = React.useState([]);
  const [filteredTickets, setFilteredTickets] = React.useState([]);

  console.log(flights.result.flights)

  const filterByAscendingPrice = () => {
    setTickets((state) => [...state].sort((a, b) => { return a.flight.price.total.amount - b.flight.price.total.amount }))
  }

  const filterByDescendingPrice = () => {
    setTickets((state) => [...state].sort((a, b) => { return b.flight.price.total.amount - a.flight.price.total.amount }))
  }

  const filterByTravelTime = () => {
    setTickets((state) => [...state].sort((a, b) => { return a.flight.legs[0].duration - b.flight.legs[0].duration || a.flight.legs[1].duration - b.flight.legs[1].duration }))
  }

  const sortByOneDirection = () => {
    const sortOneDirection = flights.result.flights.filter((ticket)=> {return ticket.flight.legs[0].segments.length > 1 || ticket.flight.legs[1].segments.length > 1 })
    setTickets(sortOneDirection)
    setFilteredTickets(sortOneDirection)
  }
  const sortByDirect = () => {
    const sortDirect = flights.result.flights.filter((ticket)=> {return ticket.flight.legs[0].segments.length === 1 && ticket.flight.legs[1].segments.length === 1 })
    setTickets(sortDirect)
    setFilteredTickets(sortDirect)
  }

const filterByPrice = (valueStart, valueEnd) => {
  setTickets((state) => [...state].filter((ticket)=>{return Number(valueStart) <= Number(ticket.flight.price.total.amount) && Number(ticket.flight.price.total.amount) <= Number(valueEnd)}))
}

  React.useEffect(() => {
    setTickets(flights.result.flights)
  }, [])

  return (
    <div className="App">
      <Main
        tickets={tickets}
        filterByAscendingPrice={filterByAscendingPrice}
        filterByDescendingPrice={filterByDescendingPrice}
        filterByTravelTime={filterByTravelTime}
        sortByOneDirection={sortByOneDirection}
        sortByDirect={sortByDirect}
        filterByPrice={filterByPrice}/>
    </div>
  );
}
