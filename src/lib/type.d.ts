// Define and export the CollectionType
export type CollectionType = {
    _id: string;
    title: string;
    products: number;
    image: string;
  };
  
  // Define and export the ProductType
  export type ProductType = {
    _id: string;
    title: string;
    description: string;
    media: string[];
    category: string;
    collections: string[];
    tags: string[];
    price: number;
    cost: number;
    sizes: string[];
    colors: string[];
    createdAt: string;
    updatedAt: string;
  };
  
  // Define and export the UserType
  export type UserType = {
    clerkId: string;
    wishlist: string[];
    createdAt: string;
    updatedAt: string;
  };
  
  // Define and export the OrderType
  export type OrderType = {
    shippingAddress: Record<string, any>;
    _id: string;
    customerClerkId: string;
    products: OrderItemType[];
    shippingRate: string;
    totalAmount: number;
  };
  
  // Define and export the OrderItemType
  export type OrderItemType = {
    product: ProductType;
    color: string;
    size: string;
    quantity: number;
    _id: string;
  };