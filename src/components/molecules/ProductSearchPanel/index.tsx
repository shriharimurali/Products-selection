import React, { useContext } from "react";
import Title from "../../atoms/Title";
import Description from "../../atoms/Description";
import SearchBar from "../../atoms/SearchBar";
import Button from "../../atoms/Button";

import { content } from "../../../constants/content";

import {ProductsContext} from "../../../context/productSelectionContext";

const ProductSearchPanel:React.FC = () => {
  const { selectedProducts } = useContext(ProductsContext);
  return (
    <div>
      <div className="rounded mb-10 p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block">
        <p className="text-white font-bold text-xs">1 of 3</p>
      </div>
      <Title title={content.title} />
      <Description text={content.description} />
      <SearchBar />
      <Button disabled={selectedProducts.length ? false : true} />
    </div>
  );
};

export default ProductSearchPanel;
