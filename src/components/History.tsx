import React, { useState, useEffect } from 'react'
import { currencyFormat } from '../utils/currencyFormatter'
import { Link } from 'react-router-dom'
const History = () => {


     type historyProps = {
          id : number,
        dateTime : string,
        purchasedProducts : 
            {
              name : string,
              price : number,
              quantity : number,
              color : string,
              size : string | number
            }[],
        total : number
     }
     const [ historyList, setHistoryList ] = useState<Array<historyProps>>([])

     useEffect(() => {
          const data = localStorage.getItem('cart-history')
          if(data){
               setHistoryList(JSON.parse(data))
          }
     },[])


     console.log(historyList.length > 0 && historyList);
     
  return (

         <div className="overflow-hidden bg-white shadow sm:rounded-lg">
           <div className="px-4 py-5 sm:px-6 flex flex-row items-center justify-between">
               <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Purchase History</h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">Product details and Total.</p>
               </div>
           <Link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
               </svg>
           </Link>
           </div>
           <div className="border-b border-b-gray-200">
               {
                    historyList && historyList.length > 0 ?
                    historyList.map(({id, dateTime, purchasedProducts, total}) => (
                       <dl className='border border-gray-300 py-3' key={id}>
                         <div className=''>
                              <h3 className='text-sm font-medium text-gray-900 text-center'>
                                   {dateTime}
                              </h3>
                         </div>
                         <div className="bg-gray-50 px-4 py-5 flex flex-col">
                           <dt className="text-sm font-medium text-gray-500">Products</dt>
                           {
                              purchasedProducts.map((product, index) => (
                                   <div key={index} className="border p-3 w-full md:w-[50%]">
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Product name: <span className='text-gray-900 font-semibold'>{product.name}</span> </dd>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Price : <span className='text-gray-900 font-semibold'>{product.price}</span> </dd>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Color : <span className='text-gray-900 font-semibold'> {product.color}</span> </dd>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">size : <span className='text-gray-900 font-semibold'>{product.size}</span> </dd>
                                   </div>
                              ))
                           }
                         </div>
                         <div className="bg-white px-4 py-5 flex flex-row gap-5">
                           <dt className="text-sm font-medium text-gray-500">Total</dt>
                           <dd className="mt-1 text-sm font-bold tracking-wide text-gray-900 sm:col-span-2 sm:mt-0">{currencyFormat(total)}</dd>
                         </div>
                       </dl>
                    ))
                    :

                    <p>Loading...</p>
               }
           </div>
         </div>
       )
     }

export default History