import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchUsers } from '../api/users'
import UserCard from '../components/UserCard'

function UserPage() {
    const [search,setSearch]=useState('')

    const { data: users = [], isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
    })

    const filtered = users.filter((user)=>
    user.name.toLowerCase().includes(search.toLowerCase())
    )

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

  return (
    <div className='max-w-2xl mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-4'>Users</h1>

      <input 
      type="text" 
      placeholder='name search'
      value={search}
      onChange={(e)=> setSearch(e.target.value)}
      className='border rounder px-3 py-2 mb-4 w-full'
      />

      {filtered.length === 0 && <p>Эч нерсе табылган жок</p>}

      {filtered.map((user)=>(
        <UserCard key={user.id} user={user}/>
      ))}
    </div>
  )
}

export default UserPage
