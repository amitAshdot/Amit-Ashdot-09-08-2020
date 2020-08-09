import React from 'react'
import SearchInput from '../components/ui/SearchInput';
import HomepageBox from '../components/layout/homePage/HomepageBox';

const HomePage = () => {
    return (
        <main className="main">
            <SearchInput />
            <HomepageBox />
        </main>
    )
}

export default HomePage
