import React, { useEffect, useState } from 'react';
import axiosInstance from '../../helpers/axiosinstanceToken';
import './myorder.css';
import Layout from '../layout/Layout';
import CheckSession from '../../helpers/CheckSession';

const MyOrder = () => {
  const { name, shoe_id, access_token } = CheckSession();
  const [loading, setLoading] = useState(false);
  const [failure, setFailure] = useState(null);
  const [orders, setorders] = useState([]);
  //filter data
  const [filterdata, setFilterData] = useState([])

  // search query 
  const [query, setQuery] = useState("")

  // function to handle live search 

  const handleSearch = (value)=>{
    // the value is the text you type 
    setQuery(value)
    //check if lab tests are not empty
    const filterresult = orders && orders.filter((item)=>item.key?.surname?.toLowerCase().includes(value.toLowerCase()))
    //update setFilterData with filtered items
    setFilterData(filterresult)
  }


  useEffect(() => {
    setLoading(true);
    axiosInstance.post("/view_order", { shoe_id }) // Update this endpoint according to your API
      .then((response) => {
        console.log(response.data);
        setorders(response.data); // Assuming response.data is an array of bookings
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setFailure(error.message);
      });
  }, [shoe_id]); // Added lab_id as a dependency

  return (
    <div>
      <Layout />
      <section className="my-booking-section">
        <h1>My Orders</h1>
        {loading && <div className="loading">Loading...</div>}
        {failure && <div className="error">{failure}</div>}
        {orders.length === 0 && !loading && <div className="no-bookings">No order found.</div>}
        {/* search input  */}
          
        <input type="text"  
        placeholder='serch orders'
         className='form-control mb-3'
         
          value={query}
         onChange={(e)=>handleSearch(e.target.value)} />
        {orders.length > 0 && (
          <table className="bookings-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Surname</th>
                <th>Invoice</th>
              </tr>
            </thead>
            <tbody>
              {filterdata.map((order, index) => (
                <tr key={index}>
                  <td>{order.date || 'N/A'}</td>
                  <td>{order.time || 'N/A'}</td>
                  <td>{order?.key?.surname || 'N/A'}</td>
                  <td>{order.invoice_no || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};

export default MyOrder;
