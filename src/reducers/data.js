const data = ( state, action ) => {
  switch (action.type) {
    case 'SEARCH_VIDEO': {
      let results = [];
      //valida si el dato a buscar está vacio
      if (action.payload.query) {
        const categories = state.data.categories
        categories.map(category => {
          let tempResults = category.playlist.filter(item => {
            return item.author.toLowerCase().includes(action.payload.query.toLowerCase())
          })
          results = results.concat(tempResults)
        })
      }
      return {
        ...state,
        search: results
      }
    }
    default:
      return state
  }
}

export default data