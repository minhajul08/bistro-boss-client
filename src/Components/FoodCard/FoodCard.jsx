import Swal from "sweetalert2";
import UseAuth from "../../hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import UseCart from "../../hooks/UseCart";

const FoodCard = ({item}) => {
    const axiosSecure = UseAxiosSecure ();
    const location = useLocation ();
    const navigate = useNavigate ();
    const [, refetch] = UseCart ();
    const {name,price,image,recipe,_id} = item;
    const {user} = UseAuth ();
    const handelFoodCart = () => {
        if (user && user.email) {
        const cartItem = {
            menuId : _id,
            email: user.email,
            name,
            image,
            price
        }
        axiosSecure.post ('/carts', cartItem)
        .then (res => {
            console.log (res.data)
            if (res.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: ` ${name} added your cart`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch ();
            }
            
        })
        }
        else {
            Swal.fire({
                title: "Please Logged in!",
                text: "You won't be able to add cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Logged in!"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate ('/login', {state: {from: location}});
                }
              });
        }
    }
    return (
        <div>
            <div className="card card-compact bg-base-100  shadow-xl rounded-none">
                    
                    <img
                        src={image}
                        alt="Shoes" />
                        <p className="absolute right-0 mr-4 mt-4 px-2 bg-slate-900 text-white">${price} </p>
              
                <div className="card-body">
                    <div className="mx-10 text-center">
                        <h2 className="text-2xl font-semibold">{name}</h2>
                        <p className="my-2 font-normal text-base">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    </div>
                    <div className="card-actions justify-center">
                        <button onClick={  handelFoodCart}
                         className=" btn btn-outline uppercase bg-[#E8E8E8] border-0 border-b-4 border-[#BB8506] text-[#BB8506]">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;