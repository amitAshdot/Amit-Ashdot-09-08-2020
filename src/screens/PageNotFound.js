import React from 'react'
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="page-404">
            <h1 className="page-404__header">404: page not found</h1>
            <Link to='/' className="page-404__link">Go To Home</Link>
        </div>
    )
}

export default PageNotFound
