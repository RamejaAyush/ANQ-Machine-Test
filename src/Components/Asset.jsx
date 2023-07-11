import PropTypes from 'prop-types'

const Asset = ({ asset, totalAmount }) => {
  const assetAmount = (asset.percentage / 100) * totalAmount
  return (
    <div>
      <h3>
        {asset.name}: {asset.percentage}%, Amount: ${assetAmount.toFixed(2)}
      </h3>
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
