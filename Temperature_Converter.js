function celsiusToFahrenheit(celsius){
    return (celsius * 9/5) + 32;
}


// Function with multiple parameters
function convertTemperature(value, fromUnit, toUnit){
    if (fromUnit === "C" && toUnit === "F"){
        return celsiusToFahrenheit(value);
    }
    else if (fromUnit === "F" && toUnit === "C"){
        return (value - 32) * 5/9;
    } else {
        return "Invalid Conversion";
    }
}

function displayTemperature(temp, unit) {
    console.log(`Temperature: ${temp}°${unit}`);
}

//let temp = 30;
//console.log(`${temp}°C is ${celsiusToFahrenheit(temp)}°F`);

let result = convertTemperature(30, "C", "F");
displayTemperature(result, "F");