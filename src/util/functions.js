export const getWeatherIconNumber = (cityKey) => {

};

const findDayIndex = (today, i) => {
    const noOfDays = 7
    return today - i >= 0 ? today - i : noOfDays - i
}

export const checkDay = (daysBeforeToday) => {
    let todayDate = new Date().getDay()
    let forecastDay = findDayIndex(todayDate, daysBeforeToday)
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][forecastDay]
};

export const checkIfDay = () => {
    let todayDate = new Date().getHours()

    return todayDate <= 18 && todayDate >= 6
};

export const calcFahrenheit = (celsius) => {

    return (celsius * (9 / 5) + 32).toFixed(1)
};
export const getIconUrl = icon => {
    return icon >= 10 ? `https://developer.accuweather.com/sites/default/files/${icon}-s.png`
        : `https://developer.accuweather.com/sites/default/files/0${icon}-s.png`
}


// export const getModeStyleClass = (darkMode) => {
//     darkMode ? "--dark" : ""
//     return (celsius * (9 / 5) + 32).toFixed(1)
// };
