import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../hooks/UseAuth";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const PaymentHistory = () => {
    const {user} = UseAuth ();
    const axiosSecure = UseAxiosSecure ();
    const {data:payments =[]} = useQuery ({
        queryKey: ['payments',user.email],
        queryFn: async () =>  {
          const res = await axiosSecure.get(`/payments/${user.email}`)
          return res.data
        }
    })
    return (
        <div>
         <SectionTitle heading="Payment History" subHeading="At a Glance!"></SectionTitle>
          
            <div className="overflow-x-auto shadow-lg px-10">
            <h2 className="mt-5 mb-4 text-black text-2xl font-semibold">Total Payments: {payments.length}</h2>
  <table className="table table-zebra mb-3">
    {/* head */}
    <thead className="bg-[#D1A054] text-white">
      <tr>
        <th>#</th>
        <th>Price</th>
        <th>Transaction Id</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
        {
            payments.map ((payment,index)=> <tr key={payment._id}>
                <th>{index + 1}</th>
                <td> {payment.price} </td>
                <td> {payment.transactionId} </td>
                <td> {payment.status} </td>
              </tr>)
        }
      {/* row 1 */}
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;