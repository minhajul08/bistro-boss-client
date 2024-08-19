const FoodCard = ({item}) => {
    const {name,price,image,recipe} = item;
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
                        <button className=" btn btn-outline uppercase bg-[#E8E8E8] border-0 border-b-4 border-[#BB8506] text-[#BB8506]">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;