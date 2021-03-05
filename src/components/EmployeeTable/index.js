import React from 'react';
import {MDBDataTableV5} from 'mdbreact';
// const mdbreact = require('mdbreact'); 
// const {  MDBDataTableV5  } = mdbreact;

const EmployeeTable = (props) => {
    const data = {
        columns: [
            {
                label: "Image",
                field: "image",
                sort: "asc",
                width: 500,
              },
            {
                label: "Name",
                field: "name",
                sort: "asc",
                width: 500,
              },
              {
                label: "Email",
                field: "email",
                sort: "asc",
                width: 500,
              },
              {
                label: "Address",
                field: "address",
                sort: "asc",
                width: 500,
              },
              {
                label: "Phone",
                field: "phone",
                sort: "asc",
                width: 300,
              },
              {
                label: "DOB",
                field: "dob",
                sort: "asc",
                width: 250,
              }
        ],
        rows: props.employees
    };
    return <MDBDataTableV5 sorting={true} striped bordered data={data} />
};

export default EmployeeTable;