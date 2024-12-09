import PropTypes from 'prop-types';
import Ticket from './Ticket';

const TicketList = ({ tickets, currency }) => (
  <div className="ticket-list">
    {tickets.map((ticket, index) => (
      <Ticket key={index} ticket={ticket} currency={currency} />
    ))}
  </div>
);

TicketList.propTypes = {
  tickets: PropTypes.array.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TicketList;