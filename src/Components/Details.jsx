import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
    const detailsData = useLoaderData() 
    console.log(detailsData)
    const {category, chef, details, name, photo, supplier, taste} = detailsData;

    return (
        <div>
            <Link to='/'><button className="btn btn-primary mb-10">Go Home</button></Link>
            <div className="bg-[#F4F3F0] p-16 flex gap-16 items-center">
            <img src={photo} alt="" />
            <div className="text-left text-sm">
                <h2 className="text-2xl mb-5 font-bold">Niceties</h2>
                <p>Name: {name}</p>
                <p>Chef: {chef}</p>
                <p>Supplier: {supplier}</p>
                <p>Test: {taste}</p>
                <p>Category: {category}</p>
                <p>Details: {details}</p>
            </div>
        </div>
        </div>
    );
};

export default Details;