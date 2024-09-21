import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../hooks/UseAuth";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";


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
            <h2>Total Payments {payments.length}</h2>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
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