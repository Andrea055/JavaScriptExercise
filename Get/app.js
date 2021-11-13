const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));



async function get(){
    const response = await fetch('https://api.coingecko.com/api/v3/coins/ethereum/');
    const data = await response.json();
    console.log(data.market_data.current_price.eur);
}

get();