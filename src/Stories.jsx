import React from 'react';
import { useGlobalContext } from './Context';

const Stories=()=>{
    const {hits, isLoading,RemovePost} = useGlobalContext();
    if(isLoading){
        return ( <h1>Loading...</h1> )
    }
    return (
        <div className='stories_div'>
            
            {hits.map((celm)=>{
                const {title,author,url,num_comments,objectID} = celm;
                return (
                        <div className='card' key={objectID}>
                            <h2>{title}</h2>
                            <p>By <span>{author}</span> | <span>{num_comments}</span> comments</p>
                            <div className='card-button'>
                            <a href={url} target='_blank'>Read more </a>
                            <a href='#' onClick={()=>RemovePost(objectID)}>Remove</a>
                            </div>
                        </div>
                )           
            })}
            
        </div>
    )
}
export default Stories;