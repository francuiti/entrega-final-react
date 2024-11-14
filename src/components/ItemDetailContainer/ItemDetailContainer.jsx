import { useState, useEffect } from "react"
import { doc, getDoc } from "firebase/firestore"
import db from "../../db/db.js"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail.jsx"

const ProductDetailContainer = () => {
  const [productData, setProductData] = useState(null)
  const { idProduct } = useParams()

  const fetchProductById = () => {
    const reference = doc(db, "products", idProduct)
    getDoc(reference)
      .then((docSnapshot) => {
        const retrievedProduct = { id: docSnapshot.id, ...docSnapshot.data() }
        setProductData(retrievedProduct)
      })
      .catch((error) => console.error("Error fetching product:", error))
  }

  useEffect(() => {
    fetchProductById()
  }, [idProduct])

  return (
    <ItemDetail product={productData} />
  )
}

export default ProductDetailContainer