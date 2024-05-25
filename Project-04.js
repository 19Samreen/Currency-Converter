//Currency Converter
import inquirer from 'inquirer';
// Exchange rates (example rates, you can update these with real-time data)
const exchangeRates = {
    "USD": 1,
    "EUR": 0.91,
    "GBP": 0.80,
    "JPY": 109.49,
    "INR": 74.85,
    "AUD": 1.45,
    "CAD": 1.36,
};
async function currencyConverter() {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'fromCurrency',
            message: 'Select the currency you want to convert from:',
            choices: Object.keys(exchangeRates),
        },
        {
            type: 'list',
            name: 'toCurrency',
            message: 'Select the currency you want to convert to:',
            choices: Object.keys(exchangeRates),
        },
        {
            type: 'number',
            name: 'amount',
            message: 'Enter the amount you want to convert:',
            validate: (input) => input > 0 ? true : 'Please enter a positive amount.'
        }
    ]);
    const { fromCurrency, toCurrency, amount } = answers;
    const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);
    console.log(`${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`);
}
function convertCurrency(amount, fromCurrency, toCurrency) {
    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];
    return (amount / fromRate) * toRate;
}
currencyConverter();
