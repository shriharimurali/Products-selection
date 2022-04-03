import React, { useContext } from "react";

import {ProductsContext} from "../../../context/productSelectionContext";

import SelectionBox from "../../atoms/SelectionBox";

import { NUMBER_OF_SELECTION_BOXES } from "../../../constants/config";

const SelectionPanel:React.FC = () => {
  const { selectedProducts } = useContext(ProductsContext);
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center items-center grid grid-cols-2 gap-8 max-w-fit mx-auto">
        {[...Array(NUMBER_OF_SELECTION_BOXES)].map((_, idx) => (
          <SelectionBox
            key={Math.random()}
            selectedItem={selectedProducts[idx]}
          />
        ))}
      </div>
      {selectedProducts.length ? (
        <p className="text-center mt-5 text-sm">
          {selectedProducts.length > 1
            ? `${selectedProducts.length} Products added`
            : `${selectedProducts.length} Product added`}
          .
        </p>
      ) : null}
    </div>
  );
};

export default SelectionPanel;
