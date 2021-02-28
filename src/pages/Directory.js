// import APIcalls from "../utils/API";
import React, { useState, useEffect } from "react";



export default function Directory() {
    const [users, setUsers] = useState([]);

useEffect(() => {
       console.log("hey there!")
        setUsers([1,2,3]);
        console.log(users);
        //make APIcall inside this func 
        //api results put it inside the users []
        //data in users, map users array 
        //create table component 
        //pass infor into the table componenet 
        //then render it all 
        
    }, [users])
    
    return (
        <div>
            <h1>I need you to say something!</h1>
        </div>
    )
};


// function Directory() {
//   return (
//     <div className="container">
//   <h2>Responsive Table</h2>
//   <p>The .table-responsive-sm className creates a responsive table which will scroll horizontally on screens that are less than 576px wide.</p>                                                                                      
//   <p>Resize the browser window to see the effect.</p>
//   <div className="table-responsive-sm">          
//   <table className="table table-bordered">
//     <thead>
//       <tr>
//         <th>#</th>
//         <th>Firstname</th>
//         <th>Lastname</th>
//         <th>Age</th>
//         <th>City</th>
//         <th>Country</th>
//         <th>Sex</th>
//         <th>Example</th>
//         <th>Example</th>
//         <th>Example</th>
//         <th>Example</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td>1</td>
//         <td>Anna</td>
//         <td>Pitt</td>
//         <td>35</td>
//         <td>New York</td>
//         <td>USA</td>
//         <td>Female</td>
//         <td>Yes</td>
//         <td>Yes</td>
//         <td>Yes</td>
//         <td>Yes</td>
//       </tr>
//     </tbody>
//   </table>
//   </div>
// </div>
//   );
// }

// export default Directory;

