const reducer = (state, action) =>{
    switch (action.type){
        case 'SET_LOADING': {
            return {
                ...state,
                isLoading: true,
            }
        }
        case 'GET_STORIES': {
            return {
                ...state,
                isLoading: false,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages,
            }
        }
        case 'REMOVE_STORIES': {
            return {
                ...state,
                isLoading: false,
                hits: state.hits.filter((celm)=>celm.objectID !== action.payload ),
            }
        }
        case 'SEARCH_STORIES': {
            return {
                ...state,
                query: action.payload,
            }
        }
        case 'GOTO_PREVPAGE': {
            let pageNum = state.page - 1;
            if(pageNum <= 0){
                pageNum = 0;
            }
            return {
                ...state,
                page: pageNum,
            }
        }
        case 'GOTO_NEXTPAGE': {
            let nextPageNum = state.page + 1;
            if (nextPageNum > state.nbPages){
                nextPageNum = 0;
            }
            return {
                ...state,
                page: nextPageNum,
            }
        }
    }
    return state;
}
export default reducer;


























// const reducer = (state,action)=>{
//     switch (action.type ){
//         case 'SET_LOADING':
//             return{
//                 ...state,
//                 isLoading: true,
//             }
//         case 'GET_STORIES':
//             return {
//                 ...state,
//                 isLoading: false,
//                 hits:action.payload.hits,
//                 nbPAges:action.payload.nbPages,
//             }
//         case 'REMOVE_POST':
//             return {
//                 ...state,
//                 hits: state.hits.filter((celm)=> celm.objectID !== action.payload),
                
//             }
//         case 'SEARCH_POST':
//             return {
//                 ...state,
//                 query: action.payload,
                
//             }
//     }
//     return state;
// }
// export default reducer;                                                                                                                                                                                                                             