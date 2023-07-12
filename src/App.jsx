import { Suspense, lazy, useState, useEffect } from 'react'
import Logo from './Assets/anq logo.svg'
import { Routes, Route, useLocation, Link } from 'react-router-dom'

const Markets = lazy(() => import('./Components/Markets'))
const Holdings = lazy(() => import('./Components/Holding'))
const Portfolio = lazy(() => import('./Components/Portfolio'))

import './Styles/App.scss'

const App = () => {
  const location = useLocation()
  const [title, setTitle] = useState('')
  const portfolio = {
    totalAmount: 1000,
    investedAmount: 800,
    investments: [
      {
        name: 'Indian Stocks',
        amount: 500,
        color: '#5A9CFF',
        assets: [
          {
            name: 'HDFC Bank',
            percentage: 50,
            currentPrice: 1500,
            units: 1.666,
            investedAmount: 250,
            currentAmount: 250, // Update this with real-time data
          },
          {
            name: 'ITC',
            percentage: 30,
            currentPrice: 200,
            units: 7.5,
            investedAmount: 150,
            currentAmount: 150, // Update this with real-time data
          },
          {
            name: 'TCS',
            percentage: 20,
            currentPrice: 3000,
            units: 0.333,
            investedAmount: 100,
            currentAmount: 100, // Update this with real-time data
          },
        ],
      },
      {
        name: 'Crypto Currency',
        amount: 300,
        color: '#E546FF',
        assets: [
          {
            name: 'BTC',
            percentage: 50,
            currentPrice: 50000,
            units: 0.003,
            investedAmount: 150,
            currentAmount: 150, // Update this with real-time data
          },
          {
            name: 'ETH',
            percentage: 30,
            currentPrice: 2000,
            units: 0.45,
            investedAmount: 90,
            currentAmount: 90, // Update this with real-time data
          },
          {
            name: 'HBAR',
            percentage: 20,
            currentPrice: 0.3,
            units: 200,
            investedAmount: 60,
            currentAmount: 60, // Update this with real-time data
          },
        ],
      },
      {
        name: 'US Stocks',
        amount: 200,
        color: '#00FFD1',
        assets: [
          {
            name: 'Google',
            percentage: 50,
            currentPrice: 2000,
            units: 0.05,
            investedAmount: 100,
            currentAmount: 100, // Update this with real-time data
          },
          {
            name: 'Apple',
            percentage: 50,
            currentPrice: 150,
            units: 0.666,
            investedAmount: 100,
            currentAmount: 100, // Update this with real-time data
          },
        ],
      },
    ],
  }

  useEffect(() => {
    setTitle('Portfolio')
  }, [])

  return (
    <>
      <div className="App">
        <nav>
          <div className="logo">
            <img src={Logo} alt="ANQ" />
          </div>
        </nav>
        <div className="header">
          <h1 className="heading">
            {title} <span className="small-font">as of 11 July</span>
          </h1>
          <div className="btns">
            <Link to={'/'} className="btn sector-btn">
              Sectors
            </Link>
            <Link to={'/holdings'} className="btn holdings-btn">
              All Holdings
            </Link>
            <Link to={'/markets'} className="btn buy-btn">
              Buy More
            </Link>
          </div>
        </div>
        <Suspense fallback={<h1>Loading</h1>}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <Portfolio
                  title={title}
                  setTitle={setTitle}
                  portfolio={portfolio}
                />
              }
            />
            <Route
              path="/holdings"
              element={
                <Holdings
                  title={title}
                  setTitle={setTitle}
                  portfolio={portfolio}
                />
              }
            />
            <Route
              path="/markets"
              element={<Markets title={title} setTitle={setTitle} />}
            />
          </Routes>
        </Suspense>
      </div>

      <footer>
        <p>
          Made by <a href="https://www.ayushrameja.com">Ayush Rameja</a>
        </p>
      </footer>
    </>
  )
}

export default App
