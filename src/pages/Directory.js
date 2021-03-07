import React, { Component }from "react";
import API from "../utils/API";
import EmployeeTable from "../components/EmployeeTable/index";


class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //state is by default an object
      employees: [],
     
    };
  }

  componentDidMount() {
    this.test();
  }
  

  test() {
    API.getRandomUser().then((res) => {
      console.log(res);
      let randomEmp = res.data.results;
      let employeesHolder = [];
      for (let i = 0; i < randomEmp.length; i++) {
        let randomEmpData = {
          image: <img alt = "profile_image" src= {randomEmp[i].picture.thumbnail}/>,
          name: randomEmp[i].name.first + " " + randomEmp[i].name.last,
          email: randomEmp[i].email,
          phone: randomEmp[i].cell
        };
        employeesHolder.push(randomEmpData);
        console.log(employeesHolder);
      }
      return this.setState({employees: employeesHolder});
      
    });
  }
  
  render() {
    return (
      <div>
        <h2>The Directory</h2>
        
        <EmployeeTable employees={ this.state.employees } />
      </div>
    );
   
  }
}
export default Table;
