const BASE_URL = "https://jsonplaceholder.typicode.com"

export async function fetchUsers(){
    const res = await fetch(`${BASE_URL}/users`)
    if (!res.ok) throw new Error(`Error: ${res.status}`)
        return res.json()
}

export async function fetchUser(id) {
    const res = await fetch(`${BASE_URL}/users/${id}`)
    if(!res.ok) throw new Error(`Error: ${res.status}`)
        return res.json()
}