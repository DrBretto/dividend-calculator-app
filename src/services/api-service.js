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
