import React from 'react';
import { useGlobalContext } from './Context';

const Search=()=>{
    const {query,searchPost} = useGlobalContext();
    return (
        <div className='search_div'>
        <form>
            <div className='search_box'>
            <input type='text' placeholder='search here...'
            value={query}
            onChange={(e)=>searchPost(e.target.value)}
            />
            </div> 
        </form>
        </div>
    )
}
export default Search;