import React from 'react'
import { CustomInput } from '../../component/custom-input/CustomInput'
import {Button, Form} from 'react-bootstrap';

const AdminSign = () => {
  const inputs = [
    {
      label: "First Name",
      name: "fname",
      placeholder: "sam",
      type: "text",
      required: true,
    },
    {
      label: "Last Name",
      name: "lname",
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
      name: "confirmpassword",
      placeholder: "XXXXXXXX",
      type: "password",
      required: true,
    },
  ]
  return (
    <div>
      <Form className="form-center border shadow-lg p-4 rounded-4 mt-5">
        <h2>Create New Admin</h2>
        <hr />
        {inputs.map((item, i)=>(<CustomInput key={i} {...item}/>))}
        <div className="d-grid mt-2">
          <Button variant='primary'>
            {" "}
            Create New Admin
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default AdminSign