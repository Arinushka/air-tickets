import { Main } from './../Main/Main';
import flights from './../../utils/flights.json';
import React from 'react';

export const App = () => {

  const [tickets, setTickets] = React.useState([])

  console.log(flights.result.flights)

  React.useEffect(() => {
    setTickets(flights.result.flights)
  }, [])

  return (
    <div className="App">
      <Main
        tickets={tickets} />
    </div>
  );
}
