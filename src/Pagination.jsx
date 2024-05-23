import React from 'react';
import { useGlobalContext } from './Context';
const Pagination=()=>{
    const {getPrevPage,getNextPage,page,nbPages}=useGlobalContext();
    return (
        <>
            <div className='pagination_div'>
                <button onClick={()=>getPrevPage()}>Prev</button>
                <p>{page+1} of {nbPages}</p>
                <button onClick={()=>getNextPage()}>Next</button>
            </div>
        </>
    )
}
export default Pagination;