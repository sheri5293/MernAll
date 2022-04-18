import React, { useEffect,useState } from 'react';
import demopic from '../pics/bg3.jpg';
import Aboutpic from '../pics/bg4.jpg';
import { useHistory } from 'react-router-dom';
const About = () => {
  const history = useHistory();

  const [userData,setUserData]=useState('') 

  const callAboutPage = async () => {
    try {
      const res = await fetch('/About', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include', //to send cookies to server//
      });
      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push('/login');
    }
  };

  //when page refresh we get automatally the function //
  useEffect(() => {
    //

    callAboutPage();
  }, []); // it will call the function only when the page is refresh//

  return (
    <form method='GET'>
      
      {/* method is used to send data to server */}
      <div className='studentprofile py-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='card shadow-sm'>
                <div className='card-header bg-transparent text-center'>
                  <img className='profileimg' src={userData.username==="ALi" ? demopic : Aboutpic} alt='demo' />
                  <h3> {userData.username}</h3>
                </div>
                <div className='card-body'>
                  <p className='mb-0'>
                    <strong className='pr-1'>Student Email:</strong>{userData.email}
                  </p>
                  <p className='mb-0'>
                    <strong className='pr-1'>PhoneNumber:</strong>{userData.phoneNumber}
                  </p>
                  <p className='mb-0'>
                    <strong className='pr-1'>password:</strong>{userData.password}
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-8'>
              <div className='card shadow-sm'>
                <div className='card-header bg-transparent border-0'>
                  <h3 className='mb-0'>
                    <i className='far fa-clone pr-1'></i>General Information
                  </h3>

                  <div className='col-md-2'>
                    <input
                      type='submit'
                      className=''
                      name='btnAddMore'
                      value='Edit profile'
                    />
                  </div>
                </div>
                <div className='card-body pt-0'>
                  <table className='table table-bordered'>
                    <tr>
                      <th width='30%'>Name</th>
                      <td width='2%'>:</td>
                      <td>{userData.username}</td>
                    </tr>
                    <tr>
                      <th width='30%'>Email </th>
                      <td width='2%'>:</td>
                      <td>{userData.email}</td>
                    </tr>
                    <tr>
                      <th width='30%'>Phone</th>
                      <td width='2%'>:</td>
                      <td>{userData.phoneNumber}</td>
                    </tr>
                    <tr>
                      <th width='30%'>password</th>
                      <td width='2%'>:</td>
                      <td>{userData.password}</td>
                    </tr>
                    <tr>
                      <th width='30%'>password</th>
                      <td width='2%'>:</td>
                      <td>{userData.confirmpassword}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default About;
