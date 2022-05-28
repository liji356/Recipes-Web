import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const View = () => {
  var [foodlist,setlist]=useState([])
  axios.get("http://localhost:4000/api/viewall").then(
    (response)=>{
      console.log(response.data)
      setlist(response.data)
    }
  )
  
  
  return (
    <div>
      <Navbar/>
      


<div className="container">
    <div className="row">
        <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">

              {foodlist.map((value,key)=>{
                return <div className="col-col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                  <div class="card" >
       <img src={value.image} class="card-img-top" alt="..."/>
       <div class="card-body">
       <h5 class="card-title">{value.title} </h5>
      <p class="card-text">{value.category}</p>
      <p class="card-text">{value.description}</p>
      <p class="card-text">{value.prepare}</p>
    <a href="#" class="btn btn-primary">BUY</a>
  </div>
</div>
                  </div>
              })}
                
                  </div>
                 
                  </div>
                  </div>
                  </div>



    </div>
  )
}

export default View