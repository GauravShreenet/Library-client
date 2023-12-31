import React, { useEffect, useRef } from 'react'
import { MainLayout } from '../../component/layout/MainLayout'
import { Button, Form } from 'react-bootstrap'
import { CustomInput } from '../../component/custom-input/CustomInput'
import { toast } from 'react-toastify'
import { loginUser } from '../../helper/axiosHelper'
import { autoLogin, getUserAction } from './userAction'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'

const Login = () => {

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useSelector((state)=> state.userInfo)

  const fromLocation = location?.state?.from?.location?.pathname || "/dashboard"

  useEffect(()=>{
    // redirect to dsahboard
   user?._id && navigate(fromLocation);
   !user?._id && dispatch(autoLogin());
  }, [user?._id, navigate, dispatch, fromLocation])

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      return toast.error("Both input field must be filled")
    }

    ///axios
    const { status, message, jwts } = await loginUser({ email, password });
    

    if (status === "success") {
      const { accessJWT, refreshJWT } = jwts;
      sessionStorage.setItem("accessJWT", accessJWT)
      localStorage.setItem("refreshJWT", refreshJWT);
      //fetch user info and redirect to dashboard
      dispatch(getUserAction());
      return;

    }
    toast[status](message);

    //fetch user info and redirect to dashboard



  }

  const inputs = [
    {
      label: "Email",
      name: "email",
      placeholder: "samsmith@xxx.com",
      type: "email",
      required: true,
      passRef: emailRef,
    },
    {
      label: "Password",
      name: "password",
      placeholder: "XXXXXXXX",
      type: "password",
      required: true,
      passRef: passwordRef,
    },
  ]

  return (
    <MainLayout>
      <div>
        <Form onSubmit={handleOnSubmit} className="form-center border shadow-lg p-4 rounded-4 mt-5">
          <h2>Welcome Back !</h2>
          <hr />
          {
            inputs.map(
              (item, i) => (
                <CustomInput key={i} {...item} />
              )
            )
          }
          <div className="d-grid mt-2">
            <Button type='submit' variant='primary'>
              {" "}
              Login
            </Button>
          </div>
          <div className="text-end mt-5">
            Don't have an account? <a href="/signup">Register Now</a>
          </div>
        </Form>
      </div>
    </MainLayout>

  )
}

export default Login