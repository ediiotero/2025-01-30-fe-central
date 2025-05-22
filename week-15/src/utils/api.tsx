import type { User } from "../models/Users";

export async function fetchUsers(): Promise<User[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    if(!response.ok) {
        throw new Error(`Http error! status: ${response.status}`)
    }

    const users: User[] = await response.json()
    return users
}