
import React, { Component } from 'react'

export default React.createContext({
  stocks: [],
  strategies: [],
  addStrategy: () => {},
  addStock: () => {},
  deleteStock: () => {},
  deleteStrategy: () => {},
});

export class ArticleProvider extends Component {
setError = error => {
  console.error(error)
  this.setState({ error })
}

setStrategies = strategies => {
  this.setState({ strategies })
}

setStocks = stocks => {
  this.setState({ stocks })
}


}
