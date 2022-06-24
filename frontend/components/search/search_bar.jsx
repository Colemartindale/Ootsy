import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props) 
        this.handleSearch = this.handleSearch.bind(this);
    };

    handleSearch(e) {
        if (e.keyCode === 13) {
            this.props.history.push(`/listings/search/${e.target.value}`)
        };
    };

    
    
    render() {
        
        return (
            <div className="search-container">
                <input 
                    type="text" 
                    className="search" 
                    placeholder='Search for "gift"'
                    onKeyDown={this.handleSearch}
                />
                <div className="search-logo-container">
                    <img src={window.searchLogo} className='search-logo'/>
                </div>
            </div>
        )
    };
};

export default SearchBar;