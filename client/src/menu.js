import React from "react";
import { Link } from "react-router-dom";
export function Menu(){

return(

<>
<nav class="navbar navbar-expand-lg fixed-top  ">
  <div class="container-fluid mainNav">
    {/* <Link class="navbar-brand text-white fs-3" to="/"><b>Library Management System</b></Link> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto  mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active text-white fs-3" to="/login"><b>Librarian</b></Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</>




);




}
