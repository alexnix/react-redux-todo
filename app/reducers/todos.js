const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const {id, text} = action
      return [
        ...state,
        {id, text}
      ]
    }
    case 'TOGGLE_TODO':
      return state.map(t => {
        if (t.id == action.id)
          t.completed = !t.completed
        return t
      })
    default:
      return state
  }
}

export default todos