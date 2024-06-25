import axios from "axios";
import { CollectionType, ProductType } from "./type";

export const getCollections = async <CollectionType>(): Promise<CollectionType[]> => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error("Error fetching collections:", error);
      throw error; // Re-throw the error after logging it
    }
  };

export const getProducts = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
        return response.json()
    } catch (error) {
        console.error("Error fetching collections:", error);
        throw error; 
    }
};

export const getProductDetails = async <ProductType>(productId: string): Promise<ProductType> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`);
        const data = await response.json()
        return data as ProductType
    } catch (error) {
        console.error("Error fetching productDetails:", error);
        throw error; 
    }
};