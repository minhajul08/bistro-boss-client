import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutFrom from "./CheckOutFrom";
// ToDo:
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Api_Gateway)
const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Pay after eat"></SectionTitle>
        <div>
            <Elements stripe={stripePromise}>
                <CheckOutFrom></CheckOutFrom>
            </Elements>
        </div>
        </div>
    );
};

export default Payment;