// import React, {  useState } from "react";
// import "./SignUpForm.css"; // Make sure the path to your CSS file is correct

// import ApiService from "../../services/ApiService";
// import { useNavigate } from "react-router-dom";

// const SignUpForm = () => {
//   const navigate = useNavigate()
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
//   console.log("the form data are shown here :", formData);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log("form submit !!!");
//       let response = await ApiService.post("auth/signup", formData);
//       console.log("response :", response);
//       navigate("/login")
//     } catch (error) {
//       console.log("error :", error);
//     }
//   };
 
 
//   return (
//     <>
//     <div className="signup_form">

//       <div>
//         <img src={formData.pic} alt="" />
//       </div>
//       <form onSubmit={handleSubmit} className="sign-up-form">
//         <label htmlFor="name" className="visually-hidden">
//           Name:
//         </label>
//         <input
//           id="name"
//           type="text"
//           name="fullName"
//           placeholder="Your Name"
//           value={formData.fullName}
//           onChange={handleChange}
//           required
//         />
//         <label htmlFor="email" className="visually-hidden">
//           Email:
//         </label>
//         <input
//           id="email"
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <label htmlFor="password" className="visually-hidden">
//           Password:
//         </label>
//         <input
//           id="password"
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Create an account</button>
       
//       </form>
//           </div>
//     </>
//   );
// };

// export default SignUpForm;
