


export const bookReducer  = ( state = { getBooks : []} , action ) => {
    switch(action.type) {
        case 'booksLoadSuccess' :  return { books : action.payload }

        case 'booksLoadFailed' : return { error : action.payload }

        default :  return state
    }
}

export const bookDetailReducers = (state= { bookInfo  : {} } , action ) =>{
    switch ( action.type) {
        case 'bookDetailLoaded' : return { bookInfo : action.payload }

        case 'bookDetailFailed'  : return { error : action.payload} 

        default : return state
    }
}