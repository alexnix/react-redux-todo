import React from 'react'
import Footer from './Footer'
import AddTodo from '../smart/AddTodo'
import VisibleTodoList from '../smart/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App