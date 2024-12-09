import PropTypes from 'prop-types';
import airplane from '../assets/plane.png';

const Ticket = ({ ticket, currency }) => {
  const currencySymbols = {
    RUB: '₽',
    USD: '$',
    EUR: '€',
  };

  const formatDate = (dateStr) => {
    const [day, month, year] = dateStr.split('.').map(Number);
    const date = new Date(year + 2000, month - 1, day);

    const dayPart = new Intl.DateTimeFormat('ru-RU', { day: 'numeric' }).format(date);
    const monthPart = new Intl.DateTimeFormat('ru-RU', { month: 'long' }).format(date);
    const yearPart = new Intl.DateTimeFormat('ru-RU', { year: 'numeric' }).format(date);
    const weekdayPart = new Intl.DateTimeFormat('ru-RU', { weekday: 'short' }).format(date);

    return `${dayPart} ${monthPart} ${yearPart}, ${weekdayPart}`;
  };

  return (
    <div className="ticket">
      <div className="ticket-header">
        <img
          src={`/airline_logos/${ticket.carrier.toLowerCase()}.webp`}
          alt={`${ticket.carrier} logo`}
          className="ticket-logo"
        />
        <button className="buy-button">
          Купить за {ticket.price} {currencySymbols[currency]}
        </button>
      </div>
      <div className="ticket-info">
        <div>
          <p className="time">{ticket.departure_time}</p>
          <p className="location">
            {ticket.origin}, {ticket.origin_name}
          </p>
          <p className="date">{formatDate(ticket.departure_date)}</p>
        </div>
        <div className="stops">
          <span>
            {ticket.stops === 0
              ? 'Без пересадок'
              : `${ticket.stops} ${ticket.stops === 1 ? 'пересадка' : 'пересадки'}`
            }
          </span>
          <hr />
          <img src={airplane} alt="airplane" />
        </div>
        <div>
          <p className="time">{ticket.arrival_time}</p>
          <p className="location">
            {ticket.destination_name}, {ticket.destination}
          </p>
          <p className="date">{formatDate(ticket.arrival_date)}</p>
        </div>
      </div>
    </div>
  );
};

Ticket.propTypes = {
  ticket: PropTypes.object.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Ticket;