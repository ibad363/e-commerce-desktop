"use client"

import { useCart } from "../context/CartContext"

const AddToCart = ({product}: {product: any}) => {
    const {cartItems,addToCart,updateQuantity} = useCart()
    
    // Find current item in cart
    const currentItem = cartItems.find((item)=> item._id === product._id)
    // find current Quantity of current item
    const currentQuantity = currentItem ? currentItem.quantity : 0

    const handleAddToCart = () => {
        addToCart({
          _id: product._id,
          productTitle: product.productTitle,
          price: product.price,
          image: product.imageUrl,
          quantity: 1,
          stockLevel:product.stockLevel 
        });
    }

  return (
    <div className='flex flex-col sm:flex-row flex-wrap items-center md:items-start gap-4 mt-[32px]'>
        <div className='w-[123px] rounded-[10px] border border-black flex justify-between overflow-hidden'>
            <button 
            className='w-[40px] flex items-center justify-center hover:text-white hover:bg-black transition-all duration-300 py-4'
            onClick={()=> updateQuantity(product._id,Math.max(0,currentQuantity-1))}
            >-</button>
            <p className='text-xl font-medium w-[80px] flex items-center justify-center '>{currentQuantity}</p>
            <button className='w-[40px] flex items-center justify-center hover:text-white hover:bg-black transition-all duration-300 py-4'
            onClick={()=>{
                if(currentQuantity >= 1){
                    updateQuantity(product._id, currentQuantity +1)
                }else{
                    handleAddToCart()
                }
            }}
            >+</button>
        </div>

        <div className='flex justify-center'>
            <button className='border-[1px] border-black px-12 py-4 rounded-[10px] flex items-center justify-center hover:text-white hover:bg-black transition-all duration-300'
            onClick={handleAddToCart}
            >Add To Cart</button>
        </div>
    </div>
  )
}

export default AddToCart