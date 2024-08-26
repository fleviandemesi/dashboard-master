import React, { useState } from 'react';
import "./addtests.css";
import Layout from '../layout/Layout';
import CheckSession from '../../helpers/CheckSession';
import axiosinstanceToken from '../../helpers/axiosinstanceToken';
import "../../index.css"

const AddTests = () => {
  const {lab_name,lab_id,access_token} = CheckSession()
  const [test_name,setName] = useState("");
  const [test_description,setDescription] = useState("");
  const [test_cost,setCost] = useState("");
  const [test_discount,setDiscount] = useState("");
  
  //add states to see whether its loading its succes or failure
  const [loading, setLoading] = useState(false);
  const [failure, setFailure] = useState (null);
  const [success, setSuccess] = useState (null);

  const handleAddTests = (e)=>{
    
    e. preventDefault()
    setLoading(true)
    // use axiosInstance to post data to api 
    axiosinstanceToken.post('/addlabtests',{
      lab_id:lab_id,
      test_name: test_name,
      test_description:test_description,
      test_cost:test_cost,
      test_discount:test_discount
      
    })
      .then((response)=>{
        setSuccess(response?.data?.message) 
        // console.log(response)
        setLoading(false)
      })
      .catch((error)=>{
        setLoading(false)
        setFailure(error.message)
      })
  
      
  }
  //loading page
  if(loading){
    return <p>Loading...Please wait.</p>
  }

  return (
    
    <div>
      <Layout/>
      <section className="add-tests-section container">
        {/* return response for success  */}
      {success && <div className='success'>{success}</div>}
      {/* return response for failure  */}
      {failure && <div className='failure'>{failure}</div>}
        <h1>Add Tests</h1>
        <form onSubmit={handleAddTests} >
          <div className="form-group">
            <label htmlFor="testName">Test Name</label>
            <input
              type="text"
              id="testName"
              name="testName"
              onChange={(e)=> setName(e.target.value)}
              value={test_name}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="testDescription">Test Description</label>
            <textarea
              id="testDescription"
              name="testDescription"
              onChange={(e)=> setDescription(e.target.value)}
              value={test_description}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="testCost">Test Cost</label>
            <input
              type="number"
              id="testCost"
              name="testCost"
              onChange={(e)=> setCost(e.target.value)}
              value={test_cost}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="testDiscount">Test Discount (%)</label>
            <input
              type="number"
              id="testDiscount"
              name="testDiscount"
              value={test_discount}
              min="0"
              max="100"
              onChange={(e)=> setDiscount(e.target.value)}
              required
            />
          </div>
          <button type="submit">Add Test</button>
          
        </form>
       
      </section>
    </div>

  );
};

export default AddTests;
