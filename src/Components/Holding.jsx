import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

import '../Styles/Holdings.scss'

const Holdings = ({ portfolio, setTitle }) => {
  const [allHoldings, setAllHoldings] = useState([])

  useEffect(() => {
    setTitle('Holdings')

    const getStocksCoins = (portfolio) => {
      const stocksCoins = []
      portfolio.investments.forEach((investment) => {
        investment.assets.forEach((asset) => {
          stocksCoins.push(asset)
        })
      })
      stocksCoins.sort((a, b) => b.currentAmount - a.currentAmount)
      return stocksCoins
    }

    const stocksCoins = getStocksCoins(portfolio)
    setAllHoldings(stocksCoins)

    return () => {
      setTitle('Portfolio') // Reset the title when the component unmounts
    }
  }, [])

  return (
    <div className="all-holdings">
      <div className="holdings-header">
        <h1>All Holdings</h1>
      </div>

      <div className="holdings-container">
        <div className="indicators">
          <div className="name">
            <p>Name</p>
          </div>
          <div className="units">
            <p>Units</p>
          </div>
          <div className="amount">
            <p>Amount</p>
          </div>
        </div>
        <div className="holdings">
          {allHoldings.map((element, index) => (
            <div className="holding" key={index}>
              <div className="name">
                <h2>{element.name}</h2>
              </div>
              <div className="units">
                <p>{element.units}</p>
              </div>
              <div className="amount">
                <p>$ {element.currentAmount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

Holdings.propTypes = {
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
  title: PropTypes.string,
  setTitle: PropTypes.string,
}

export default Holdings
