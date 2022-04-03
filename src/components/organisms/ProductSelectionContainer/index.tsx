import React from "react";
import SelectionPanel from "../../molecules/SelectionPanel";
import ProductSearchPanel from "../../molecules/ProductSearchPanel";

const ProductSelectionContainer:React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-20">
      <SelectionPanel />
      <ProductSearchPanel />
    </div>
  );
};

export default ProductSelectionContainer;
