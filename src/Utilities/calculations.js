const calc = {
  totalValue(stocks) {
    let total = 0;
    for (let i = 0; i < stocks.length; i++) {
      total += stocks[i].shares * stocks[i].price;
    }
    return total;
  },

  rule72(stock){
    
    
    return 72/(stock.yield)
  },

  expected1yr(stocks) {
    let total = 0;

    for (let i = 0; i < stocks.length; i++) {
      total += stocks[i].shares * stocks[i].price * stocks[i].eps1;
    }
    return total;
  },

  dividendPayout(stocks) {
    let total = 0;

    for (let i = 0; i < stocks.length; i++) {
      total += (stocks[i].price / stocks[i].yield) * stocks[i].shares;
    }

    return total;
  },
};
export default calc;
