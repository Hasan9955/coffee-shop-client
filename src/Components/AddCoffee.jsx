import Swal from 'sweetalert2'

const AddCoffee = () => {



    const handleForm = e => {
        e.preventDefault()
        const form = e.target
        const name = form.Name.value
        const chef = form.Chef.value
        const supplier = form.Supplier.value
        const taste = form.Taste.value
        const category = form.Category.value
        const details = form.Details.value
        // https://ibb.co/ZLyCT7N 
        const photo = form.Photo.value
        const objectValue = { name, chef, supplier, taste, category, details, photo }

        console.log(objectValue)



        // send data to the server as post operation 
        fetch('https://coffee-store-server-wine-eight.vercel.app/coffee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objectValue)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'User added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })

    }



    return (
        <div>
            <div className="flex justify-center">
            
            <form onSubmit={handleForm} className="bg-[#F4F3F0] md:p-10 lg:w-3/4 p-5">
                <h2 className="text-3xl font-bold">Add New Coffee</h2>
                <p className="my-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="Name" placeholder="Enter coffee name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <input type="text" name="Chef" placeholder="Enter coffee chef" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" name="Supplier" placeholder="Enter coffee supplier" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" name="Taste" placeholder="Enter coffee taste" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name="Category" placeholder="Enter coffee category" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" name="Details" placeholder="Enter coffee details" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="text" name="Photo" placeholder="Enter photo URL" className="input input-bordered" required />
                </div>
                <input className="btn bg-[#D2B48C] w-full mt-4 border-[#331A15]" type="submit" value="Add Coffee" />
            </form>
        </div>
        </div>
    );
};

export default AddCoffee;