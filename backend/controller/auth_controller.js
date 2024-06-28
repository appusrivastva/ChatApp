import multer from 'multer';
import path from 'path';
import User from "../model/signup_model.js"


// when user do sign up
export const signUp = async (req, res) => {
  try {
      const { email,password} = req.body;
      console.log(email);

      // password checking 
      // if(password!=confirmPassword){
      //   return res.status(400).json({error:"password didn't match"})
        
      // }
    //  check user exists already 

    const user=await User.findOne({user_email:email})
    if(user){
      return res.status(400).json({error:"useremail already exists"})
    }
    

    // hash password here

    // user_gender:gender,
    // user_pic:gender==='male'?male:female
    // const male="https://avatar.iran.liara.run/public/boy"
    // const female="https://avatar.iran.liara.run/public/girl"
    // const other="https://avatar.iran.liara.run/public"

      const userDoc = new User({
          user_email: email,
          user_password: password,
         
      });

      await userDoc.save();
      res.status(201).send({ message: "User created successfully" });
  } catch (err) {
      console.error(err.message);
      res.status(500).send({ message: "Server error" });
  }
};
































// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//       cb(null, './public/All_profile_pic');
//   },
//   filename: function (req, file, cb) {
//       cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
//   }
// });
// const upload = multer({ storage: storage });

// export const profilePic= upload.single('profile_pic');

// export const signIn=async (req, res) => {
//         try {
//           //  {}
//           const acc_info = req.body;
//           console.log(acc_info);
//           const {email,password} = acc_info;
      
//           const user_data = await signup_Model.findOne({ user_email: email });
      
//           console.log(user_data);
      
//           if (user_data != null) {
//             if (user_data.user_password == password) {
//               // res.send("user found")
      
//               res.send({ code: 200, message: "userhome", token: user_data.user_email });
//             } else {
//               res.send({ code: 404, message: "password error" });
//             }
//           }
//            else {
//             res.send("invalid credentials");
//           }
//         } catch (err) {
//           console.log(err.message);
//    }
//  };

// export const signOut=(req,res)=>{
//     res.send("signOut")
// }

// export const editprofile= async (req, res) => {
//   try {
//       const { username, password, email, phone } = req.body;
//       const pic=req.file.filename;
//       if (!req.file) {
//         return res.status(400).json({ message: 'No file uploaded' });
//     }

     
    
     
//       const updateDoc = {
//         user_name: username,
//         user_password: password,
//         user_email: email,
//         user_phone: phone,
//         user_pic:pic
//         }
      
//       const filter_condition = { user_email: email };
//       const status = await signup_Model.updateOne(filter_condition, updateDoc);

//       // Save photo path to database
//       // const newUser = await signUp({
//       //     user_name: username,
//       //     user_password: password,
//       //     user_email: email,
//       //     user_phone: phone,
//       //     user_photo: req.file.path // Save the path of uploaded photo to the database
//       // });

      

//       res.status(201).json({ message: 'Update successfully',status });
//   } catch (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Server error' });
//   }
// };

// export const getpic=async (req,res)=>{
//   try {
//     const email = req.query.user_email;
//     const userdata = await signup_Model.findOne({ user_email: email });
    
  
//     res.send(userdata)
// } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
// }
// }