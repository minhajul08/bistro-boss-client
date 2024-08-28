import { FaTrashAlt } from "react-icons/fa";
import UseCart from "../../../hooks/UseCart";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";


const Cart = () => {
    const [cart, refetch] = UseCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = UseAxiosSecure();
    const handelDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch ();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });

    }

    return (
        <div className="bg-[#FFFFFF] shadow-xl">
            <div className="flex justify-evenly">
                <h2 className="text-3xl">Total Orders : {cart.length}</h2>
                <h2 className="text-3xl">Total Prices : {totalPrice}</h2>
                <button className="btn btn-primary">Pay</button>
            </div>
            <div className="overflow-x-auto mt-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}

                                </td>
                                <td> ${item.price} </td>
                                <th>
                                    <button
                                        onClick={() => handelDelete(item._id)}
                                        className="btn btn-ghost btn-lg text-red-600">
                                        <FaTrashAlt></FaTrashAlt>
                                    </button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;