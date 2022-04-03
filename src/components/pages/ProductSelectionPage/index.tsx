import React from "react";
import ProductSelectionContainer from "../../organisms/ProductSelectionContainer";

const ProductSelection:React.FC = () => {
  return (
    <div className="w-3/5 mx-auto h-screen items-center flex">
      <button className="absolute top-10 right-10 underline text-sm text-gray-500">
        Exit Setup
      </button>
      <ProductSelectionContainer />
    </div>
  );
};

export default ProductSelection;
