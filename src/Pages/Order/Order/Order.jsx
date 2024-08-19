import Cover from "../../Shared/Cover/Cover";
import orderBg from "../../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import UseMenu from "../../../hooks/UseMenu";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams ();
    const initialIndex = categories.indexOf (category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = UseMenu ();
    const dessert = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
          <Helmet>
                <title>Bistro Boss | Order
                </title>
            </Helmet>
            <Cover img={orderBg} title={"Our Shop"}></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
              
       <div className="text-center mt-20 mb-10">
       <TabList>
        <Tab>Salad</Tab>
        <Tab>Pizza</Tab>
        <Tab>Soups</Tab>
        <Tab>Desserts</Tab>
        <Tab>Drinks</Tab>
      </TabList>
       </div>
      <TabPanel>
      <OrderTab items={salad}>
       </OrderTab>
      </TabPanel>
      <TabPanel>
      <OrderTab items={pizza}>
      </OrderTab>
      </TabPanel>
      <TabPanel>
      <OrderTab items={soup}>
      </OrderTab>
      </TabPanel>
      <TabPanel>
      <OrderTab items={dessert}>
      </OrderTab>
      </TabPanel>
      <TabPanel>
      <OrderTab items={drinks}>
      </OrderTab>
      </TabPanel>
    </Tabs>

        </div>
    );
};

export default Order;