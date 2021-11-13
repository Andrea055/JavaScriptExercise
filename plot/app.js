const { plot } = require("plot");
require("@plotex/render-image");
const chartConfig = { chartType: "line" };
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
let dataplot=[];


async function get(){
    const response = await fetch('https://api.coingecko.com/api/v3/coins/raptoreum/market_chart?vs_currency=usd&days=7d');
    const data = await response.json();
    for(let i=0;i<169;i++){
        dataplot[i]=data.prices[i][1];
    }
    plot(dataplot, chartConfig).renderImage("my-chart.png");
}

get();
