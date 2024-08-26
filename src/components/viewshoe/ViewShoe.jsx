import React, { useEffect, useState } from 'react';
import axiosinstanceToken from '../../helpers/axiosinstanceToken';
import classNames from 'classnames'; // Import classnames for conditional classes
import './viewshoe.css'; // Ensure this CSS file exists and contains the appropriate styles
import Layout from '../layout/Layout';
import CheckSession from '../../helpers/CheckSession';
import { AiOutlineSearch } from "react-icons/ai";


const ViewShoe = () => {
  const { name, shoe_id, access_token } = CheckSession();
  const [loading, setLoading] = useState(false);
  const [shoes, setshoes] = useState([]);
  const [failure, setFailure] = useState(null);
  const [filterdata, setFilterData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setLoading(true);
    axiosinstanceToken.post("/viewshoes", { name, shoe_id })
      .then((response) => {
        setshoes(response.data);
        setFilterData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setFailure(error.message);
      });
  }, [shoe_id]);

  useEffect(() => {
    const filterresult = shoes.filter((item) =>
      item.surname.toLowerCase().includes(query.toLowerCase()) ||
      (item.others && item.others.toLowerCase().includes(query.toLowerCase()))
    );
    setFilterData(filterresult);
  }, [query, shoes]);

  const handleSearch = (value) => {
    setQuery(value);
  };

  return (
    <div className="nurses-cont">
      <Layout />
      <div>
        <h2>Shoe Information</h2>
        {loading && <div className="loading">Loading...</div>}
        {failure && <div className="error">{failure}</div>}

        {/* Search input with icon */}
        <div className="search-container mb-3">
          <input
            type="text"
            placeholder='Search nurse'
            className='form-control'
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <AiOutlineSearch className="search-icon" />
        </div>

        <table className={classNames({ 'loading-table': loading })}>
          <thead>
            <tr>
              <th>Surname</th>
              <th>Others</th>
              <th>Gender</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {filterdata.length === 0 ? (
              <tr>
                <td colSpan="4" className="no-data">No nurses available</td>
              </tr>
            ) : (
              filterdata.map((nurse, index) => (
                <tr key={index}>
                  <td>{nurse.surname || 'N/A'}</td>
                  <td>{nurse.others || 'N/A'}</td>
                  <td>{nurse.gender || 'N/A'}</td>
                  <td>{nurse.phone || 'N/A'}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewShoe;
