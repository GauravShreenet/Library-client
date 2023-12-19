import React, { useState } from 'react'
import { CustomInput } from '../../component/custom-input/CustomInput'
import { Button, Form } from 'react-bootstrap';
import { postAdminUser, postUsers } from '../../helper/axiosHelper';
import {toast} from 'react-toastify';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const initalState = {
  fName: "",
  lName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
}

const SignUp = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState(initalState);

  const handleOnChange = e => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
   
    const { confirmPassword, ...rest } = form
    if (confirmPassword !== rest.password) {
      return alert("Password do not match")
    }

    const pending = postUsers(rest)
    toast.promise(pending, {
      pending: 'Please wait',
      // success: 'request success',
      // error: 'error in request'
    })

    const {status, message} = await pending;
    toast[status](message); //toast.success or toast.error according to the status
    if(status === 'success'){
      navigate('/login');
    }
  }

  const inputs = [
    {
      label: "First Name",
      name: "fName",
      placeholder: "sam",
      type: "text",
      required: true,
    },
    {
      label: "Last Name",
      name: "lName",
      placeholder: "smith",
      type: "text",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      placeholder: "samsmith@xxx.com",
      type: "email",
      required: true,
    },
    {
      label: "Phone",
      name: "phone",
      placeholder: "04152627",
      type: "number",
    },
    {
      label: "Password",
      name: "password",
      placeholder: "XXXXXXXX",
      type: "password",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      placeholder: "XXXXXXXX",
      type: "password",
      required: true,
    },
  ]

  

  return (
    <div>
      <Form onSubmit={handleOnSubmit} className="form-center border shadow-lg p-4 rounded-4 mt-5">
        <h2>Register Now</h2>
        <hr />
        {
          inputs.map(
            (item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            )
          )
        }
        <div className="d-grid mt-2">
          <Button type='submit' variant='primary'>
            {" "}
            Create New Admin
          </Button>
        </div>
        <div className="text-end mt-5">
            Already have an account? <a href="/login">Login Now</a>
          </div>
      </Form>
    </div>
  )
}

export default SignUp;