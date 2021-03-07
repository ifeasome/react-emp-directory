import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';

export default function EmployeeTable(props) {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Image',
        field: 'image',
        width: 500,
      },
      {
        label: 'Name',
        field: 'name',
        width: 150,
        sort: 'asc',
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Email',
        field: 'email',
        sort: 'disabled',
        width: 150,
      },
      {
        label: 'Phone',
        field: 'phone',
        sort: 'disabled',
        width: 100,
      },
    ],
    rows: [
      {
        image: props.image,
        name: props.name,
        email: props.email,
        phone: props.phone
      },
      {
        image: props.image,
        name: props.name,
        email: props.email,
        phone: props.phone
      },
      {
        image: props.image,
        name: props.name,
        email: props.email,
        phone: props.phone
      },
      {
        image: props.image,
        name: props.name,
        email: props.email,
        phone: props.phone
      },
      {
        image: props.image,
        name: props.name,
        email: props.email,
        phone: props.phone
      },
      {
        image: props.image,
        name: props.name,
        email: props.email,
        phone: props.phone
      },
      {
        image: props.image,
        name: props.name,
        email: props.email,
        phone: props.phone
      },
      {
        image: props.image,
        name: props.name,
        email: props.email,
        phone: props.phone
      },
      {
        image: props.image,
        name: props.name,
        email: props.email,
        phone: props.phone
      },
      {
        image: props.image,
        name: props.name,
        email: props.email,
        phone: props.phone
      },
      {
        image: props.image,
        name: props.name,
        email: props.email,
        phone: props.phone
      },
      {
        image: props.image,
        name: props.name,
        email: props.email,
        phone: props.phone
      }
    ]
  });

  return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={20} pagesAmount={4} data={datatable} searchTop searchBottom={false} />;
}

// import React from 'react';
// import {MDBDataTableV5} from 'mdbreact';
// import "./style.css"
// const EmployeeTable = (props) => {
//     const data = {
//         columns: [
//             {
//                 label: "Image",
//                 field: "image",
//                 width: 500,
//               },
//             {
//                 label: "Name",
//                 field: "name",
//                 sort: "asc",
//                 width: 500,
//               },
//               {
//                 label: "Email",
//                 field: "email",
//                 sort: "asc",
//                 width: 500,
//               },
//               {
//                 label: "Address",
//                 field: "address",
//                 sort: "asc",
//                 width: 500,
//               },
//               {
//                 label: "Phone",
//                 field: "phone",
//                 sort: "asc",
//                 width: 300,
//               },
//               {
//                 label: "DOB",
//                 field: "dob",
//                 sort: "asc",
//                 width: 250,
//               }
//         ],
//         rows: props.employees
//     };
//     console.log("Props", props); //empty
//     return (
    

//     <MDBDataTableV5 sorting={true} striped bordered data={data} />
   
//     )
// };

// export default EmployeeTable;

