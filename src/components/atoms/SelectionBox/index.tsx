import React, { useContext } from "react";
import { FiPlus } from "react-icons/fi";
import { SiNotion, SiNginx, SiNintendo, SiNotist } from "react-icons/si";
import { AiOutlineClose } from "react-icons/ai";

import {ProductsContext} from "../../../context/productSelectionContext";

type iconOptions = {
    [key: string]: any
};

const icons:iconOptions = {
  Notion: <SiNotion />,
  NopenSpeed: <SiNginx />,
  Noimics: <SiNintendo />,
  NoyerBooks: <SiNotist />,
};

const SelectionBox:React.FC<{selectedItem:string}> = ({ selectedItem }) => {
  const { handleSelectProduct } = useContext(ProductsContext);
  return (
    <div className="w-32 h-32 shadow rounded flex justify-center items-center">
      {selectedItem ? (
        <div className="flex flex-col text-center justify-center">
          <span className="text-2xl flex justify-center mb-2">
            {icons[selectedItem]}
          </span>
          <p>{selectedItem}</p>
          <button
            className="text-xs flex items-center justify-center mt-1"
            onClick={(_) => handleSelectProduct(selectedItem)}
          >
            <AiOutlineClose className="text-red-700 font-bold" />
            Remove
          </button>
        </div>
      ) : (
        <span
          style={{ display: "inline-block" }}
          className={"rounded bg-slate-100 p-3 text-black"}
        >
          <FiPlus className="text-slate-600" />
        </span>
      )}
    </div>
  );
};

export default SelectionBox;
