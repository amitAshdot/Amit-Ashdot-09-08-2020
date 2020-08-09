export const getWeatherIconNumber = (cityKey) => {

};

const findDayIndex = (today, i) => {
    return today - i > 0 ? today - i : noOfDays - i
}

export const checkDay = (daysBeforeToday) => {
    let todayDate = new Date().getDay()
    let forecastDay = findDayIndex(todayDate, daysBeforeToday)
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][forecastDay]
};

export const checkIfDay = () => {
    let todayDate = new Date().getHours()
    return todayDate <= 19
};
