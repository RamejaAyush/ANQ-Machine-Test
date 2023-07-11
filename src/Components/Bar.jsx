import Asset from './Asset'
import PropTypes from 'prop-types'

const Bar = ({ investment, totalAmount }) => {
  const investmentPercentage = (investment.amount / totalAmount) * 100
  return (
    <div>
      <h2>
        {investment.name}: {investmentPercentage.toFixed(2)}%, Amount: $
        {investment.amount}
      </h2>
      {investment.assets.map((asset, index) => (
        <Asset key={index} asset={asset} totalAmount={investment.amount} />
      ))}
    </div>
  )
}

Bar.propTypes = {
  investment: PropTypes.shape({
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
  }),
  totalAmount: PropTypes.number,
}

export default Bar
