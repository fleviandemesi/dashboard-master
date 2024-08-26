import React, { useEffect, useState } from "react";
import './profile.css'; // Ensure this path is correct
import Layout from '../layout/Layout';
import images1 from '../../images/images1.jpeg';
import CheckSession from '../../helpers/CheckSession';

const Profile = () => {
  const { username, admin_id, access_token, phone } = CheckSession(); // Make sure CheckSession returns phone
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch profile data
    setLoading(true);

    const fetchProfileData = async () => {
      try {
        // Retrieve email from local storage or an API if necessary
        const emailFromStorage = localStorage.getItem("email");
        setEmail(emailFromStorage);
      } catch (err) {
        setError('Failed to load profile data');
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <>
      <Layout />
      <h1 className="h1">Admin Profile</h1>
      <div className='profile-card'>
        {loading && <p className="text-light">Loading ...</p>}
        {error && <p className="text-danger">Error occurred. Try later.</p>}

        <div className='profile-header'>
          <div className='profile-picture'>
            <img src={images1} alt='Profile' />
          </div>
          <h2 className='profile-title'>{username}</h2>
        </div>
        <div className='profile-content'>
          <div className='profile-detail'>
            <strong>ID:</strong> <span>{admin_id}</span>
          </div>
          <div className='profile-detail'>
            <strong>Permit:</strong> <span>admin.p</span>
          </div>
          <div className='profile-detail'>
            <strong>Email:</strong> <span>{email}</span>
          </div>
          
          <div className='profile-detail'>
            <strong>Registration Date:</strong> <span>admin.date</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
