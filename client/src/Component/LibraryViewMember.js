import React,{ useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";

export function LibraryViewMember(){

    const[data,setData]=useState([])
    useEffect(()=>{

        axios.get("http://localhost:8080/auth/getallmember")
        .then((res)=>{
            // console.log(res)
            setData(res.data.jData)
        })
    })

    function handledelete(email){
        var data={email:email}
    
        axios.post("http://localhost:8080/auth/deleteallmember",data)
        .then((res) => {
            if (res.data.responseMsg === "Error") {
                alert("Data Are Not Deleted")
            } else if (res.data.responseMsg === "Success"){
                alert("Deleted Successfully")
                // window.location.reload()
            }
        })

    }


    return(
        <>
    <body className="bg-viewuser mt-4 m-5">
                <h1 className="text-center m-3">View All Member Details</h1>
                <Link to='/LibraryHomePage' className='btn btn-primary '  >Back</Link>
                <CSVLink data={data}className="btn btn-success ms-3 m-2" >Download Sheets</CSVLink>
                <Link to='/LibraryAddMember' className='btn btn-danger '>Create +</Link>
        <table>
            <thead>
                <tr id="header">
                    <th>Member-ID</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>AGE</th>
                    <th>E-Mail</th>
                    <th>PhoneNumber</th>
                    <th>outstandingDebt</th>
                    <th>Action</th>
                    </tr>
            </thead>
                    <tbody>
                        {
                            data.map((value,index)=>(
                                <>                            
                                <tr>
                                <td>{value.memberId}</td>
                                <td>{value.fName}</td>
                                <td>{value.lName}</td>
                                <td>{value.age}</td>
                                <td>{value.email}</td>
                                <td>{value.phoneNumber}</td>
                                <td>{value.outstandingDebt}</td>
                                <td><Link to='' className='btn btn-danger' onClick={()=>{handledelete(value.email)}} >Delete</Link><Link to={`/LibraryUpdateMember/${value.memberId}`} className='btn btn-primary m-1' >Edit</Link></td>
                                

                            </tr>
                            </>
                            ))
                        }
                    </tbody>
        </table>
        
        </body>
        

        </>
    );
}