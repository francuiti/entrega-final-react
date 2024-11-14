const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!dataForm.fullname.trim()) formErrors.fullname = "El nombre completo es obligatorio";
    if (!dataForm.phone.trim()) formErrors.phone = "El teléfono es obligatorio";
    else if (!/^[0-9]+$/.test(dataForm.phone)) formErrors.phone = "Solo se permiten números en el teléfono";
    if (!dataForm.email.trim()) formErrors.email = "El email es obligatorio";
    else if (!/\S+@\S+\.\S+/.test(dataForm.email)) formErrors.email = "El email no es válido";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleSubmitForm(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre completo</label>
      <input
        type="text"
        name="fullname"
        value={dataForm.fullname}
        onChange={handleChangeInput}
        autoFocus
      />
      {errors.fullname && <p className="error">{errors.fullname}</p>}

      <label>Teléfono</label>
      <input
        type="number"
        name="phone"
        value={dataForm.phone}
        onChange={handleChangeInput}
      />
      {errors.phone && <p className="error">{errors.phone}</p>}

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={dataForm.email}
        onChange={handleChangeInput}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <button type="submit">Enviar mi orden</button>
    </form>
  );
};

export default FormCheckout;