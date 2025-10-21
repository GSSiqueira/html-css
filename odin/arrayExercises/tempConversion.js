
function convertToCelsius(temp){
    console.log(((temp-32)*(5/9)).toFixed(1));
}

function convertToFahrenheit(temp){
    console.log(((temp*(9/5))+32).toFixed(1));
}


convertToCelsius(32) // fahrenheit to celsius, should return 0

convertToFahrenheit(0) // celsius to fahrenheit, should return 32

export default {
    convertToCelsius,
    convertToFahrenheit
}

