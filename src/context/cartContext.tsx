import React, { createContext, ReactNode, SetStateAction, useContext, useState } from "react";
import { Data } from "../data";
import { ProductDemi } from "../data";

export const CartContext = createContext({} as CartContext)



type CartContext = {
     // Id
     proudctId : number,
     setProudctId : React.Dispatch<SetStateAction<number>>,
     // Detail
     detail : {
          id : number,
          name : string,
          price : number,
          rating : {id : number, rate : number, count : number}
          description : string,
          category : string,
          image : string,
          imageAlt : string,
          colors : {id : number, name : string, class : string, image : string}[],
          sizes : {id : number, name : string  }[]
     },
     setDetail : React.Dispatch<SetStateAction<{
          id : number,
          name : string,
          price : number,
          description : string,
          rating : {id : number, rate : number, count : number}
          category : string,
          image : string,
          imageAlt : string,
          colors : {id : number, name : string, class : string, image : string}[],
          sizes : {id : number, name : string  }[]
     }>>,
     // Color
     selectedColor : any,
     setSelectedColor : React.Dispatch<SetStateAction<any>>,
     // Sizes
     selectedSize : any,
     setSelectedSize : React.Dispatch<SetStateAction<any>> ,
     // Image
     selectImage : any,
     setSelectImage : React.Dispatch<SetStateAction<any>>,
     // Quantity

     history : any,
     setHistory : React.Dispatch<SetStateAction<any>>,

     // Cart
     purchaseProduct : 
          {
               id : number,
               name : string,
               price : number,
               quantity : number,
               category : string,
               image : string,
               imageAlt : string,
               colors : {id : number, name : string, class : string, image : string},
               sizes : {id : number, name : string  }
          }[],
     setPurchaseProduct : React.Dispatch<SetStateAction<{
               id : number,
               name : string,
               quantity : number,
               price : number,
               category : string,
               image : string,
               imageAlt : string,
               colors : {id : number, name : string, class : string, image : string},
               sizes : {id : number, name : string  }
     }[]>>,

     addToCart : (id : number) => void,

     addQty : (id : number) => void,

     reduceQty : (id : number ) => void,

     removeProduct : (id : number ) => void,

     cartQty : () => number,

     shippingFee : number,

     tax : number

     getTotal : () => number,

}

type CartProviderProps = {
     children : ReactNode
}


export const CartProvider  = ({children}: CartProviderProps) => {

     const [ proudctId, setProudctId ] = useState<number>(8)

     interface detailProps{
          id : number,
          name : string,
          price : number,
          rating : {id : number, rate : number, count : number}  
          description : string,
          category : string,
          image : string,
          imageAlt : string,
          colors : {id : number, name : string, class : string, image : string}[],
          sizes : {id : number, name : string  }[]
     }
     // const [ detail, setDetail ] = useState<detailProps>(Object)
     const [ detail, setDetail ] = useState<detailProps>(ProductDemi)

     const [selectedColor, setSelectedColor] = useState<any>()  

     const [selectedSize, setSelectedSize] = useState<any>()
     
     const [ selectImage, setSelectImage ] = useState<any>()

     const [ history, setHistory ] = useState<any>([])

     type purchaseProps = {
          id : number,
          name : string,
          quantity : number,
          price : number,
          category : string,
          image : string,
          imageAlt : string,
          colors : {id : number, name : string, class : string, image : string},
          sizes : {id : number, name : string }
     }
     const [ purchaseProduct, setPurchaseProduct ] = useState<purchaseProps[]>([])

     const addToCart = (id : number) => {

          const foundData = Data.find((data) => data.id === id)
          
          // Check the product if exists in the database if exists grb that product id
          type IncrQtyProps = {
               check : any
          }
          const increaseQty = ({check } : IncrQtyProps) => {
               setPurchaseProduct(purchaseProduct.map((product) => product.id === check.id ? {...product, quantity : product.quantity + 1 } : product))
          }

          
          // Check the product if exists in the database if exists grb that product id
          if(foundData){

               // if so as below => increase quantity
               const checkSameColorSize = purchaseProduct.find((product) => product.colors.name == selectedColor.name && product.sizes.name === selectedSize.name)
               
               // if so as below => create new
               const checkDiffSizeSameColor = purchaseProduct.find((product) => product.colors.name == selectedColor.name && product.sizes.name !== selectedSize.name)
               
               // if so as below => create new
               const checkDiffColorSameSize = purchaseProduct.find((product) => product.sizes.name == selectedSize.name && product.colors.name !== selectedColor.name)

               if(checkSameColorSize){

                    const props = {check : checkSameColorSize}
                    increaseQty(props)

               }else if(checkDiffColorSameSize){

                    setPurchaseProduct([...purchaseProduct, {...foundData, id : Math.round(Math.random() * 100)  , colors : selectedColor, sizes : selectedSize, image : selectImage, quantity : 1 }])

               }else if(checkDiffSizeSameColor){

                    setPurchaseProduct([...purchaseProduct, {...foundData, id : Math.round(Math.random() * 100)  , colors : selectedColor, sizes : selectedSize, image : selectImage, quantity : 1 }])

               }else{
                    setPurchaseProduct([...purchaseProduct, {...foundData, id : Math.round(Math.random() * 100)  , colors : selectedColor, sizes : selectedSize, image : selectImage, quantity : 1 }])

               }

          }
     }

                    
     const addQty = (id : number) => {
          setPurchaseProduct(purchaseProduct.map((product) => product.id === id ? {...product, quantity : product.quantity >= 10 ? 10 : product.quantity + 1} : product))
     }

     const reduceQty = (id : number) => {
          setPurchaseProduct(product => {
               if(product.find(p => p.id === id)?.quantity === 1 ){
                    return product.filter((p) => p.id !== id)
               }else{
                    return product.map((p) => p.id === id ? {...p, quantity : p.quantity -1} : p)
               }
          })
     }

     const removeProduct = (id : number ) => {
          setPurchaseProduct(purchaseProduct.filter((product) => product.id !== id))
     }
     
     const cartQty = () => {
          const qty = purchaseProduct.reduce((qty, product) => product.quantity + qty, 0)
          return qty
          
     }

     const shippingFee = 50

     const tax = 0.14
     
     const getTotal = () => {

          const total = purchaseProduct.reduce((qty, product) =>  qty + product.quantity * product.price, 0)

          return purchaseProduct.length > 0 ? total > 1000 ? Number((total + tax).toFixed(2)) : Number((total + tax + shippingFee).toFixed(2)) : 0

     }


     return(
     <CartContext.Provider value={{
          proudctId,
          setProudctId,
          detail,
          setDetail,
          selectedColor,
          setSelectedColor,
          selectedSize,
          setSelectedSize,
          selectImage,
          setSelectImage,
          addToCart,
          addQty,
          removeProduct,
          reduceQty,
          cartQty,
          purchaseProduct,
          setPurchaseProduct,
          shippingFee,
          tax,
          getTotal,
          history,
          setHistory,
     }}>
          {children}
     </CartContext.Provider>
     )
}

