const csvFilePath = './AAPL.csv';
const csv = require('csvtojson')

csv().fromFile(csvFilePath).then((stockData) => {
  const formattedStockData = [];
  stockData.forEach((item) => {
    const chartDataPoint = { category: item.Date, value: Number(Number(item.Open).toFixed(2)) };
    formattedStockData.push(chartDataPoint);
  });
  console.log(formattedStockData);
});

