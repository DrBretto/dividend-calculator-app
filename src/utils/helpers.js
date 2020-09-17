export const findStrategy = (strategies = [], id) =>
  strategies.find((strategy) => strategy.id === id);

export const findStock = (stocks = [], stocks_id) =>
  stocks.find((stock) => stock.stocks_id === stocks_id);

export const getStocksForStrategy = (stocks = [], id) =>
  !id ? stocks : stocks.filter((stock) => stock.id === id);

export const countStocksForStrategy = (stocks = [], id) =>

  stocks.filter((stock) => stock.id === id).length;