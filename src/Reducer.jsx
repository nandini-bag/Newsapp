const reducer = (state, action) =>{
    switch (action.type){
        case 'SET_LOADING': 
            return {
                ...state,
                isLoading: true,
            }
        case 'GET_STORIES': 
            return {
                ...state,
                isLoading: false,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages,
            }
        case 'REMOVE_STORIES': 
            return {
                ...state,
                hits: state.hits.filter((celm)=> celm.objectID !== action.payload ),
            }
        case 'SEARCH_STORIES': 
            return {
                ...state,
                query: action.payload,
            }
        case 'GOTO_NEXTPAGE': 
            let nextPageNum = state.page + 1;
            if (nextPageNum > state.nbPages){
                nextPageNum = 0;
            }
            return {
                ...state,
                page: nextPageNum,
            }
        case 'GOTO_PREVPAGE': 
            let pageNum = state.page - 1;
            if(pageNum <= 0){
                pageNum = 50;
            }
            return {
                ...state,
                page: pageNum,
            }        
    }
    return state;
}
export default reducer;                                                                                                                                                                                                                          