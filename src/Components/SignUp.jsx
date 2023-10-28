import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const SignUp = () => {

    const {createUser} = useContext(AuthContext)


    const handleSignUp = e => {
        e.preventDefault() 
        const form = e.target 
        const email = form.email.value  
        const password = form.password.value  

        createUser(email, password)
        .then(result => {
            console.log(result)
            


            // trying to create this user in mongo db data base
            const createAt = result.user?.metadata?.creationTime
            const user = {email, password, createAt}



            // add user by axios 
            axios.post('https://coffee-store-server-wine-eight.vercel.app/users', user)
            .then(data => {
                console.log(data.data)
                if (data.data.acknowledged){
                    Swal.fire({
                        title: 'Success!',
                        text: 'User added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                    }
            })
            .catch(error => console.error(error))





            // add user by fetch
            // fetch('https://coffee-store-server-wine-eight.vercel.app/users', {
            //     method: "POST",
            //     headers: {
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify(user)

            // })
            // .then(res => res.json())
            // .then(data => {
            //     console.log(data)
            //     if (data.acknowledged){
            //         Swal.fire({
            //             title: 'Success!',
            //             text: 'User added successfully',
            //             icon: 'success',
            //             confirmButtonText: 'Cool'
            //           })
            //     }
            // })
        })
        .catch(error => console.error(error))
        
        
    }
    return (
        <div className="hero  bg-base-200 rounded-lg">
            <div className="hero-content flex flex-col px-20">
                <div className="text-center lg:text-left mb-10">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;