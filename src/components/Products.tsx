import React from 'react'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Data } from '../data'
import Card from './Card'
import Details from './Details'
import Cart from './Cart'
import CartBtn from './CartBtn'

const Products = () => {

  const [ products, setProducts ] = useState(Data)

  const [ openDetails, setOpenDetails ] = useState<boolean>(false)

  const [ openCart, setOpenCart ] = useState<boolean>(false)


  return (
<div className="min-h-screen bg-gradient-to-tr from-gray-400 via-gray-500 to-gray-600 px-3 py-10 z-10">
      <div className="bg-white bg-opacity-40 p-10 mx-auto rounded-3xl shadow-xl relative">
        <CartBtn openCart={openCart} setOpenCart={setOpenCart}/>
        <div className='absolute top-10 right-20 cursor-pointer z-10 mr-5'>
          <Link to="/history">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
               </svg>
          </Link>
        </div>
        <Details openDetails={openDetails} setOpenDetails={setOpenDetails}/>
        <Cart openCart={openCart} setOpenCart={setOpenCart}/>
        <h1 className="text-xl font-thin tracking-wider">
          Casual
        </h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-4 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-4 px-5 pt-10">
          {
            products && products.map(product => (
              <Card {...product} key={product.id} openDetails={openDetails} setOpenDetails={setOpenDetails}/>
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default Products