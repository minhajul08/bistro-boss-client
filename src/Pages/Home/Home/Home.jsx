import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import ChefServices from "../ChefServices/ChefServices";
import Contract from "../Contract/Contract";
import Featured from "../Featured/Featured";
import PopularMeanu from "../PopularMeanu/PopularMeanu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Bistro Boss | Home</title>
        
      </Helmet>
            <Banner></Banner>
            <Category></Category>
            <ChefServices></ChefServices>
            <PopularMeanu></PopularMeanu>
            <Contract></Contract>
            <ChefRecommends></ChefRecommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;