// import React, { useState } from "react";
// import { LoginBg, googleIcon } from "../assets";
// // import { LoginInput } from "../components";
// import { motion } from "framer-motion";
// import { fcGoogle } from "react-icons/md";
// import {
//   getAuth,
//   signInWithPopup,
//   GoogleAuthProvider,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { app } from "../config/firebase.config";
// import { validateUserJWToken } from "../api";
// import { useNavigate } from "react-router-dom";


// const Login = () => {
//   const [userEmail, setUserEmail] = useState("");
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [password, setPassword] = useState("");
//   const [confirm_password, setConfirm_Password] = useState("");

//   const firebaseAuth = getAuth(app);
//   const provider = new GoogleAuthProvider();

//   const navigate = useNavigate();

//   //actions

//   //reducer

//   //store

//   //dispatch

//   const loginWithGoogle = async () => {
//     await signInWithPopup(firebaseAuth, provider).then((userCred) => {
//       firebaseAuth.onAuthStateChanged((cred) => {
//         if (cred) {
//           cred.getIdToken().then((token) => {
//             validateUserJWToken(token).then((data) => {
//               console.log(data);
//             });
//             navigate("/", { replace: true });
//           });
//         }
//       });
//     });
//   };

//   const signUpWithEmailPass = async () => {
//     if (userEmail === "" || password === "" || confirm_password === "") {
//     } else {
//       if (password === confirm_password) {
//         console.log("equal");
//         await createUserWithEmailAndPassword(
//           firebaseAuth,
//           userEmail,
//           password
//         ).then((userCred) => {
//           firebaseAuth.onAuthStateChanged((cred) => {
//             if (cred) {
//               cred.getIdToken().then((token) => {
//                 validateUserJWToken(token).then((data) => {
//                   console.log(data);
//                 });
//                 navigate("/", { replace: true });
//               });
//             }
//           });
//         });
//       } else {
//         // alert
//       }
//     }
//   };

//   const signInWithEmailPass = async () => {
//     if (userEmail !== "" && password !== "") {
//       await signInWithEmailAndPassword(firebaseAuth, userEmail, password).then(
//         (userCred) => {
//           firebaseAuth.onAuthStateChanged((cred) => {
//             if (cred) {
//               cred.getIdToken().then((token) => {
//                 validateUserJWToken(token).then((data) => {
//                   console.log(data);
//                 });
//                 navigate("/", { replace: true });
//               });
//             }
//           });
//         }
//       );
//     } else {
//       //alert message
//     }
//   };

//   return (
//     <div>
//     <div className="w-screen h-screen relative overflow-hidden flex">
//       {/* background image */}
//       <img
//         src={LoginBg}
//         className="w-full h-full object-cover absolute"
//         alt=""
//       />
//       {/* content box */}
//       <div className="flex flex-col items-center bg-cardOverlay w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12">
//         <div className="flex items-center justify-start gap-4 w-full">
//           <img src="" className="w-8" alt="" />
//           <p className="text-headingColor font-semibold text-2xl">City</p>
//         </div>
//         <p className="text-3xl font-semibold text-heading-color">
//           {isSignUp ? "Hello There!" : "Welcome Back"}
//         </p>
//         <p className="text-xl font-semibold text-heading-color mt-2">
//           {isSignUp ? "Sign Up" : "Sign In"} to get cooking!
//         </p>
//         {/* <div className="w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4">
//           <LoginInput
//             placeholder={"Email Here"}
//             icon=""
//             inputState={userEmail}
//             inputStateFunc={setUserEmail}
//             type="email"
//             isSignUp={isSignUp}
//           />
//           <LoginInput
//             placeholder={"Password Here"}
//             icon=""
//             inputState={password}
//             inputStateFunc={setPassword}
//             type="password"
//             isSignUp={isSignUp}
//           />
//           {isSignUp && (
//             <LoginInput
//               placeholder={"Confirm Password Here"}
//               icon=""
//               inputState={confirm_password}
//               inputStateFunc={setConfirm_Password}
//               type="password"
//               isSignUp={isSignUp}
//             />
//           )}
//           {!isSignUp ? (
//             <p>
//               Not registered yet?
//               <motion.button
//                 whileTap={{ scale: 0.95 }}
//                 className="text-red-400 underline cursor-pointer bg-transparent"
//                 onClick={() => setIsSignUp(true)}
//               >
//                 Create now!
//               </motion.button>
//             </p>
//           ) : (
//             <p>
//               Already Registered?
//               <motion.button
//                 whileTap={{ scale: 0.95 }}
//                 className="text-red-400 underline cursor-pointer bg-transparent"
//                 onClick={() => setIsSignUp(false)}
//               >
//                 Sign in Now!
//               </motion.button>
//             </p>
//           )}
//           {isSignUp ? (
//             <motion.button
//               whileTap={{ scale: 0.95 }}
//               className="w-full px-4 py-2 rounded-md bg-gray-600 cursor-pointer text-white text-xl capitalize hover:bg-gray-800 transition-all duration-150"
//               onClick={signUpWithEmailPass}
//             >
//               Sign Up
//             </motion.button>
//           ) : (
//             <motion.button
//               whileTap={{ scale: 0.95 }}
//               className="w-full px-4 py-2 rounded-md bg-gray-600 cursor-pointer text-white text-xl capitalize hover:bg-gray-800 transition-all duration-150"
//               onClick={signInWithEmailPass}
//             >
//               Sign In
//             </motion.button>
//           )}
//         </div> */}
//         <div className="flex items-center justify-between gap-16 py-12">
//           <div className="w-24 h-[1px] rounded-md bg-black font-bold"></div>
//           <p className="text-black font-semibold">or</p>
//           <div className="w-24 h-[1px] rounded-md bg-black font-bold"></div>
//         </div>
//         <motion.div
//           whileTap={{ scale: 0.95 }}
//           className="flex items-center justify-center px-20 py-2 bg-black backdrop-blur-md cursor-pointer rounded-3xl gap-4"
//           onClick={loginWithGoogle}
//         >
//           {/* {icon here for google} */}
//           <fcGoogle className="text-xl bg-white" />
//           <p className="capitalize text-base text-white">Sign in with google</p>
//         </motion.div>
//       </div>
//     </div>
  
//     </div>
//   );
// };

// export default Login;
