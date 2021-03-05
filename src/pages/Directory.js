import React, { Component } from 'react';
import API from "../utils/API";
import './style.css';
import EmployeeTable from "../components/EmployeeTable/index";



class Table extends Component {
  state = {
    //state is by default an object
    employees: [],
    // users: "",
    // search: "",
  };
  componentDidMount() {
   API.getRandomUser()
   .then((res) => {
        console.log(res);
        let randomEmp = res.data.results;
        let employeesHolder = [];
        for (let i = 0; i < randomEmp.length; i++) {
          let randomEmpData = {
            image: randomEmp[i].picture.medium,
            name: randomEmp[i].name.first + " " + randomEmp[i].name.last,
            email: randomEmp[i].email,
            address: randomEmp[i].location.street,
            phone: randomEmp[i].cell,
            dob: randomEmp[i].dob.date
          };
          employeesHolder.push(randomEmpData);
        }
        this.setState({employees: employeesHolder });
})
  }
  // renderTableData() {
  //   return this.state.employees.map((each, index) => {
  //     return (
  //       <tr>
  //         <img src={each.picture.thumbnail} alt="Employee Profile"/>
  //         <td>{each.name.title + " " + each.name.first + " " + each.name.last }</td>
  //         <td>{each.phone}</td>
  //         <td>{each.email}</td>
  //         <td>{each.dob.age}</td>
  //       </tr>
  //     );
  //   });
  // }
  // renderTableHeader() {
  //   let header = ["image", "name", "phone", "email", "age"];
  //   return header.map((key, index) => {
  //     return <th key={index}>{key.toUpperCase()}</th>;
  //   });
  // }
  render() {
    
    return (
      <div>
        <h2>The Directory</h2>
        <EmployeeTable employees={this.state.employees} />
      </div>
    );
  }
}
export default Table;