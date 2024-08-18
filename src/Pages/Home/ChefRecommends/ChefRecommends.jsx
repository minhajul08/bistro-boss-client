import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img1 from '../../../assets/menu/salad-bg.jpg'
import img2 from '../../../assets/menu/soup-bg.jpg'
import img3 from '../../../assets/menu/pizza-bg.jpg'

const ChefRecommends = () => {
    return (
        <section>
            <SectionTitle
                subHeading={"Should Try"}
                heading={"CHEF RECOMMENDS"}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="card card-compact bg-base-100  shadow-xl rounded-none">
                    
                        <img
                            src={img1}
                            alt="Shoes" />
                  
                    <div className="card-body">
                        <div className="mx-10 text-center">
                            <h2 className="text-2xl font-semibold">Caeser Salad</h2>
                            <p className="my-2 font-normal text-base">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        </div>
                        <div className="card-actions justify-center">
                            <button className=" btn btn-outline uppercase bg-[#E8E8E8] border-0 border-b-4 border-[#BB8506] text-[#BB8506]">Read more</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100  shadow-xl rounded-none">
                    
                        <img
                            src={img2}
                            alt="Shoes" />
                    
                    <div className="card-body">
                        <div className="mx-10 text-center">
                            <h2 className="text-2xl font-semibold">Soup</h2>
                            <p className="my-2 font-normal text-base">Hearty, warm, and flavorful; perfect comfort food for any season.</p>
                        </div>
                        <div className="card-actions justify-center">
                            <button className=" btn btn-outline uppercase bg-[#E8E8E8] border-0 border-b-4 border-[#BB8506] text-[#BB8506]">Read more</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100  shadow-xl rounded-none">
                    
                        <img
                            src={img3}
                            alt="Shoes" />
                    
                    <div className="card-body">
                        <div className="mx-10 text-center">
                            <h2 className="text-2xl font-semibold">Pizza</h2>
                            <p className="my-2 font-normal text-base">Cheesy, crispy, and delicious; a favorite for any occasion.</p>
                        </div>
                        <div className="card-actions justify-center">
                            <button className=" btn btn-outline uppercase bg-[#E8E8E8] border-0 border-b-4 border-[#BB8506] text-[#BB8506]">Read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefRecommends;