import React, { useEffect, useState } from 'react';
import CheckSession from '../../helpers/CheckSession';
import axiosinstanceToken from '../../helpers/axiosinstanceToken';
import classNames from 'classnames'; // Import classnames
import './labtests.css';
import Layout from '../layout/Layout';
import { AiOutlineSearch } from "react-icons/ai";
import "../../index.css"

const LabTests = () => {
  const { lab_name, access_token } = CheckSession();
  const [loading, setLoading] = useState(false);
  const [labtests, setLabtest] = useState([]);
  const [failure, setFailure] = useState(null);
  const lab_id = localStorage.getItem ("lab_id")

  //filter data
  const [filterdata, setFilterData] = useState([])

  // search query 
  const [query, setQuery] = useState("")

  // function to handle live search 

  const handleSearch = (value)=>{
    // the value is the text you type 
    setQuery(value)
    //check if lab tests are not empty
    const filterresult = labtests && labtests.filter((item)=>item.test_name.toLowerCase().includes(value.toLowerCase()))
    //update setFilterData with filtered items
    setFilterData(filterresult)
  }

  useEffect(() => {
    // Set loading to be true
    setLoading(true);
    axiosinstanceToken.post("/viewlabtests", { lab_id })
      .then((response) => {
        setLabtest(response.data.message);
        setFilterData(response.data.message)
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setFailure(error.message);
      });
  }, [lab_id]);
  console.log(labtests)

  return (
    <div className="lab-tests-cont mt-5">
      <Layout />
      <div>
        <h2>Lab Tests Information</h2>
        {loading && <div className="loading">Loading...</div>}
        {failure && <div className="error">{failure}</div>}
          {/* search input  */}
          
        <input type="text"  
        placeholder='serch lab tests'
         className='form-control mb-3'
         
          value={query}
         onChange={(e)=>handleSearch(e.target.value)} />

        <table className={classNames({ 'loading-table': loading })}>

          <thead>
            <tr>
              <th>Test Name</th>
              <th>Test Description</th>
              <th>Test Cost</th>
              <th>Test Discount</th>
            </tr>
          </thead>
          <tbody>
            {filterdata?.map((test, index) => (
              <tr key={index}>
                <td>{test.test_name}</td>
                <td>{test.test_description}</td>
                <td> {"Ksh"} {test.test_cost}</td>
                <td>{test.test_discount}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LabTests;
