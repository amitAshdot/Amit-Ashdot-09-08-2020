import React, { useEffect } from 'react'
import SearchInput from '../components/ui/SearchInput';
import HomepageBox from '../components/layout/homePage/HomepageBox';
import { useSelector, useDispatch } from 'react-redux';
import AutoComplete from '../components/ui/AutoComplete';
import { setInput, getAutoComplete } from '../store/weather/actions'
import Loader from '../components/ui/Loader';

const HomePage = () => {
    const weatherState = useSelector(state => state.weatherReducer);
    const dispatch = useDispatch();
    const { userSearchInput, currentCityKey, loading } = weatherState
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

    const handleChange = (event) => {
        event.preventDefault();
        dispatch(setInput(event.target.value))
    }
    const homeBox = currentCityKey ? <HomepageBox /> : loading ? <Loader /> : <h1>please serach</h1>
    return (
        <main className="main">

            <SearchInput handleChange={handleChange}
                class="homepage"
                label="Search"
                placeholder={"ex. Tel Aviv"}
                value={userSearchInput}
            />
            {homeBox}

        </main>
    )
}

export default HomePage
