import React, { useState } from 'react'
import { CustomInput } from '../../component/custom-input/CustomInput'
import { Button, Form } from 'react-bootstrap';
import { postAdminUser } from '../../helper/axiosHelper';
import {toast} from 'react-toastify';

const initalState = {
  fName: "",
  lName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
}

const AdminSign = () => {

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
    console.log(form);

    const { confirmPassword, ...rest } = form
    if (confirmPassword !== rest.password) {
      return alert("Password do not match")
    }

    const pending = postAdminUser(rest)
    toast.promise({
      pending: 'Please wait',
      // success: 'request success',
      // error: 'error in request'
    })

    const {status, message} = await pending;
    toast[status](message); //toast.success or toast.error according to the status
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
        <h2>Create New Admin</h2>
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
      </Form>
    </div>
  )
}

export default AdminSign