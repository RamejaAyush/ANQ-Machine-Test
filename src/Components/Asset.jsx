import PropTypes from 'prop-types'

const Asset = ({ asset }) => {
  return (
    <div className="asset-container">
      <p>{asset.name}</p>
      <p>{asset.percentage}%</p>
    </div>
  )
}

Asset.propTypes = {
  asset: PropTypes.shape({
    name: PropTypes.string,
    percentage: PropTypes.number,
    currentPrice: PropTypes.number,
    units: PropTypes.number,
    investedAmount: PropTypes.number,
    currentAmount: PropTypes.number,
  }),
  totalAmount: PropTypes.number,
}

export default Asset
