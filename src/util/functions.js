export const getWeatherIconNumber = (cityKey) => {

};


const findDayIndex = (today, i) => {
    let sub = today - i, noOfDays = 7
    if (today - i) {
        return noOfDays - i
    }
    return sub
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