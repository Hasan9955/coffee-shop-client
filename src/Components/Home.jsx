import { FaRegEye, FaPen } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Home = ({coffee, coffees, setCoffees}) => {
    
    const {_id, name, chef, photo} = coffee;
    


        const handleDelete = id => {
            

            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                  console.log(id)
                  fetch(`https://coffee-store-server-wine-eight.vercel.app/coffee/${_id}`, {
                    method: 'DELETE'

                  })
                  .then(res => res.json())
                  .then(data => {
                    console.log(data)
                    if(data.deletedCount){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                          const newCoffee = coffees.filter(cof => cof._id !== id)
                          setCoffees(newCoffee)
                          
                    }
                  })
                }
              })

              
        }



        
    return (
        <div className="p-5 bg-base-200 rounded-lg shadow-xl flex justify-center items-center gap-5">
            <img className="w-36 h-36" src={photo} alt="" />
            <div className="text-left grow">
                <h2>Name: {name}</h2>
                <p>Chef: {chef}</p>
                <p>Price: 890 $</p>
            </div>
            <div className="flex flex-col gap-2">
                <Link to={`/details/${_id}`}><button className=" bg-[#D2B48C]"><FaRegEye></FaRegEye></button></Link>
                <Link to={`/updateCoffee/${_id}`}><button  className=" bg-[#3C393B] text-white"><FaPen></FaPen></button></Link>
                <button onClick={() => handleDelete(_id)} className=" bg-[#EA4744] text-white"><MdDelete></MdDelete></button>
            </div>
        </div>
    );
};


Home.propTypes = {
    coffee: PropTypes.object,
    coffees: PropTypes.array,
    setCoffees: PropTypes.array
}
export default Home;