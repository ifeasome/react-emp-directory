import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';

const EmployeeTable = (props) => {
  const data = {
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
    rows: props.employees
    
  };
  return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={20} pagesAmount={4} data={data} searchTop searchBottom={false} />;

}

export default EmployeeTable;
  


