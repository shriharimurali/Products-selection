import React from "react";
import ProductSelectionProvider from "./context/productSelectionContext";
import ProductSelection from "./components/pages/ProductSelectionPage";

function App() {
  return (
    <ProductSelectionProvider>
      <ProductSelection />
    </ProductSelectionProvider>
  );
}

export default App;
