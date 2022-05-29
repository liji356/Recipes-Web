import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () => {
const [data,setdata]=useState([{"category":"","description":"","prepare":""}])
var [title,settitle]=useState("")

const newsearch=()=>{
    const data={"title":title}
    console.log(data)
    axios.post("http://localhost:4000/api/search",data).then(
        (response)=>{
            console.log(response.data)
            setdata(response.data.data)
        }
    )
}
const deleteApi=(id)=>{
    const data={"_id":id}
    console.log(data)
}



  return (
    <div>
        <Navbar/>
        <div className="container">
    <div className="row">
        <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col-col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                 <label for="" className="form label">Title</label>
                 <input onChange={(x)=>{settitle(x.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={newsearch} className="btn btn-info">SEARCH</button>
                </div>
                </div>
                {data.map((value,key)=>{
                    return <div className="row g-3">
                    <div className="col-col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    category
                     <input  type="text" value={value.category} className="form-control"/>
                    </div>
                    <div className="col-col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    description
                     <input  type="text" value={value.description} className="form-control"/>
                    </div>
                    <div className="col-col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    prepare
                     <input  type="text" value={value.prepare} className="form-control"/>
                    </div>
                    <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={()=>{deleteApi(value._id)}}className="btn btn-danger">DELETE</button>
                </div>
                    
                    
                    
                    
                    </div>
                })}


                </div>
                </div>
                </div>





    </div>
  )
}

export default Search