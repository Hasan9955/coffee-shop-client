import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {


    const loadData = useLoaderData()
    const [users, setUsers] = useState(loadData)



    const handleDelete = (id) => {
        fetch(`https://coffee-store-server-d2wbs3ji3-hasan-bin-alis-projects.vercel.app/users/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount){
                const newUser = users.filter(user => user._id !== id)
                setUsers(newUser)
            }
        })
    }
    return (
        <div>
            <h2 className="text-4xl">User Length: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Create At</th>
                            <th>Last Logged At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user => <tr key={user._id} className="hover">
                            <th>😎</th>
                            <td>{user.email}</td>
                            <td>{user.createAt}</td>
                            <td>{user.lastLoggedAt}</td>
                            <td><button onClick={() => handleDelete(user._id)} className="btn">Delete</button></td>
                        </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;