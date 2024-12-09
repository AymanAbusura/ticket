import PropTypes from 'prop-types';

const CurrencySelector = ({ currency, setCurrency }) => (
  <div className="currency-selector">
    <h4>Валюта</h4>
    <div className="currency-buttons">
      <button
        className={currency === 'RUB' ? 'active' : ''}
        onClick={() => setCurrency('RUB')}
      >
        RUB
      </button>
      <button
        className={currency === 'USD' ? 'active' : ''}
        onClick={() => setCurrency('USD')}
      >
        USD
      </button>
      <button
        className={currency === 'EUR' ? 'active' : ''}
        onClick={() => setCurrency('EUR')}
      >
        EUR
      </button>
    </div>
  </div>
);

CurrencySelector.propTypes = {
  currency: PropTypes.string.isRequired,
  setCurrency: PropTypes.func.isRequired,
};

export default CurrencySelector;