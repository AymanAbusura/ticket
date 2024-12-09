import PropTypes from 'prop-types';

const Filter = ({ stops, setStops }) => {
  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setStops((prev) =>
      prev.includes(value) ? prev.filter((stop) => stop !== value) : [...prev, value]
    );
  };

  const handleAllTicketsChange = () => {
    setStops([]);
  };

  return (
    <div className="filter">
      <h4>Количество пересадок</h4>
      <label>
        <input type="checkbox" value="all" onChange={handleAllTicketsChange} checked={stops.length === 0} />
        Все
      </label>
      <label>
        <input type="checkbox" value="0" onChange={handleChange} checked={stops.includes(0)} />
        Без пересадок <span className="hover-text">только</span>
      </label>
      <label>
        <input type="checkbox" value="1" onChange={handleChange} checked={stops.includes(1)} />
        1 пересадка <span className="hover-text">только</span>
      </label>
      <label>
        <input type="checkbox" value="2" onChange={handleChange} checked={stops.includes(2)} />
        2 пересадки <span className="hover-text">только</span>
      </label>
      <label>
        <input type="checkbox" value="3" onChange={handleChange} checked={stops.includes(3)} />
        3 пересадки <span className="hover-text">только</span>
      </label>
    </div>
  );
};

Filter.propTypes = {
  stops: PropTypes.array.isRequired,
  setStops: PropTypes.func.isRequired,
};

export default Filter;