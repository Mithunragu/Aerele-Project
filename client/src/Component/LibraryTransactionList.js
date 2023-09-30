import React,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import axios from "axios";
export function LibraryTransactionList(){

        
    const[data,setData]=useState([])
    useEffect(()=>{

        axios.get("http://localhost:8080/auth/getalltransactionList")
        .then((res)=>{
            setData(res.data.jData)
        })
    })

    function handledelete(tId){
        var data={tId:tId}
    
        axios.post("http://localhost:8080/auth/deletealltransaction",data)
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
        
        <body className="bg-viewuser ">
                <h1 className="text-center  p-4">View All Transaction Details</h1>
                <Link to='/LibraryHomePage' className='btn btn-primary '  >Back</Link>
                <CSVLink data={data}className="btn btn-success ms-3 m-2" >Download Sheets</CSVLink>
        <table>
            <thead>
                <tr id="header">
                    <th>Transaction-ID</th>
                    <th>Book-ID</th>
                    <th>Member-ID</th>
                    <th>Transaction-Date</th>
                    <th>Due-Day</th>
                    <th>outstandingDebt</th>
                    <th>Fine-Amount</th>
                    <th>Status</th>
                    <th>Due-Date</th>
                    <th>Return-Date</th>
                    <th>Action</th>

                    </tr>
            </thead>
                    <tbody>
                        {
                            data.map((value,index)=>(
                                <>                            
                                <tr>
                                <td>{value.tId}</td>
                                <td>{value.bookId}</td>
                                <td>{value.memberId}</td>
                                <td>{value.transDate}</td>
                                <td>{value.dueDay}</td>
                                <td>{value.outstandingDebt}</td>
                                <td>{value.fineAmount}</td>
                                <td>{value.status}</td>
                                <td>{value.dueDate}</td>
                                <td>{value.returnDate}</td>
                                <td><Link to='' className='btn btn-danger' onClick={()=>{handledelete(value.tId)}} >Delete</Link></td>
                                

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