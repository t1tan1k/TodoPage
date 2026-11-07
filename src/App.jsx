import { Routes, Route, Link } from 'react-router-dom'
import UserPage from './pages/UserPage'
import AboutPage from './pages/AboutPage'
import UserDetailPage from './pages/UserDetailPage'
import TodoPage from './pages/TodoPage'

function App() {
  return (
    <div className='max-w-2xl mx-auto p-4'>
      <nav className='max-w-2xl mx-auto p-4 flex gap-4 border-b'>
        <Link to="/" className='text-blue-600 hover:underline'>Колдонуучулар</Link>
        <Link to="/about" className='text-blue-600 hover:underline'>Биз жөнүндө</Link>
        <Link to='/todos' className='text-blue-600 hover:underline'>Тапшырмалар</Link>
      </nav>

      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path='/users/:id' element={<UserDetailPage/>}/>
        <Route path='/todos' element={<TodoPage/>}/>
      </Routes>
    </div>
  )
}

export default App

