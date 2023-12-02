import React ,{useState} from "react";
import axios from "axios";

export function Edit(){
    const[updated,setUpdated]=useState({id:"",productName:"",price:"",oldPrice:"",category:"",isActive:"",description:""})
   
   
   
    const editProduct =() =>{
        console.log(updated.id,updated.productName,updated.price,updated.oldPrice,updated.category,updated.isActive,updated.description);
        axios.put(`http://localhost:3002/products/${updated.id}`,
        {id:updated.id,productName:updated.productName,price:updated.price,oldPrice:updated.oldPrice,category:updated.category,isActive:updated.isActive,description:updated.description})
    
    .then((response) =>{
        console.log(response);
    }).catch((e) =>{
        console.log(e);
    })
    window.location.reload()
    setTimeout(() =>{
        
    },500)
}
return(
    <>
   
    <div className="col-10 mx-3 text-center">
                            <input type="text" className="from-control" placeholder="Enter id" onChange={a => setUpdated({updated,id:a.target.value})}/> 
                            <br />
                            <input type="text" className="from-control" placeholder="Enter productName" onChange={a => setUpdated({updated,productName:a.target.value})}/> 
                            <br />
                            <input type="text" className="from-control" placeholder="Enter price" onChange={a => setUpdated({updated,price:a.target.value})}/> 
                            <br />
                            <input type="text" className="from-control" placeholder="Enter oldPrice" onChange={a => setUpdated({updated,oldPrice:a.target.value})}/> 
                            <br />
                            <input type="text" className="from-control" placeholder="Enter category" onChange={a => setUpdated({updated,category:a.target.value})}/> 
                            <br />
                            <input type="text" className="from-control" placeholder="Enter isActive" onChange={a => setUpdated({updated,isActive:a.target.value})}/> 
                            <br />
                            <input type="text" className="from-control" placeholder="Enter description" onChange={a => setUpdated({updated,description:a.target.value})}/> 
                             
                            
                             <div className="d-flex justify-content-around mt-3">
                                <button className="btn btn-dark" onClick={editProduct}>Edit</button>
        </div>
        </div>
        </>
)
}