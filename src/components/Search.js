import React from 'react';

const Search = ({searchChange}) =>{
    return (
        <div>
            <input 
            className='pa3 ba b--green bg-lightest-blue'
            type='Search' 
            placeHolder='Search Robot'
            onChange={searchChange}
            ></input>
        </div>
    );
}

export default Search;