import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredBg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20 " >
            <SectionTitle
            subHeading={"Check it out"}
            heading={"Featured items"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-52">
                <div>
                    <img src={featuredBg} alt="" />
                </div>
                <div className="md: ml-10 ">
                    <p>March 20, 2023</p>
                    <p>Check it out!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae corrupti atque minima amet hic facere iure quos distinctio, sequi quibusdam dolorum voluptatem temporibus deleniti nesciunt vel debitis accusantium quidem repudiandae!</p>
                    <button className="btn btn-outline mt-4 uppercase text-white border-0 border-b-4">Read more</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;