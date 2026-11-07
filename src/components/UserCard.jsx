import { Link } from "react-router-dom"


function UserCard( {user} ) {
  return (
    <div className="bg-white border rounded-lg shadow p-4 mb-3">
      <h2 className="text-lg font-bold">
        <Link to={`/users/${user.id}`} className="text-blue-600 hover:underline">
        {user.name}
        </Link>
      </h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  )
}

export default UserCard
