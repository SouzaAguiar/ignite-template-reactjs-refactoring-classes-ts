export interface AddFood {
  image: string;
  name: string;
  price: number;
  description: string;
}

export type FoodItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
};
