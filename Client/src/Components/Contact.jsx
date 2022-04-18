// import React, { useEffect, useState } from 'react';
// import '../contact.css';

// const Contact = () => {

//   const [userData,setUserData]=useState('');
// const userContact = async () => { 
//   try{
//     const res = await fetch('/previous', {
//       method: 'GET',
//       headers: {
//         "Content-Type": "application/json"
//       }
//     });
//     const data = await res.json();
//     console.log(data);
//     setUserData(data);
//     if (!res.status === 200) {
//       const error = new Error(res.error);
//       throw error;
//     }

//   }catch(err){
//  console.log(error);
//   }
// }

//  useEffect(()=>{
//    userContact();
//  },[])

//   return (
   
//     <div class='container'>
//       <div className='row'>
//         <h1>contact us</h1>
//       </div>
//       <form>
//       <div className='row input-container'>
//         <div className='col-xs-12'>
//           <div className='styled-input wide'>
          
//             <input type='text' className='relo' name = "name"  required />
//             <label>Name</label>
//           </div>
//         </div>
//         <div className='col-md-6 col-sm-12'>
//           <div className='styled-input'>
//             <input type='text' className='relo' name = "email"   required />
//             <label>Email</label>
//           </div>
//         </div>
//         <div classNmae='col-md-6 col-sm-12'>
//           <div className='styled-input'>
//             <input type='text' className='relo' name='phoneNumber'   required />
//             <label>Phone Number</label>
//           </div>
//         </div>
//         <div className='col-xs-12'>
//           <div className='styled-input wide'>
//             <textarea name='message'  required></textarea>
//             <label>Message</label>
//           </div>
//         </div>
//         <div className='col-xs-12'>
//           <div className='btn-lrg submit-btn'> Send Message</div>
//         </div>
//       </div>
//       </form>
//     </div>
  
//   );
// };

// export default Contact;
