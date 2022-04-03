import React, { useState, useContext, useRef, useEffect } from "react";
import { SiNotion, SiNginx, SiNintendo, SiNotist } from "react-icons/si";
import { products } from "../../../constants/products";

import {ProductsContext} from "../../../context/productSelectionContext";
import SearchIcon from "./searchIcon";

type iconOptions = {
    [key: string]: any
};

const icons:iconOptions = {
  Notion: <SiNotion />,
  NopenSpeed: <SiNginx />,
  Noimics: <SiNintendo />,
  NoyerBooks: <SiNotist />,
};

const SearchBar:React.FC = () => {
  const { selectedProducts, handleSelectProduct } = useContext(ProductsContext);
  const [focus, setFocus] = useState(false);
  const [searchResults, setSearchResults] = useState(products);

  const box = useRef<HTMLUListElement>(null);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      const { current } = box;
      if (current && !current.contains(e.target as Node)) {
        setFocus(false);
      }
    }

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [box]);

  const search = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFocus(true);
    if (!e.target.value) {
      setSearchResults(products);
      setFocus(false);
    } else {
      const filtered = products.filter((pro) =>
        pro.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchResults(filtered);
    }
  };

  return (
    <div className="flex rounded relative">
      <SearchIcon />
      <input
        type="search"
        className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-slate-100 bg-clip-padding transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-700 focus:border-solid focus:border focus:outline-none pl-10 rounded py-3 text-xs"
        placeholder="Search for any software"
        onChange={search}
      />

      {focus && (
        <div className="absolute top-16 bg-white w-full rounded shadow-md p-2 z-10">
          <ul ref={box}>
            {searchResults.length ? (
              searchResults.map((product) => (
                <li
                  className={`mt-2 text-xs font-semibold rounded py-2 px-4 cursor-pointer flex items-center flex ${
                    selectedProducts.includes(product.name)
                      ? "bg-blue-700 text-white"
                      : "text-black"
                  }`}
                  key={product.id}
                  onClick={(_) => {
                    handleSelectProduct(product.name);
                    setFocus(false);
                  }}
                >
                  <span className="mr-2 text-xl">{icons[product.name]}</span>
                  {product.name}
                </li>
              ))
            ) : (
              <li
                className={
                  "text-xs font-semibold rounded py-2 px-1 cursor-pointer flex text-center flex text-black"
                }
              >
                No Products.
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
