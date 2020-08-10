import React, { useEffect } from 'react'
import SearchInput from '../components/ui/SearchInput';
import HomepageBox from '../components/layout/homePage/HomepageBox';
import { useSelector, useDispatch } from 'react-redux';
import AutoComplete from '../components/ui/AutoComplete';
import { setInput, getAutoComplete } from '../store/weather/actions'

const HomePage = () => {
    const weatherState = useSelector(state => state.weatherReducer);
    const dispatch = useDispatch();
    const hasAutoComplete = weatherState.userSearchInput ? <AutoComplete /> : null
    const { userSearchInput } = weatherState
    useEffect(() => {
        if (userSearchInput !== ' ' && userSearchInput.length !== 0) {
            const timer = setTimeout(() => {
                dispatch(getAutoComplete(weatherState.userSearchInput))
            }, 300);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [userSearchInput]);
    // useEffect(() => {
    //     dispatch(getAutoComplete(weatherState.userSearchInput))
    // }, [weatherState.userSearchInput])

    const handleChange = (event) => {
        event.preventDefault();
        dispatch(setInput(event.target.value))
    }
    return (
        <main className="main">
            <SearchInput handleChange={handleChange}
                class="homepage"
                label="Search"
                placeholder={"ex. Tel Aviv"}
            />
            {hasAutoComplete}
            <HomepageBox />

        </main>
    )
}

export default HomePage
