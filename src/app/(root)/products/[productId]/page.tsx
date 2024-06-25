'use client'

import Gallery from '@/components/Gallery';
import ProductCard from '@/components/ProductCard';
import ProductInfo from '@/components/ProductInfo';
import { getProductDetails } from '@/lib/actions/action';
import { ProductType } from '@/lib/type';
import React from 'react'

const ProductDetails = async ({params}: {params: { productId: string }}) => {

    const productDetails: ProductType = await getProductDetails(params.productId);

    // console.log("product Details: ", productDetails.media);

    return (
        <>
        <div className="flex justify-center items-start gap-16 py-10 px-5 max-md:flex-col max-md:items-center">
           <Gallery productMedia={productDetails.media} />
          <ProductInfo productInfo={productDetails} />  
        </div>

        <div className="flex flex-col items-center px-10 py-5 max-md:px-3">
          <p className="text-heading3-bold">Related Products</p>
          <div className="flex flex-wrap gap-16 mx-auto mt-8">
            
              {/* <ProductCard key={product._id} product={product} /> */}
      
          </div>
        </div>
        </>
    )
}

export default ProductDetails