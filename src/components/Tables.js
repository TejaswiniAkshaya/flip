import React, { useContext } from 'react'
import axios from 'axios';
import {useEffect,useState} from 'react';
import {store} from '../App'
export default function Tables() {
    const [products,setProducts]=useState([{}]);
   
    // useEffect(()=>{
    //     axios.get('http://localhost:3002/products')
    //     .then((res)=>setProducts(res.data))
    // },[])

    
    
    const fetchData=()=>{
        axios.get('http://localhost:3002/products')
        .then((res)=>setProducts(res.data))
    }
    const handleDelete=(id)=>{
        axios.delete(`http://localhost:3002/products/${id}`)
        .then((res)=>{
            alert('product deleted')
            fetchData()
        })
    }
    useEffect(()=>{
        fetchData()},0);
  return (
    <>
    <table className='table table-responsive table-bordered'>
        <thead>
            <tr>
                <th>Pid</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Brand</th>
                <th>thumbnail</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
    {
        products.map((element,index)=>{
            return(

            <tr>
                <td>{element.id}</td>
                <td>{element.ptitle}</td>
                <td>{element.pdes}</td>
                <td>{element.pprice}$</td>
                <td>{element.pbrand}</td>
                {/* <td><img src={element.thumbnail}  style={{width:"10rem",height:"8rem"}} className="card-img-top pl" alt="..."/></td> */}
               <td><img src={element.thumbnail}  style={{width:"10rem",height:"8rem"}} className="card-img-top pl" alt="..."/></td>
                            <td>
                            <button className='btn btn-danger'  onClick={()=>handleDelete(element.id)}>
                            <i id="actions1" i class="fa-solid fa-pen-to-square"></i>
                                 </button>
                            
                            <button className='btn btn-primary'><i id="actions2" class="fa-solid fa-trash-can"></i></button></td>
            </tr>
            )
        })
    }
        </tbody>
     </table>
    </>
  )
}