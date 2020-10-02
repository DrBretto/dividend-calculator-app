import TokenService from "./token-service";
import config from "../config";

const ApiService = {
  getStrategies() {
    return fetch(`${config.API_ENDPOINT}/strategy/`, {
      headers: {
        "authorization": `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getStocks() {
    return fetch(`${config.API_ENDPOINT}/stock/`, {
      headers: {
        "authorization": `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  addStock(stock, strategyId) {
    return fetch(`${config.API_ENDPOINT}/strategy`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "authorization": `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        strategy_id: strategyId,
        stock,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  deleteStock(stockId) {
    return fetch(`${config.API_ENDPOINT}/stock/${stockId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "authorization": `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res
    );
  },

  getStrategy(strategyId) {
    return fetch(`${config.API_ENDPOINT}/strategy/${strategyId}`, {
      headers: {
        "authorization": `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postStrategy(strategyId, text) {
    return fetch(`${config.API_ENDPOINT}/strategy`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "authorization": `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        strategy_id: strategyId,
        text,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};
export default ApiService;
