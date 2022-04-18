const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require('../middleware/authenticate');


require('../db/conn');
const Register = require('../models/register');


router.post('/registration', async (req, res) => {
  const {
    username,
    email,
    password,
    confirmpassword,
    phoneNumber
  } = req.body; //object destructing//

  if (!username || !email || !password || !confirmpassword || !phoneNumber) {
    res.status(400).json({
      msg: 'please enter all fields'
    });
  }

  try {
    const userExist = await Register.findOne({
      email: email
    })

    if (userExist) {
      return res.status(422).json({
        msg: 'user already exists'
      });
    } else if (password !== confirmpassword) {
      return res.status(422).json({
        msg: 'password not  match'
      });
    } else {
      const newUser = new Register({
        username,
        email,
        password,
        confirmpassword,
        phoneNumber
      });
       
      await newUser.save();

      res.status(201).json({
        msg: 'user registered!!!'
      });


    }


  } catch (err) {
    console.log(err);
  }

});

//Login Route//
router.post('/login', async (req, res) => {
  try{
    const {
    email,
    password
  } = req.body;
  

    if (!email || !password) {
      return res.status(400).json({
        msg: 'plz filled the data'
      })
    }
    const userlogin = await Register.findOne({
      email: email,
     
    });

    if(userlogin){
      const isMatch =  await bcrypt.compare(password,userlogin.password); //compare password with database password//
     
    const token= await userlogin.generateAuthToken();
    console.log(token);

    res.cookie('jwttoken',token,{          // jwttoken is name and token is value//
      expires: new Date(Date.now() + 3600000),
      httpOnly: true
    });
      if (!isMatch) {
         res.status(400).json({
          msg: 'invalid creditionals'
        });
      }else{
        res.json({message:"user signin successfully"});
        
      }
    }else{
      res.status(400).json({
        msg: 'invalid creditionals'
      });
    }



  } catch (err) {
    console.log(err);
  }

});

//About us page 

router.get('/About', authenticate, (req, res) => {  // authenticate is middleware//

res.send(req.rootUser);


});

//Logout page//
router.get('/Logout', (req, res) => {  // authenticate is middleware//
res.clearCookie('jwttoken',{path:'/'});
  res.status(200).send('user logout');
  
  
  });
  


//!Keeper Api //!

router.post('/getAll', authenticate ,async (req, res) => {
  try{
    const getDetail = await Register.findOne({ _id: req.rootUser});
  if(getDetail){
    const keeperDetail = await keeperDetail.addMessage(title, description);
    await getDetail.save();
  }
}catch(err){
    console.log(err);
  }
});


router.get('/getAll',authenticate, (req, res) => {
  Register.find({},  (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  }).sort( { title : -1, description: -1 } )

} ); 

router.post('/addNew',async (req, res) => {
  
  const {title, description} = req.body;
try{
  const keepermain = new Register({
    title: title,
    description: description
});

await keepermain.save();

}catch(e){
  console.log(e);
}

});

router.post('/delete',(req, res) => {
  const {id} = req.body;
  Register.findByIdAndDelete(id, () => {
    Register.find({}, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  });

});


//update the list of keepers//

router.put('/Update',(req, res) => {
  const {id, title, description} = req.body;
  Register.findByIdAndUpdate(id, {
    title: title,
    description: description
  }, () => {
    Register.find({}, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  });
});










module.exports = router;