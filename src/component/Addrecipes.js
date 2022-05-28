import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Addrecipes = () => {

    var[title,settitle]=useState("")
    var[category,setcategory]=useState("")
    var[description,setdescription]=useState("")
    var[prepare,setprepare]=useState("")

    const newrecipes=()=>{
        const data={"title":title,"category":category,"description":description,"prepare":prepare}
        console.log(data)

        axios.post("http://localhost:4000/api/recipes",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status==="success")
                {
                    alert("succesfull")
                }
                else
                {
                    alert("failed")
                }

            }
        )
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
    <div className="row">
        <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                 <label for="" className="form label">Title</label>
                 <input onChange={(x)=>{settitle(x.target.value)}}type="text" className="form-control"/>
                </div>
                <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Category</label>
                    <select onChange={(x)=>{setcategory(x.target.value)}} name="" id="" className="form-control">
                        <option value="Non-veg">Non-Veg</option>
                        <option value="veg">Veg</option>
                    </select>
                </div>
                <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label className='form-label'>Description</label> 
                <textarea onChange={(x)=>{setdescription(x.target.value)}} className="form-control" id="" cols="30" rows="5"></textarea>
                    
                </div>
                <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label className='form-label'>Prepare By:</label> 
                <textarea onChange={(x)=>{setprepare(x.target.value)}} className="form-control" id="" cols="30" rows="5"></textarea>
                </div>
                <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={newrecipes} className="btn btn-info">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>
        
        </div>
  )
}

export default Addrecipes