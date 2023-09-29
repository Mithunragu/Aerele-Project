import React from "react";
import { Link } from "react-router-dom";

export function LibraryTransactionList(){

    return(
        <>
        
        {/* <body className="bg-viewuser mt-4 m-5">
                <h1 className="text-center m-3">View All Member Details</h1>
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
         */}
        
        
        </>
    );
}