const data = {
  allocation(stocks) {
    let data = [];
    for (let i = 0; i < stocks.length; i++) {
      data[i] = {
        name: stocks[i].ticker,
        value: stocks[i].price * stocks[i].shares,
        color: stocks[i].color,
      };
    }
    return data;
  },

  divProfits(stocks) {
    let data = [];
    for (let i = 0; i < stocks.length; i++) {
      data[i] = {
        name: stocks[i].ticker,
        value: (stocks[i].yield / 100) * stocks[i].price * stocks[i].shares,
        color: stocks[i].color,
      };
    }
    return data;
  },

  industryData(stocks) {
    let industry = [],
      count = [],
      prev;
    let str = [];
    let industries = [];

    //extract industries to array of strings
    for (let i = 0; i < stocks.length; i++) {
      str[i] = stocks[i].industry;
    }

    //count each industry
    str.sort();
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== prev) {
        industry.push(str[i]);
        count.push(stocks[i].price * stocks[i].shares);
      } else {
        count[count.length - 1] += stocks[i].price * stocks[i].shares;
      }
      prev = str[i];
    }

    //repack object
    for (let i = 0; i < count.length; i++) {
      industries[i] = {
        name: industry[i],
        value: count[i],
      };
    }
    return industries;
  },
};

export default data;
