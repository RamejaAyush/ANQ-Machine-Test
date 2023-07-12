import Bar from './Bar'
import PropTypes from 'prop-types'

import '../Styles/Portfolio.scss'

const Portfolio = ({ portfolio }) => {
  return (
    <div className="Portfolio">
      <div className="stat-header">
        <h1>Current: ${portfolio.totalAmount}</h1>
        <h3>Invested: ${portfolio.investedAmount}</h3>
      </div>
      <div className="bar">
        <div className="inner-container">
          <div className="bar-ele indian-stocks"></div>
          <div className="bar-ele crypto"></div>
          <div className="bar-ele us-stocks"></div>
        </div>
      </div>
      <div className="sector-container">
        {portfolio.investments.map((investment, index) => (
          <Bar
            key={index}
            investment={investment}
            totalAmount={portfolio.totalAmount}
          />
        ))}
      </div>
    </div>
  )
}

Portfolio.propTypes = {
  portfolio: PropTypes.shape({
    totalAmount: PropTypes.number,
    investedAmount: PropTypes.number,
    investments: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        amount: PropTypes.number,
        color: PropTypes.string,
        assets: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            percentage: PropTypes.number,
            currentPrice: PropTypes.number,
            units: PropTypes.number,
            investedAmount: PropTypes.number,
            currentAmount: PropTypes.number,
          })
        ),
      })
    ),
  }),
}

export default Portfolio
