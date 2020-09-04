import TokenService from './token-service'
import config from '../config'
const StrategyApiService = {
  getStrategies() {
    return fetch(`${config.API_ENDPOINT}/strategies`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getStrategy(strategyId) {
    return fetch(`${config.API_ENDPOINT}/strategies/${strategyId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getStrategyComments(strategyId) {
    return fetch(`${config.API_ENDPOINT}/strategies/${strategyId}/comments`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postComment(strategyId, text) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',

        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        strategy_id: strategyId,
        text,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}
export default StrategyApiService