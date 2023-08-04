import Freecurrencyapi from "@everapi/freecurrencyapi-js";
import axios from 'axios';

export const convertUSDToIDR = async () => {
  const freecurrencyapi = new Freecurrencyapi('YOUR-API-KEY');
  let resData;
  freecurrencyapi.latest({
    base_currency: 'USD',
    currencies: 'EUR'
  }).then(response => {
    resData = response;
    console.log(response);
  });
  return resData;
}

export const convertUSDToIDRNono = async (amountInUSD) => {
  const apiKey = process.env.EXCHANGE_RATES_API;
  const baseCurrency = 'USD';
  const targetCurrency = 'IDR';

  try {
    // const response = await axios.get(`https://api.exchangeratesapi.io/latest?base=${baseCurrency}&symbols=${targetCurrency}&apiKey=${apiKey}`);
    // const exchangeRate = response.data.rates[targetCurrency];
    // return exchangeRate;
    const response = await axios.get(`http://api.exchangeratesapi.io/v1/convert?access_key=${apiKey}&from=${baseCurrency}&to=${targetCurrency}&amount=${amountInUSD}`);
    return response
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    return null;
  }
};

const convertUSDToIDRNotWork = async (amountInUSD) => {
  // const exchangeRate = await getExchangeRate();

  // if (exchangeRate !== null) {
  //   const amountInIDR = amountInUSD * exchangeRate;
  //   return Math.floor(amountInIDR)
  // } else {
  //   // Handle error if exchange rate data is not available
  //   return null;
  // }
};
