import React, { SetStateAction, useContext } from 'react'
import {currencyFormat} from '../utils/currencyFormatter'
import { CartContext } from '../context/cartContext'

type CardProps = {
     id: number,
     name : string,
     image : string,
     category : string,
     price : number
     description : string,
     colors : {id : number, name : string, image : string, class : string}[],

     openDetails : boolean,

     setOpenDetails : React.Dispatch<SetStateAction<boolean>>
}



const Card = ({id, name, image, category, price, setOpenDetails} : CardProps, ) => {

     const {setProudctId }  = useContext(CartContext)

    const detailhandler = (id : number) => {
     setOpenDetails(true)
     setProudctId(id)
}


  return (
     <div key={id} className="group relative pb-3 flex flex-col h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
          <div className="min-h-90 aspect-w-2 aspect-h-3 w-full overflow-hidden rounded-t-md bg-gray-200 group-hover:opacity-75 lg:aspect-w-2 lg:aspect-h-3 lg:h-90">
               <img
             src={image}
             alt="stock-image"
             className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
          </div>
          
          <div className="mt-4 px-3 py-3 flex flex-row justify-between h-[100px]">
               <div>
                    <h3 className="text-sm text-gray-700 h-[50px]">
                         {name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{category}</p>
               </div>
               <div>
                    <p className="text-sm font-medium text-gray-900">{currencyFormat(price)}</p>
               </div>
          </div>

          <div className='mx-auto w-[90px] md:w-[70%] bg-blue-500 text-center text-white font-semibold tracking-wide text-xs md:text-md px-3 py-2 rounded-lg'>
               <button onClick={() => detailhandler(id)}>
                    Add to cart
               </button>
          </div>
     </div>
  )
}

export default Card