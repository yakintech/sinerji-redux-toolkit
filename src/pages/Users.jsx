import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteUserAction } from '../store/reducers/userReducer'

function Users() {

    const { users } = useSelector(state => state.user)

    let dispatch = useDispatch()


    const deleteUser = (user) => {
        dispatch(deleteUserAction(user))
    }


    return (<>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td><button onClick={() => deleteUser(user)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
    )
}

export default Users