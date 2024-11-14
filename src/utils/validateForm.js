import { mixed, object, string } from "yup"

let userSchema = object({
  fullname: string().required("El campo nombre es requerido"),
  phone: string()
    .required("El campo telefono es requerido")
    .matches(/^[0-9]+$/, "El campo teléfono solo debe contener números")
    .min(10, "El teléfono debe tener al menos 10 dígitos")
    .max(15, "El teléfono no debe exceder los 15 dígitos"),
  email: string().email("El campo email debe tener un formato válido").required("El campo email es requerido")
});

const validateForm = async (dataForm) => {
  try {
    await userSchema.validate(dataForm, { abortEarly: false });
    return { status: "success" };
  } catch (error) {
    return { status: "error", message: error.errors }; 
  }
};

export default validateForm;