import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuBg from "../../../assets/menu/menu-bg.jpg";
import desertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import UseMenu from "../../../hooks/UseMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = UseMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu
                </title>
            </Helmet>
            {/* menu cover */}
            <Cover img={menuBg} title={"Our Menu"}></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* offer menu */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu */}
            <MenuCategory items={desserts} title="dessert" img={desertBg}></MenuCategory>
            {/* Pizza menu */}
            <MenuCategory items={pizza} title={"pizza"} img={pizzaBg}></MenuCategory>
            {/* Salad menu */}
            <MenuCategory items={salad} title={"salad"} img={saladBg}></MenuCategory>
            {/* soups menu */}
            <MenuCategory items={soup} title={"soup"} img={soupBg}></MenuCategory>

        </div>
    );
};

export default Menu;