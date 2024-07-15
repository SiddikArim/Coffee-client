import Swal from "sweetalert2";
const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoUrl = form.photoUrl.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photoUrl,
    };

    fetch("http://localhost:5000/addingCoffee", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Coffee Added Successfully!",
            icon: "success",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer:
              '<a href="http://localhost:5173/addCoffee">Why do I have this issue?</a>',
          });
        }
      });
  };
  return (
    <div className="bg-slate-300 p-24">
      <h1>are vi update kor</h1>
      <form onSubmit={handleAddCoffee}>
        <div className="md:flex">
          <label className="form-control md:w-1/2 ">
            <div className="label">
              <span className="label-text">Coffee Name</span>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Coffee Name"
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control md:w-1/2 ml-4 ">
            <div className="label">
              <span className="label-text"> Available Quantity</span>
            </div>
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              className="input input-bordered w-full "
            />
          </label>
        </div>
        <div className="md:flex">
          <label className="form-control md:w-1/2 ">
            <div className="label">
              <span className="label-text">Supplier</span>
            </div>
            <input
              type="text"
              name="supplier"
              placeholder="Supplier Name"
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control md:w-1/2 ml-4 ">
            <div className="label">
              <span className="label-text">Taste</span>
            </div>
            <input
              type="Text"
              name="taste"
              placeholder="Taste"
              className="input input-bordered w-full "
            />
          </label>
        </div>
        <div className="md:flex">
          <label className="form-control md:w-1/2 ">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <input
              type="text"
              name="category"
              placeholder="Category"
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control md:w-1/2 ml-4 ">
            <div className="label">
              <span className="label-text">Detailes</span>
            </div>
            <input
              type="text"
              name="details"
              placeholder="Details"
              className="input input-bordered w-full "
            />
          </label>
        </div>
        <label className="form-control ">
          <div className="label">
            <span className="label-text">Photo URL</span>
          </div>
          <input
            type="text"
            name="photoUrl"
            placeholder="Photo URL"
            className="input input-bordered w-full "
          />
        </label>
        <div className="flex items-center justify-center">
          <button className="btn btn-active btn-neutral mt-10 ">Neutral</button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
