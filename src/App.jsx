import { useState } from 'react';
import ticketsData from './data/tickets.json';
import TicketList from './components/TicketList';
import Filter from './components/Filter';
import CurrencySelector from './components/CurrencySelector';

import logo from './assets/logo.png'

const App = () => {
  const [stops, setStops] = useState([]);
  const [currency, setCurrency] = useState('RUB');

  const convertPrice = (price) => {
    const rates = { RUB: 1, USD: 0.013, EUR: 0.012 };
    return Math.round(price * rates[currency]);
  };

  const filteredTickets = ticketsData.tickets
    .filter((ticket) => stops.length === 0 || stops.includes(ticket.stops))
    .sort((a, b) => a.price - b.price)
    .map((ticket) => ({ ...ticket, price: convertPrice(ticket.price) }));

  return (
    <div className="app">
      <div className="header">
        <img src={logo} alt="Plane Icon" className="header-icon" />
      </div>
      <div className="content">
        <div className="filters">
          <div className="filter-wrapper">
            <CurrencySelector 
              currency={currency} 
              setCurrency={setCurrency} 
            />
            <Filter 
              stops={stops} 
              setStops={setStops} 
            />
          </div>
        </div>
        <TicketList 
          tickets={filteredTickets} 
          currency={currency} 
        />
      </div>
    </div>
  );
};

export default App;