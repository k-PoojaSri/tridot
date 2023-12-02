import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export function Home(){

    const[products,setProducts]=useState([]);

    const[id,setId]=useState("");
    const[productName,setProductName]=useState("");
    const[price,setPrice]=useState("");
    const[oldPrice,setOldPrice]=useState("");
    const[category,setCategory]=useState("");
    const[isActive,setIsActive]=useState("");
    const[description,setDescription]=useState("");

   
  
    useEffect(()=>{
    loadData();
  },[]);

  //get 
  const loadData = async()=>{
    const response = await axios.get('http://localhost:3002/products');
    setProducts(response.data)
  }

  //Add
  const AddProduct=(a) =>{
    axios.post('http://localhost:3002/products',{id,productName,price,oldPrice,category,isActive,description})
    .then(() => {
        setId("");setProductName("");setPrice("");setOldPrice("");setCategory("");setIsActive("");setDescription("");
    })
    .catch((err) => {
        console.log(err);
    })
    window.location.reload()

    setTimeout(() =>{
        loadData();

    },550)
}
//delete
const deleteProduct = (id) =>{
    axios.delete(`http://localhost:3002/products/${id}`);

    setTimeout(() =>{
        loadData();

    },550)
}

    return(
        <>
        <div className=" m-3 bg-info p-5">
            <input type="text" className="form-control" name="id" placeholder="Enter Id" onChange={a =>setId(a.target.value)}/>
            <br />
            <input type="text" className="form-control" name="productName" placeholder="Enter Product Name" onChange={a =>setProductName(a.target.value)}/>
            <br />
            <input type="text" className="form-control" name="price" placeholder="Enter Price" onChange={a =>setPrice(a.target.value)}/>
            <br />
            <input type="text" className="form-control" name="OldPrice" placeholder="Enter Product OldPrice" onChange={a =>setOldPrice(a.target.value)}/>
            <br />

            <label for="Category">
              select the Category
            </label>
            <select name="Category" id="Category" onChange={a =>setCategory(a.target.value)}>
                <option value="Vegetables">Vegetables</option>
                <option value="Fruits & Nuts">Fruits & Nuts</option>
                <option value="Dairy & creams">Dairy & creams</option>
                <option value="Packages Food">Packages Food</option>
                <option value="Staples">Staples</option>
            </select>
            
            <br />
            <input type="checkbox" name="true"  onChange={a =>setIsActive(a.target.value)}/><label for="true"> Is Available</label><br />
            <input type="checkbox" name="false"  onChange={a =>setIsActive(a.target.value)}/><label for="false"> Is Not Available</label>
            <br />
            <input type="text" className="form-control" name="Description" placeholder="Enter Product Description" onChange={a =>setDescription(a.target.value)}/>
        
             <div className="p-2 d-flex justify-content-around">
                <button className=" btn btn-success" onClick={AddProduct}> Add</button>
             </div>
             {
                products.map(a =>(
                    <div className=" col-12 bg-light mx-auto p-2" key={"a.id,a.productName,a.price,a.oldPrice,a.category,a.isActive,a.description "}>
                        <div className="bg-primary col-8 mx-auto p-3"> 
                            <h6 className="text-center">
                                {"id : "+ a.id}, {"productName : "+a.productName}, {"  price : "+a.price}, {"  oldPrice : "+a.oldPrice}, {"  category : "+a.category}, {"  isActive : "+ a.isActive}, {"  description : "+a.description}
                            </h6>
                            <br />
                            
                                <Link className="btn btn-dark" to='/edit'> Edit</Link>
                                <button className="btn btn-danger" onClick={() => {deleteProduct(a.id)}}>Delete</button>
                             </div>  
                             </div>
                            
                 
                ))
             }
        </div>
    
    

        
           
        </>
    );
}