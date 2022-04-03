import React, { createContext, useState } from "react";
import { xor } from "lodash";

// Import defined types from @types folder 
import { ProductContextType } from "../@types";

const contextDefaultValues: ProductContextType = {
  selectedProducts: [],
  handleSelectProduct: () => {},
};

export const ProductsContext = createContext<ProductContextType>(contextDefaultValues);


const ProductSelectionProvider:React.FC = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>(contextDefaultValues.selectedProducts);

  const handleSelectProduct = (itemToToggle:string) => {
    const prods = xor(selectedProducts, [itemToToggle]);
    setSelectedProducts(prods);
  };

  return (
    <ProductsContext.Provider value={{ selectedProducts, handleSelectProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};
export default ProductSelectionProvider;
