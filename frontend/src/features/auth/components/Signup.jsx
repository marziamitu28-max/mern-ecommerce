/*import {FormHelperText, Stack, TextField, Typography,Box, useTheme, useMediaQuery} from '@mui/material'
import React, { useEffect } from 'react'
import Lottie from 'lottie-react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { ecommerceOutlookAnimation, shoppingBagAnimation} from '../../../assets'
import {useDispatch,useSelector} from 'react-redux'
import { LoadingButton } from '@mui/lab';
import {selectLoggedInUser, signupAsync,selectSignupStatus, selectSignupError, clearSignupError, resetSignupStatus} from '../AuthSlice'
import { toast } from 'react-toastify'
import { MotionConfig , motion} from 'framer-motion'

export const Signup = () => {
  const dispatch=useDispatch()
  const status=useSelector(selectSignupStatus)
  const error=useSelector(selectSignupError)
  const loggedInUser=useSelector(selectLoggedInUser)
  const {register,handleSubmit,reset,formState: { errors }} = useForm()
  const navigate=useNavigate()
  const theme=useTheme()
  const is900=useMediaQuery(theme.breakpoints.down(900))
  const is480=useMediaQuery(theme.breakpoints.down(480))

  // handles user redirection
  useEffect(()=>{
    if(loggedInUser && !loggedInUser?.isVerified){
      navigate("/login")
    }
    else if(loggedInUser){
      navigate("/")
    }
  },[loggedInUser])


  // handles signup error and toast them
  useEffect(()=>{
    if(error){
      toast.error(error.message)
    }
  },[error])

  
  useEffect(()=>{
       if (status === 'fulfilled') {
  toast.success("Welcome! Account created successfully. You can now login.");
  reset();
  }
}, [status])
       return () => {
      dispatch(clearSignupError())
      dispatch(resetSignupStatus())
    }
  }, [dispatch])
  // this function handles signup and dispatches the signup action with credentails that api requires
const handleSignup=(data)=>{
    const cred = { ...data };
    delete cred.confirmPassword
    dispatch(signupAsync(cred))
  }
  return (
    <Stack width={'100vw'} height={'100vh'} flexDirection={'row'} sx={{overflowY:"hidden"}}>
      
      <Stack bgcolor={'black'} flex={1} justifyContent={'center'} >
        <Lottie animationData={ecommerceOutlookAnimation}/>
      </Stack>

      <Stack flex={1} justifyContent={'center'} alignItems={'center'}>

              <Stack flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                  <Stack rowGap={'.4rem'}>
                    <Typography variant='h2' sx={{wordBreak:"break-word"}} fontWeight={600}>Mern Shop</Typography>
                    <Typography alignSelf={'flex-end'} color={'GrayText'} variant='body2'>- Shop Anything</Typography>
                  </Stack>

              </Stack>

                <Stack mt={4} spacing={2} width={is480?"95vw":'28rem'} component={'form'} noValidate onSubmit={handleSubmit(handleSignup)}>

                    <MotionConfig whileHover={{y:-5}}>

                      <motion.div>
                        <TextField fullWidth {...register("name",{required:"Username is required"})} placeholder='Username'/>
                        {errors.name && <FormHelperText error>{errors.name.message}</FormHelperText>}
                      </motion.div>

                      <motion.div>
                        <TextField fullWidth {...register("email",{required:"Email is required",pattern:{value:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,message:"Enter a valid email"}})} placeholder='Email'/>
                        {errors.email && <FormHelperText error>{errors.email.message}</FormHelperText>}
                      </motion.div>

                      <motion.div>
                        <TextField type='password' fullWidth {...register("password",{required:"Password is required",pattern:{value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,message:`at least 8 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number, Can contain special characters`}})} placeholder='Password'/>
                        {errors.password && <FormHelperText error>{errors.password.message}</FormHelperText>}
                      </motion.div>
                      
                      <motion.div>
                        <TextField type='password' fullWidth {...register("confirmPassword",{required:"Confirm Password is required",validate:(value,fromValues)=>value===fromValues.password || "Passwords doesn't match"})} placeholder='Confirm Password'/>
                        {errors.confirmPassword && <FormHelperText error>{errors.confirmPassword.message}</FormHelperText>}
                      </motion.div>
                    
                    </MotionConfig>

                    <motion.div whileHover={{scale:1.020}} whileTap={{scale:1}}>
                      <LoadingButton sx={{height:'2.5rem'}} fullWidth loading={status==='pending'} type='submit' variant='contained'>Signup</LoadingButton>
                    </motion.div>

                    <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap-reverse'}>
                        <MotionConfig whileHover={{x:2}} whileTap={{scale:1.050}}>
                            <motion.div>
                                <Typography mr={'1.5rem'} sx={{textDecoration:"none",color:"text.primary"}} to={'/forgot-password'} component={Link}>Forgot password</Typography>
                            </motion.div>

                            <motion.div>
                                <Typography sx={{textDecoration:"none",color:"text.primary"}} to={'/login'} component={Link}>Already a member? <span style={{color:theme.palette.primary.dark}}>Login</span></Typography>
                            </motion.div>
                        </MotionConfig>
                    </Stack>

                </Stack>


        </Stack>
    </Stack>
  )*/
import React, { useEffect } from "react";
import {
  FormHelperText,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import { MotionConfig, motion } from "framer-motion";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { ecommerceOutlookAnimation } from "../../../assets";

import {
  selectLoggedInUser,
  signupAsync,
  selectSignupStatus,
  selectSignupError,
  clearSignupError,
  resetSignupStatus,
} from "../AuthSlice";

export const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();

  const is480 = useMediaQuery(theme.breakpoints.down("480px"));

  const status = useSelector(selectSignupStatus);
  const error = useSelector(selectSignupError);
  const loggedInUser = useSelector(selectLoggedInUser);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Redirect user after authentication state changes
  useEffect(() => {
    if (!loggedInUser) return;

    if (!loggedInUser.isVerified) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [loggedInUser, navigate]);

  // Display signup errors
  useEffect(() => {
    if (error) {
      toast.error(error.message || "Signup failed");
    }
  }, [error]);

  // Handle successful signup
  useEffect(() => {
    if (status === "fulfilled") {
      toast.success(
        "Welcome! Account created successfully. You can now login."
      );

      reset();
    }
  }, [status, reset]);

  // Cleanup Redux signup state when component unmounts
  useEffect(() => {
    return () => {
      dispatch(clearSignupError());
      dispatch(resetSignupStatus());
    };
  }, [dispatch]);

  // Handle signup
  const handleSignup = (data) => {
    const { confirmPassword, ...credentials } = data;

    dispatch(signupAsync(credentials));
  };

  return (
    <Stack
      width="100vw"
      height="100vh"
      direction="row"
      sx={{
        overflowY: "hidden",
      }}
    >
      {/* Left side animation */}
      <Stack
        bgcolor="black"
        flex={1}
        justifyContent="center"
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      >
        <Lottie animationData={ecommerceOutlookAnimation} />
      </Stack>

      {/* Signup form */}
      <Stack
        flex={1}
        justifyContent="center"
        alignItems="center"
        px={2}
      >
        {/* Logo / Brand */}
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Stack rowGap="0.4rem">
            <Typography
              variant="h2"
              fontWeight={600}
              sx={{
                wordBreak: "break-word",
              }}
            >
              Mern Shop
            </Typography>

            <Typography
              alignSelf="flex-end"
              color="GrayText"
              variant="body2"
            >
              - Shop Anything
            </Typography>
          </Stack>
        </Stack>

        {/* Form */}
        <Stack
          mt={4}
          spacing={2}
          width={is480 ? "95vw" : "28rem"}
          component="form"
          noValidate
          onSubmit={handleSubmit(handleSignup)}
        >
          <MotionConfig
            whileHover={{ y: -5 }}
          >
            {/* Username */}
            <motion.div>
              <TextField
                fullWidth
                placeholder="Username"
                {...register("name", {
                  required: "Username is required",
                })}
              />

              {errors.name && (
                <FormHelperText error>
                  {errors.name.message}
                </FormHelperText>
              )}
            </motion.div>

            {/* Email */}
            <motion.div>
              <TextField
                fullWidth
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
              />

              {errors.email && (
                <FormHelperText error>
                  {errors.email.message}
                </FormHelperText>
              )}
            </motion.div>

            {/* Password */}
            <motion.div>
              <TextField
                fullWidth
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                    message:
                      "Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number",
                  },
                })}
              />

              {errors.password && (
                <FormHelperText error>
                  {errors.password.message}
                </FormHelperText>
              )}
            </motion.div>

            {/* Confirm Password */}
            <motion.div>
              <TextField
                fullWidth
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value, formValues) =>
                    value === formValues.password ||
                    "Passwords don't match",
                })}
              />

              {errors.confirmPassword && (
                <FormHelperText error>
                  {errors.confirmPassword.message}
                </FormHelperText>
              )}
            </motion.div>
          </MotionConfig>

          {/* Signup button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 1 }}
          >
            <LoadingButton
              sx={{
                height: "2.5rem",
              }}
              fullWidth
              loading={status === "pending"}
              type="submit"
              variant="contained"
            >
              Signup
            </LoadingButton>
          </motion.div>

          {/* Links */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap-reverse"
            gap={1}
          >
            <MotionConfig
              whileHover={{ x: 2 }}
              whileTap={{ scale: 1.05 }}
            >
              <motion.div>
                <Typography
                  component={Link}
                  to="/forgot-password"
                  sx={{
                    textDecoration: "none",
                    color: "text.primary",
                  }}
                >
                  Forgot password
                </Typography>
              </motion.div>

              <motion.div>
                <Typography
                  component={Link}
                  to="/login"
                  sx={{
                    textDecoration: "none",
                    color: "text.primary",
                  }}
                >
                  Already a member?{" "}
                  <span
                    style={{
                      color: theme.palette.primary.dark,
                    }}
                  >
                    Login
                  </span>
                </Typography>
              </motion.div>
            </MotionConfig>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

*
