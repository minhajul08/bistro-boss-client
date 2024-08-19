import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems";



const MenuCategory = ({items,title,img}) => {

    return (
        <div className="pt-8">
             { title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 mt-16">
                {
                items.map(item => <MenuItems
                    key={item._id}
                    item={item}
                ></MenuItems>)
                }
            </div>
            <div className="flex items-center justify-center">
             <Link to={`/order/${title}`}>
             <button className=" btn btn-outline mt-4 uppercase justify-center border-0 border-b-4">Order your favorite food</button></Link>
             </div>
             </div>
    );
};

export default MenuCategory;