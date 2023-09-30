import React from "react";
import { Link } from "react-router-dom";
import Typewriter  from "typewriter-effect";

export function LibraryHomePage(){

    return(
        <>
        <div className="lib-home-page">

        <h1 className="topic text-white p-5">
                    <Typewriter options={{ strings: ['WELCOME TO LIBRARIAN DASHBORD'], autoStart: true, loop: true }} />
                </h1>
                <div className="d-flex justify-content-end me-5">
                <Link to='/'><button className="border-0 rounded bg-danger text-white p-2 ">LOGOUT</button></Link>

                </div>
                <div className="row justify-content-center m-2">
                    <div class="card col-lg-2 m-3 card-size bg-dark">
                        <img src="https://plus.unsplash.com/premium_photo-1663047308908-f6e112c17daf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" class="card-img-top h-50" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-center text-success">  STUDENT DASHBORD</h5>
                            <p class="card-text text-white text-center" >You can Add Students Details</p>
                          <center>  <Link to='/LibraryAddMember' class="btn btn-success m-1  w-75 fs-6">
                                Upload Students Details</Link>
                                <Link to='/LibraryViewMember' class="btn btn-danger  w-75 fs-6">
                                view Students Details</Link></center>
                        </div>
                    </div>
                    <div class="card col-lg-2 m-3 card-size bg-dark">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIMGK9QtqyGO_typ7pYJxd3O75s_ai1x5I73kHpUnY8zXf0srZHI62wJGlHxklsmVL6zg&usqp=CAU" class="card-img-top h-50" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-center text-success "> BOOK DASHBORD</h5>
                            <p class="card-text text-white text-center">You can Fill in the Details Based on the Book.</p>
                            <center> <Link to='/LibraryAddPage' class="btn btn-success ownerbuttongreen  justidy-content-center m-1 w-75 fs-6">
                            Upload Book Details</Link>
                            <Link to='/LibraryViewBook' class="btn btn-danger  w-75 fs-6">
                                view Book Details</Link></center>
                        </div>
                    </div>
                    <div class="card col-lg-2 m-3 card-size bg-dark">
                        <img src="https://plus.unsplash.com/premium_photo-1682146137633-3ad7802125ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" class="card-img-top h-50" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-center text-success ">ISSUE BOOK</h5>
                            <p class="card-text text-white text-center" text-center>You can Fill in the Issue Book.</p>
                            <center> <Link to='/LibraryIssuePage' class="btn btn-success ownerbuttongrey justidy-content-center w-75 fs-5">                       
                            Upload Issue Book </Link></center>
                        </div>
                    </div>
                    <div class="card col-lg-2 m-3 card-size bg-dark">
                        <img src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" class="card-img-top h-50" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-center text-danger"> View Transaction List</h5>
                            <p class="card-text text-white text-center" >You can view all the Transaction Details  .</p>
                            <center> <Link to='/LibraryTransactionList' class="btn btn-danger ownerbutton   justidy-content-center p-2 w-75 fs-5">
                           View Transaction List      </Link></center>
                        </div>
                    </div>
                  
                    
                    
                </div>

        </div>
        </>
    );
}