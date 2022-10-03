// This component modified the original readymade component from tailwind ui component

import React, { Fragment, useState, useEffect, useContext, SetStateAction } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'

import { CartContext } from '../context/cartContext'
import { Data } from '../data'


type DetailsProps = {
  openDetails : boolean,
  setOpenDetails : React.Dispatch<SetStateAction<boolean>>
}


export default function Details({openDetails, setOpenDetails} : DetailsProps) {

  const { proudctId, detail, setDetail, addToCart, selectedColor, setSelectedColor, selectedSize, setSelectedSize, selectImage, setSelectImage, cartQty } = useContext(CartContext)

  useEffect(() => {
    const findData = proudctId && Data.find((data) => data.id === proudctId)
    if(findData){
      setDetail({...findData})
      setSelectImage(findData.image)
      setSelectedColor(findData.colors[0])
      setSelectedSize(findData.sizes[0])
    }
    
    
  },[proudctId])


  type colorImageHandlerProps ={
    id : number,
    name : string,
    image : string,
    class : string
  }
  const colorImageHandler = (img : colorImageHandlerProps) => {
    setSelectImage(img.image)
    setSelectedColor(img)
  }

  function classNames(...classes : string[]) {
    return classes.filter(Boolean).join(' ')
  }
  
  
 
  return (
    <Transition.Root show={openDetails} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenDetails}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                    onClick={() => setOpenDetails(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="grid w-full grid-cols-2 items-start gap-y-10 gap-x-8 sm:grid-cols-12 lg:gap-x-10">

                    <div className='flex flex-col justify-between sm:col-span-4 md:gap-y-3 lg:col-span-5'>
                      <div className="aspect-w-3 aspect-h-5 overflow-hidden rounded-lg bg-gray-200 hover:cursor-zoom-in ">
                        <img src={selectImage == '' ? detail.colors[0].image : selectImage} alt={detail.imageAlt} className="object-cover object-center"/>
                      </div>
                      <div className='flex flex-row items-center justify-center'>
                        {
                          detail.colors !== undefined ? detail.colors.map((img) => (
                            <div className= {`${img.image == selectImage ? 'border-[2px] border-indigo-600 border-opacity-75' : 'scale-75'} overflow-hidden rounded-lg bg-gray-200`} key={img.id} onClick={() => colorImageHandler(img)}>
                              <img src={img.image} alt="option-imgaes" className="w-[50px] h-auto" />
                            </div>
                          ))  : null
                        }
                      </div>
                    </div>

                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{detail && detail.name}</h2>

                      <section aria-labelledby="information-heading" className="mt-2">
                        <div className='border-b border-b-gray-300 py-3'>
                          <h3 id="information-heading" className="font-medium text-gray-900 text-sm">
                            Product information
                          </h3>
                          <p className='text-gray-700'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque vel accusantium vitae quam veniam! Fugit dolorem illum eos, accusantium asperiores, rem vero molestias quis, cupiditate iste ab blanditiis? Adipisci, itaque!
                          </p>
                        </div>
                        <div className='border-b border-b-gray-300 py-3'>
                          <h3 className='font-medium text-gray-900 text-sm'>
                            Price
                          </h3>
                          <p className="text-2xl font-semibold text-gray-900">{detail.price} $</p>
                        </div>

                        {/* Reviews */}
                        <div className="mt-2 border-b border-b-gray-300 py-3">
                          <h4 className="sr-only">Reviews</h4>
                          <div className="flex items-center">
                            <div className="flex flex-col">
                              <h3 id="information-heading" className="font-medium text-gray-900 text-sm">
                                Product information
                              </h3>
                              <div className='flex flex-row items-center justify-center'>
                                {[0, 1, 2, 3, 4].map((rating, index) => (
                                  <StarIcon
                                    key={index}
                                    className={classNames(
                                      detail.rating && detail.rating.rate && detail.rating.rate > rating ? 'text-gray-900' : 'text-gray-200',
                                      'h-5 w-5 flex-shrink-0'
                                    )}
                                    aria-hidden="true"
                                  />
                                ))}
                                <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                  {detail.rating && detail.rating.rate && detail.rating.count} reviews
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section aria-labelledby="options-heading" className="mt-2">
                        <h3 id="options-heading" className="sr-only">
                          Product options
                        </h3>

                        <div>
                          {/* Colors */}
                          <div className='border-b border-b-gray-300 py-3'>
                            <h4 className="text-sm font-medium text-gray-900">Color</h4>

                            <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-1">
                              <RadioGroup.Label className="sr-only"> Choose a color </RadioGroup.Label>
                              <span className="flex items-center space-x-3">
                                {detail.colors ? detail.colors.map((color) => (
                                  <RadioGroup.Option
                                    key={color.name}
                                    value={color}
                                    onClick={() => colorImageHandler(color)}
                                    className={({ active, checked }) =>
                                      classNames(
                                        active && checked ? 'ring ring-offset-1' : '',
                                        !active && checked ? 'ring-2' : '',
                                        '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                                      )
                                    }
                                  >
                                    <RadioGroup.Label as="span" className="sr-only">
                                      {' '}
                                      {color.name}{' '}
                                    </RadioGroup.Label>
                                    <span
                                      aria-hidden="true"
                                      className={classNames(
                                        color.class,
                                        'h-8 w-8 border border-black border-opacity-10 rounded-full'
                                      )}
                                    />
                                  </RadioGroup.Option>
                                )) : null
                                }
                              </span>
                            </RadioGroup>
                          </div>

                          {/* Sizes */}
                          <div className="mt-2">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-medium text-gray-900">Size</h4>
                              <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                Size guide
                              </a>
                            </div>

                            <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                              <RadioGroup.Label className="sr-only"> Choose a size </RadioGroup.Label>
                              <div className="grid grid-cols-4 gap-4">
                                {detail.sizes !== undefined ? detail.sizes.map((size) => (
                                  <RadioGroup.Option
                                    key={size.name}
                                    value={size}
                                    className={({ active }) =>
                                      classNames(
                                        'bg-white shadow-sm text-gray-900 cursor-pointer',
                                        active ? 'ring-2 ring-indigo-500' : '',
                                        'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                                      )
                                    }
                                  >
                                    {({ active, checked }) => (
                                      <>
                                        <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                        {(
                                          <span
                                            className={classNames(
                                              active ? 'border' : 'border-2',
                                              checked ? 'border-indigo-500' : 'border-transparent',
                                              'pointer-events-none absolute -inset-px rounded-md'
                                            )}
                                            aria-hidden="true"
                                          />
                                        )}
                                      </>
                                    )}
                                  </RadioGroup.Option>
                                )) : null}
                              </div>
                            </RadioGroup>
                          </div>
                          {
                            cartQty() >= 10 ? 
                            <p className='my-2 text-xs text-red-400'>
                                You can't purcahse a product more than 10 pcs per time
                            </p>
                            :

                            null
                          }

                          <button
                            type="submit"
                            disabled={cartQty() >= 10}
                            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-gray-300"
                            onClick={() => addToCart(detail.id)}
                          >
                            Add to bag
                          </button>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
