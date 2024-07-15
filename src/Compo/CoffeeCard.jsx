import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setCoffee, coffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photoUrl } =
    coffee;
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((coffee) => coffee._id !== _id);
              setCoffee(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <h1>card</h1>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-60 h-60 rounded-lg" src={photoUrl} alt="Movie" />
        </figure>
        <div className="flex justify-between w-full">
          <div className="ml-5 mt-4">
            <h2 className="card-title">Name : {name}</h2>
            <p>Quantity : {quantity}</p>
            <p>Supplier : {supplier}</p>
            <p>Taste : {taste}</p>
          </div>

          <div className="  flex flex-col mr-10">
            <button className="btn btn-ghost">View</button>
            <Link to={`updateCoffee/${_id}`}>
              <button className="btn btn-ghost">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-ghost hover:bg-red-400"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
