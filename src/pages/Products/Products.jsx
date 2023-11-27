import React from 'react'
import Header from '../../components/Header/Header'
import ProductCard from '../../components/ProductCard/ProductCard'
import "./Products.css"
import { useEffect } from 'react'
import axios from "axios";
import { useState } from 'react'

export default function Products() {
const [products, setProducts] = useState([])

  const fetchData = async ()=>{
    const url = "https://fakestoreapi.com/products"
    const dataFetched = await axios.get(url)
    console.log(dataFetched.data)
    setProducts(dataFetched.data)
  }

  useEffect(()=>{
    fetchData()
  },[])


  return (
    <div>
        <Header/>
        Products

        <div className='productContainer'>
          {products.map((product)=>(
            <div key={product.id}>
              <ProductCard title={product.title} description={product.description} price={product.price} image={product.image}/>
            </div>
          ))}
        </div>

    </div>
  )
}
