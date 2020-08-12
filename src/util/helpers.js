const findDayIndex = (today, i) => {
    const noOfDays = 7
    return today + i < noOfDays ? today + i : today + i - noOfDays
}

export const checkDay = (daysBeforeToday) => {
    let todayDate = new Date().getDay()
    let forecastDay = findDayIndex(todayDate, daysBeforeToday)
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][forecastDay]
};

export const calcFahrenheit = (celsius) => {

    return (celsius * (9 / 5) + 32).toFixed(1)
};
export const getIconUrl = icon => {
    return icon >= 10 ? `https://developer.accuweather.com/sites/default/files/${icon}-s.png`
        : `https://developer.accuweather.com/sites/default/files/0${icon}-s.png`
}
export const getFixedTemperature = (isCelsius, temperature) => {
    return isCelsius ? Number(temperature).toFixed(0) : Number(calcFahrenheit(temperature)).toFixed(0)
}

export const isInputEnglish = (charCode) => {
    return charCode === 32 || (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) ?
        true : false
}
