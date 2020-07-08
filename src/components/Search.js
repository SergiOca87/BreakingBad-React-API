import React, { useState, useEffect } from 'react';

const Search = ({ getSearchQuery }) => {

    const [text, setText] = useState('');

    const getTheSearchQuery = (q) => {
        setText(q);
        getSearchQuery(q)
    }
   
    return (
        <section className="search"> 
            <form>
                <input 
                    type="text" 
                    placeholder="Search Character..." 
                    value={text}
                    onChange={(e) => getTheSearchQuery(e.target.value)}
                />
            </form>
        </section>
    )
}

export default Search
