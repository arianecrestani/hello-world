import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Button from "./Button";

const App = () => {
    const [productsState, setProductsState] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((productsArray) => {
                const newProductsState = productsArray.map((product) => {
                    return {
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        image: product.image
                    };
                });
                setProductsState(newProductsState);
            });
    }, []);

    const hasProducts = productsState.length > 0;

    return (
        <div className="flex flex-col justify-center py-48 items-center text-xl">
            {hasProducts ? <SearchBar products={productsState} /> : "Loading"}
  
            <Button>helloooMybutton</Button>
            <Button>vemm2022</Button>
            <Button>presstest</Button>
        </div>
    );
};

export default App;
