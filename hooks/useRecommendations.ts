   import { useState, useEffect } from 'react';
   import { Product, RecommendationResponse } from '../types/recommendations';

   export const useRecommendations = (
     userId?: string,
     currentProductId?: string,
     maxItems: number = 4
   ) => {
     const [recommendations, setRecommendations] = useState<Product[]>([]);
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState<string | null>(null);

     useEffect(() => {
       const fetchRecommendations = async () => {
         if (!userId && !currentProductId) return;
         
         setLoading(true);
         setError(null);
         
         try {
           // Simulate API call - replace with actual ShopFlow API
           const mockResponse: RecommendationResponse = {
             products: [
               {
                 id: '1',
                 name: 'Premium Wireless Headphones',
                 price: 199.99,
                 imageUrl: '/images/headphones.jpg',
                 rating: 4.8,
                 category: 'Electronics'
               }
             ],
             algorithm: 'hybrid',
             confidence: 0.87
           };
           
           setRecommendations(mockResponse.products);
         } catch (err) {
           setError('Failed to load recommendations');
         } finally {
           setLoading(false);
         }
       };

       fetchRecommendations();
     }, [userId, currentProductId, maxItems]);

     return { recommendations, loading, error };
   };


   


   


