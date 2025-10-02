   export interface Product {
     id: string;
     name: string;
     price: number;
     imageUrl: string;
     rating: number;
     category: string;
   }

   export interface RecommendationResponse {
     products: Product[];
     algorithm: 'collaborative' | 'content-based' | 'hybrid';
     confidence: number;
   }

   export interface RecommendationWidgetProps {
     userId?: string;
     currentProductId?: string;
     maxItems?: number;
     showPrices?: boolean;
     onProductClick?: (product: Product) => void;
   }
