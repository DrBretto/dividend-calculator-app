const calculations = {
  totalValue(stocks) {
    let total = 0;
    for (let i = 0; i < stocks.length; i++) {
      total += stocks[i].shares * stocks[i].price;
    }
    return total;
  },

  expected1yr(stocks) {
    let total = 0;

    for (let i = 0; i < stocks.length; i++) {
      total +=
      stocks[i].shares * stocks[i].price * stocks[i].eps1;
    }
    return total;
  },
};

export default calculations;
