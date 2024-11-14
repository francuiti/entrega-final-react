import { useState } from "react"
import FormCheckout from "./FormCheckout"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore"
import db from "../../db/db.js"
import { Link } from "react-router-dom"
import validateForm from "../../utils/validateForm.js"
import { toast } from "react-toastify"

const OrderCheckout = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    emailAddress: ""
  });
  const [orderId, setOrderId] = useState(null);
  const { cartItems, calculateTotalPrice, clearCart } = useContext(CartContext);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitOrderForm = async (e) => {
    e.preventDefault();

    const orderDetails = {
      customer: { ...formData },
      items: [...cartItems],
      orderDate: Timestamp.fromDate(new Date()),
      totalAmount: calculateTotalPrice()
    };

    try {
      const validationResponse = await validateOrderForm(formData);
      if (validationResponse.status === "error") throw new Error(validationResponse.message);

      toast.success("Processing order...");
      processOrder(orderDetails);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const processOrder = (newOrder) => {
    const ordersCollectionRef = collection(db, "orders");
    addDoc(ordersCollectionRef, newOrder)
      .then((res) => setOrderId(res.id))
      .catch((err) => console.error(err))
      .finally(() => {
        updateProductStock();
      });
  };

  const updateProductStock = () => {
    cartItems.forEach(({ id, quantity, ...productData }) => {
      const productDocRef = doc(db, "products", id);
      setDoc(productDocRef, { ...productData, stock: productData.stock - quantity });
    });
    clearCart();
  };

  return (
    <div>
      {orderId === null ? (
        <FormCheckout
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmitForm={submitOrderForm}
        />
      ) : (
        <div>
          <h2>Your order was successfully placed! 🎉</h2>
          <p>Please save your tracking number: {orderId}</p>
          <Link to="/">Go back to home</Link>
        </div>
      )}
    </div>
  );
};

export default OrderCheckout;