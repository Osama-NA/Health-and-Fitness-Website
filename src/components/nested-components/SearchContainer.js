import React, { useState, useEffect } from 'react';
import Loader from './Loader';

const SearchContainer = ({ searchForRecipes, hideLoader }) => {
    const [input, setInput] = useState('');
    const [showLoader, setShowLoader] = useState(false);

    const handleSearchButton = () => {
        if(input === '') return
        
        searchForRecipes(input);
        setInput('');
        setShowLoader(true);
    }

    // hides loader when recipes are found
    useEffect(() => {
        setShowLoader(false);
    }, [hideLoader])

    return (
        <section className="search-container">
            <h1>Find healthy recipes that contributes to your daily life!</h1>

            <div className="search">
                <input
                    type="text"
                    placeholder="Search for a recipe"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <div className="search-button" onClick={handleSearchButton}>
                    <svg className="fa-solid fa-magnifying-glass"></svg>
                </div>
            </div>

            {showLoader ? <Loader /> : null}
            <div className="overlay"></div>
        </section>
    )
}

export default SearchContainer;