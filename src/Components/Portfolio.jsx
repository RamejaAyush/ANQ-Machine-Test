import Bar from './Bar'
import PropTypes from 'prop-types'

import '../Styles/Portfolio.scss'

const Portfolio = ({ portfolio }) => {
  return (
    <div className="Portfolio">
      <div>
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
