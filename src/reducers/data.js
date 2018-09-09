function data(state, action) {
    switch (action.type) {
        case 'SEARCH_VIDEO': {
            let results = [];

            if (action.payload.query) {
                results = state.data.categories.map( (category) => {
                    return category.playlist.filter( (item) => {
                        return item.author.includes(action.payload.query)
                    })
                })
            }

            return {
                ...state,
                search: results,
            }
        }
        default:
            return state
    }
}

export default data;