import React from "react";

class SearchBar extends React.Component {
    render() {
        return (
            <div className="search-container">
                <input type="text" className="search" defaultValue={'Search for anything'} />
                <div className="search-logo-container">
                    <img src={window.searchLogo} className='search-logo'/>
                </div>
            </div>
        )
    }
};

export default SearchBar;