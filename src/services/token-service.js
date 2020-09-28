import config from "../config";
import jwt_decode from "jwt-decode";

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token);
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY);
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY);
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`);
  },

  getUsernameFromToken() {
    if (this.getAuthToken()) {
      return jwt_decode(this.getAuthToken()).sub;
    } else return "guest";
  },
};

export default TokenService;
