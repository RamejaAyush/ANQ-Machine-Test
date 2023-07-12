import Asset from './Asset'
import PropTypes from 'prop-types'

const Bar = ({ investment }) => {
  return (
    <div className="box" style={{ border: `1px solid ${investment.color}` }}>
      <div className="name">
        <h3 style={{ color: `${investment.color}` }}>{investment.name}</h3>
        <h4>Total Amount: ${investment.amount}</h4>
      </div>
      <div className="investments">
        {investment.assets.map((asset, index) => (
          <Asset key={index} asset={asset} totalAmount={investment.amount} />
        ))}
      </div>
    </div>
  )
}

Bar.propTypes = {
  investment: PropTypes.shape({
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
  }),
  totalAmount: PropTypes.number,
}

export default Bar
