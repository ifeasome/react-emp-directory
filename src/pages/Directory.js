import React, { useState, useEffect } from "react";
import API from "../utils/API";
import "./style.css";
import EmployeeTable from "../components/EmployeeTable/index";


function Directory() {
  const [image, setImage] = useState("");
  const [name, setName] =   useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [employees, setEmployees] = useState([]);
  
function Arr(data) {
 setEmployees( args => [...args, `{args.length}`]);
 console.log(data);
 console.log(employees);
}


  useEffect(() => {
    API.getRandomUser()
    .then(res => {
      console.log(res);
      let dataArray = res.data.results;
      console.log(dataArray);
      Arr(dataArray);
      // setEmployees(dataArray);
      // console.log(employees);
      // let empAPI = res.data.results;
      // for (let i = 0; i < empAPI.length; i++) {
      //   setImage(empAPI[i].picture.medium);
      //   setName(empAPI[i].name.first + " " + empAPI[i].name.last);
      //   setEmail(empAPI[i].email);
      //   setPhone(empAPI[i].cell);
      // }
    })
  }, []);

  return (
    <div>
      {/* {employees.map((employee) => {  
      setImage(employee.picture.medium);
      setName(employee.name.first + " " + employee.name.last);
      setEmail(employee.email);
      setPhone(employee.cell); 
      return <EmployeeTable image={image} name={name} email={email} phone={phone} /> })} */}
    
    </div>
  )
}


export default Directory;



// API.getRandomUser().then((res) => {
  //     console.log(res);
  //     let randomEmp = res.data.results;
  //     let employeesHolder = [];
  //     for (let i = 0; i < randomEmp.length; i++) {
  //       let randomEmpData = {
  //         image: randomEmp[i].picture.medium,
  //         name: randomEmp[i].name.first + " " + randomEmp[i].name.last,
  //         email: randomEmp[i].email,
  //         address: randomEmp[i].location.street,
  //         phone: randomEmp[i].cell,
  //         dob: randomEmp[i].dob.date,
  //       };
  //       employeesHolder.push(randomEmpData);
  //       console.log(employeesHolder);
  //     }
  //     return this.setState({employees: employeesHolder});
      
  //   });
// class Table extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       //state is by default an object
//       employees: [],
//       // users: "",
//       // search: "",
//     };
//     console.log(this.state.employees); // empty
//   }

//   componentDidMount() {
//     this.test();
//   }

//   componentDidUpdate(prevProps, prevState) {
//     // Typical usage (don't forget to compare props):
//     if (this.state.employees !== prevState.employees) {
//       console.log("employees Changed");
//     }
//   }
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

  // test() {
  //   API.getRandomUser().then((res) => {
  //     console.log(res);
  //     let randomEmp = res.data.results;
  //     let employeesHolder = [];
  //     for (let i = 0; i < randomEmp.length; i++) {
  //       let randomEmpData = {
  //         image: randomEmp[i].picture.medium,
  //         name: randomEmp[i].name.first + " " + randomEmp[i].name.last,
  //         email: randomEmp[i].email,
  //         address: randomEmp[i].location.street,
  //         phone: randomEmp[i].cell,
  //         dob: randomEmp[i].dob.date,
  //       };
  //       employeesHolder.push(randomEmpData);
  //       console.log(employeesHolder);
  //     }
  //     return this.setState({employees: employeesHolder});
      
  //   });
  // }
  
//   render() {
//     return (
//       <div>
//         <h2>The Directory</h2>
        
//         <EmployeeTable employees={ this.state.employees } />
//       </div>
//     );
   
//   }
// }
// export default Table;
