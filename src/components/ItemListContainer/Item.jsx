import { Link } from "react-router-dom"

const ProductItem = ({ product }) => {

  return (
    <div className="product-item">
      <img src={product.image} className="product-img" alt="Product Image" width={100} />
      <p className="product-name">{product.name}</p>
      <p className="product-price">${product.price}</p>
      <Link to={`/detail/${product.id}`} className="product-detail-button"> View Details </Link>
    </div>
  )
}
export default ProductItem