import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db.js"
import "./itemlistcontainer.css"

const ProductListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  const fetchProducts = () => {
    const productsCollection = collection(db, "products");
    getDocs(productsCollection)
      .then((snapshot) => {
        const productsArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsArray);
      });
  };

  const fetchProductsByCategory = () => {
    const productsCollection = collection(db, "products");
    const categoryQuery = query(productsCollection, where("category", "==", categoryId));
    getDocs(categoryQuery)
      .then((snapshot) => {
        const filteredProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(filteredProducts);
      });
  };

  useEffect(() => {
    if (categoryId) {
      fetchProductsByCategory();
    } else {
      fetchProducts();
    }
  }, [categoryId]);

  return (
    <div className="product-list-container">
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ProductListContainer;