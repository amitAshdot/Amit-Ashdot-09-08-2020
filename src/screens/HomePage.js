import React, { useEffect } from 'react'
import SearchInput from '../components/ui/SearchInput';
import HomepageBox from '../components/layout/homePage/HomepageBox';
import { useSelector, useDispatch } from 'react-redux';
import { setInput, getAutoComplete, setError, clearAutoComplete } from '../store/weather/actions'
import Loader from '../components/ui/Loader';
import { isInputEnglish } from '../util/helpers';
import AutoComplete from '../components/ui/AutoComplete';

const HomePage = () => {
    const weatherState = useSelector(state => state.weatherReducer);
    const dispatch = useDispatch();
    const { userSearchInput, currentCityKey, loading, error } = weatherState
    useEffect(() => {
        if (userSearchInput !== ' ' && userSearchInput.length) {
            const timer = setTimeout(() => {
                dispatch(getAutoComplete(weatherState.userSearchInput))
            }, 450);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [userSearchInput]);

    const handleChange = (event) => {
        event.preventDefault();
        dispatch(setInput(event.target.value))
    }

    const handleKeyPress = (event) => {
        var charCode = event.charCode;
        if (!isInputEnglish(charCode)) {
            event.preventDefault()
            dispatch(setError("Please use english letters"))
        }
        else dispatch(setError(""))
    }

    const clearAuto = () => { dispatch(clearAutoComplete()) }
    const homeBox = currentCityKey ? <HomepageBox /> : loading ? <Loader /> : <h1>please search a city</h1>
    const hasAutoComplete = weatherState.userSearchInput ? <AutoComplete /> : null
    const hasError = error ? error : null

    return (
        <main className="main" onClick={clearAuto}>

            <SearchInput
                handleChange={handleChange}
                onKeyPress={handleKeyPress}
                class="homepage"
                label="Search"
                placeholder={"ex. Tel Aviv"}
                value={userSearchInput}
                hasAutoComplete={hasAutoComplete}
                hasError={hasError}
            />
            {homeBox}
        </main>
    )
}

export default HomePage
