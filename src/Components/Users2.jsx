import { useQuery } from "@tanstack/react-query";
// import { useState, useEffect } from "react"
const Users2 = () => {


    const { isPending, isError, error,  data: users } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://coffee-store-server-wine-eight.vercel.app/users')
            return res.json()

        }
    })

    if (isPending) {
        return <span className="loading loading-spinner text-primary"></span>
    }


    if(isError){
        return <span>Error: {error.massage}</span>
    }






    // const [users, setUsers] = useState()


    // useEffect(() => {
    //     fetch('https://coffee-store-server-wine-eight.vercel.app/users')
    //         .then(res => res.json())
    //         .then(data => setUsers(data))
    // }, [])


    const handleDelete = (id) => {
        fetch(`https://coffee-store-server-wine-eight.vercel.app/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

            })
    }


    return (
        <div>
            <div>
                {/* <h2 className="text-4xl">User Length: {users.length}</h2> */}
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
        </div>
    );
};

export default Users2;