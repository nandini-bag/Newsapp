import React,{ useEffect,useContext,useReducer } from 'react';
import reducer from './Reducer';
const AppContext = React.createContext();

const AppProvider = ({children})=>{
    let initialState = {
        isLoading: true,
        query: 'css',
        nbPages: 0,
        page: 0,
        hits: [],
    }
    const [state, dispatch] = useReducer(reducer,initialState);

    const API = 'https://hn.algolia.com/api/v1/search?';
    const fetchApiData = async (url)=>{
        dispatch({
            type: 'SET_LOADING',
        })
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            dispatch({
                type: 'GET_STORIES',
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages,
                },
            })
        } catch (error) {
            console.log(error);
        }
    };
    // Call remove post
    const RemovePost=(id)=>{
        dispatch({
            type: 'REMOVE_STORIES',
            payload:id,
        })
    }
    // Call search post
    const searchPost=(searchPara)=>{
        dispatch({
            type: 'SEARCH_STORIES',
            payload: searchPara,
            
        })
    }
    // Call next Page   
    const getNextPage=()=>{
        dispatch({
            type: 'GOTO_NEXTPAGE',
        })
    }
    // Call prev Page   
    const getPrevPage=()=>{
        dispatch({
            type: 'GOTO_PREVPAGE',
        })
    }
    // Call API func
    useEffect(()=>{
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    },[state.query,state.page])
    return (
        <AppContext.Provider value= {{...state,RemovePost,searchPost,getPrevPage,getNextPage}}>
        {children}
        </AppContext.Provider>
    )
}
const useGlobalContext = ()=>{
    return (useContext(AppContext))
}
export {AppContext,AppProvider,useGlobalContext};