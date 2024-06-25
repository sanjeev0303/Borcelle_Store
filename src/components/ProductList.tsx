"use client"
import { getProducts } from '@/lib/actions/action';
import { ProductType } from '@/lib/type';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const ProductList = () => {

    const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        // console.log("data: ", data);
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
   <>
   
   <div className='flex flex-col items-center gap-10 py-8 px-5'>
    <p className='text-heading1-bold'>Products</p>
    {
        !products || products.length === 0 ? (
            <p className='text-body-bold'>No products found</p>
        ) : (
            <div className='flex flex-wrap mx-auto gap-16'>
                {
                    products.map((product: ProductType)=>(
                        <ProductCard key={product._id} product={product}/>
                    ))
                }
            </div>
        )
    }
   </div>
   
   </>
  )
}

export default ProductList