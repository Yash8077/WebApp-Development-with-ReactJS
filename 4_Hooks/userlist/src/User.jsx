import { useState } from 'react'

export default function User() {
    const [users, setUsers] = useState(['Vansh Chaurasiya']);
    const [edit, setEdit] = useState(true);
    const [newUser, setNewUser] = useState('');
    return (
        <>
            <div className='w-full flex justify-center items-center text-center text-black'>
                {users.map((user, index) => (
                    <div key={index} className='p-4 m-4 bg-gray-200 rounded-lg'>
                        <input className='text-2xl font-bold' disabled={edit} value={user} />
                        <button className='bg-blue-500 text-white p-2 m-2 rounded-lg' onClick={() => setEdit(!edit)}>Edit</button>
                        <button className='bg-red-500 text-white p-2 m-2 rounded-lg' onClick={() => setUsers(users.filter((u, i) => i !== index))}>Remove</button>
                    </div>
                ))}
                {newUser && (
                    <input className='' onChange={(e) => setNewUser(e.target.value)} value={newUser} />
                )}
            </div>
            <div className='w-full flex justify-center items-center'>
            <button className='w-max bg-blue-500 hover:bg-blue-700 flex justify-center items-center' onClick={() => setNewUser('')}>Add Users</button>
            </div>
        </>
    )
}
