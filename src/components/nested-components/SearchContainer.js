import React, { useState } from 'react';

const SearchContainer = () => {
    const [input, setInput] = useState('');

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
                <div className="search-button">
                    <svg className="fa-solid fa-magnifying-glass"></svg>
                </div>
            </div>

            <div className="overlay"></div>
        </section>
    )
}

export default SearchContainer;