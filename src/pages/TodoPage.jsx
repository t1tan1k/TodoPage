import { useEffect, useState } from "react"

function TodoPage() {
    const [text,setText]=useState('')

    const [todos, setTodos]= useState(()=>{
        const saved = localStorage.getItem('todos')
        return saved ? JSON.parse(saved) : []
    })

    useEffect(()=> {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    function handleSubmit(e) {
        e.preventDefault()
        if (!text.trim()) return
        setTodos([...todos, { id: Date.now(), text, done: false }])
        setText('')
    }

    function toggleTodo(id) {
        setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))
    }

    function deleteTodo(id) {
        setTodos(todos.filter((t) => t.id !==id))
    }

    const doneCount = todos.filter((t)=> t.done).length

  return (

    <div className='max-w-2xl mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-4'>Тапшырмалар</h1>

      <form onSubmit={handleSubmit} className='flex gap-2 mb-4'>
        <input 
        type="text"
        placeholder='Жаны тапшырма'
        value={text}
        onChange={(e)=> setText(e.target.value)}
        className='border rounded px-3 py-2 flex-1'
        />
        <button type='submit' className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>Кошуу</button>
      </form>

      <p className="text-gray-600 mb-2">
        Бардыгы: {todos.length}, аткарылды: {doneCount}
      </p>

      {todos.length === 0 && <p className="text-gray-500">Тапшырма жок</p>}

      {todos.map((todo)=>(
        <div key={todo.id} className='flex items-center gap-2 border rounded p-3 mb-2'>
            <span className={`flex-1 ${todo.done ? 'line-through text-gray-400' : ''}`}>{todo.text}</span>
            <button onClick={() => toggleTodo(todo.id)} className='px-2 text-green-600'>✓</button>
            <button onClick={() => deleteTodo(todo.id)} className='px-2 text-red-600'>✕</button>
        </div>
      ))}
    </div>
  )
}

export default TodoPage
