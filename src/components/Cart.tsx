// This component modified the original readymade component from tailwind ui component

import React, { Fragment, useEffect, SetStateAction, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

import { CartContext } from '../context/cartContext'
import { currencyFormat } from '../utils/currencyFormatter'

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]

type cartProps = {
  openCart :  boolean
  setOpenCart : React.Dispatch<SetStateAction<boolean>>
}

export default function Cart({openCart, setOpenCart} : cartProps) {

  const { purchaseProduct, addQty, reduceQty, removeProduct, getTotal, tax, shippingFee, history, setHistory } = useContext(CartContext)

  useEffect(() => {
    if(purchaseProduct.length > 0){
      localStorage.setItem('cart-history', JSON.stringify(history))

    }

  },[history])
  
  const handleSub = () => {

    if(purchaseProduct.length > 0){
      const saveData = {
        id : Math.round(Math.random() * 100),
        dateTime : (new Date().toLocaleString('en-us')).toString() ,
        purchasedProducts : 
          purchaseProduct.map(({id,name, price,quantity, colors, sizes}) => (
            {
              id : id,
              name : name,
              price : price,
              quantity : quantity,
              color : colors.name,
              size : sizes.name
            }
          ) )
        ,
        total : getTotal()
      }
      setHistory([...history, saveData])
    }

    

  }

  
  return (
    <Transition.Root show={openCart} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenCart}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900"><span className='text-sm ml-2 align-middle'>Purchase above 1k and receive free shipping</span></Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpenCart(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                          {/* <p className='text-md text-blue-400'>
                            purcahse above 1K receive free shipping!
                          </p> */}
                        <div className="flow-root">
                          <div role="list" className="-my-6 divide-y divide-gray-200">
                            {purchaseProduct.length > 0 ? purchaseProduct.map(({id, name, image, price, colors, sizes, quantity}) => (
                              <li key={id} className="flex py-6">
                                <div className="h-34 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={image}
                                    alt='stock-images'
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col gap-5">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        {name}
                                      </h3>
                                      <p className="ml-4">{currencyFormat(Number((quantity * price).toFixed(2)))}</p>
                                    </div>
                                    <div className='flex fex-row items-center justify-start gap-4'>
                                      <p className="mt-1 text-sm text-gray-900 font-semibold"><span className='text-gray-500 font-thin'>Color :</span> {colors.name}</p>
                                      <p className="mt-1 text-sm text-gray-900 font-semibold"><span className='text-gray-500 font-thin'>Size :</span> {sizes.name}</p>
                                      <p className="mt-1 text-sm text-gray-900 font-semibold"><span className='text-gray-500 font-thin'>Qty :</span> {quantity}</p>
                                    </div>
                                  </div>
                                    {
                                        quantity >= 10 ?

                                        <p className='text-xs text-red-400'>
                                          You can't purcahse a product more than 10 pcs per time
                                        </p>

                                        : 

                                        null

                                    }
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                  <div className='w-full flex flex-row items-center justify-between gap-3'>
                                    <div className='flex flex-row items-center justify-between w-[50%]'>
                                      <button className='w-[30px] h-[30px] bg-slate-400 text-white font-bold rounded-full hover:bg-slate-300 active:bg-slate-500' onClick={() => reduceQty(id)} >
                                        -
                                      </button>
                                      <p className='font-bold'>
                                        {quantity}
                                      </p>
                                      <button className='w-[30px] h-[30px] bg-slate-400 text-white font-bold rounded-full hover:bg-slate-300 active:bg-slate-500' onClick={() => addQty(id)}>
                                        +
                                      </button>
                                    </div>
                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium text-red-400 hover:text-red-500"
                                          onClick={() => removeProduct(id)}
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            )) : 
                            <p className='text-center'>
                              Empty Cart
                            </p>}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex flex-col justify-between text-base font-medium text-gray-900">
                        {
                            purchaseProduct.length > 0 ?
                            <div>
                              <div className='flex flex-row justify-between'>
                                <p className='text-gray-500'>Tax</p>
                                <p className='text-gray-500'>$ {tax}</p>
                              </div>
                             <div className='flex flex-row justify-between'>
                              <p className='text-gray-500'>Shipping</p>
                              <p className='text-gray-500'>{getTotal() > 1000 ? 'free shipping' : currencyFormat(shippingFee)}</p>
                             </div>
                            </div>
                           :
                           null
                        }
                       <div className='flex flex-row justify-between'>
                         <p className='text-gray-500'>Subtotal</p>
                          {
                            <p className='font-bold text-lg'>{currencyFormat(getTotal())}</p>
                          }
                       </div>
                      </div>
                      <div className="mt-6" >
                        <button
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          onClick={() => handleSub()}
                        >
                          Checkout
                        </button>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpenCart(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
