import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore"

const products = [
  {
    id: "Cln001",
    name: "Desinfectante Multiuso",
    description: "Poderoso desinfectante multiuso, ideal para limpiar y eliminar el 99.9% de bacterias en superficies. Perfecto para cocinas, baños y áreas de uso frecuente.",
    price: 350,
    stock: 15,
    image: "/img/desinfectante.jpg",
    category: "limpieza"
  },
  {
    id: "Cln002",
    name: "Detergente Líquido Concentrado",
    description: "Detergente líquido concentrado con fórmula avanzada para remover grasa y residuos difíciles en vajillas, utensilios de cocina y más.",
    price: 150,
    stock: 20,
    image: "/img/detergente.jpg",
    category: "limpieza"
  },
  {
    id: "Cln003",
    name: "Limpiador de Vidrios",
    description: "Limpiador de vidrios que deja una capa antiempañante y proporciona un brillo sin residuos en ventanas, espejos y otras superficies de vidrio.",
    price: 250,
    stock: 10,
    image: "/img/limpiador-vidrios.jpg",
    category: "limpieza"
  },
  {
    id: "Cln004",
    name: "Limpiador para Pisos",
    description: "Limpiador líquido para pisos, seguro y efectivo en cualquier tipo de superficie, dejando un fresco aroma a lavanda.",
    price: 400,
    stock: 8,
    image: "/img/limpiador-pisos.jpg",
    category: "limpieza"
  },
  {
    id: "Cln005",
    name: "Desengrasante Potente",
    description: "Desengrasante potente para uso en cocinas y áreas industriales. Remueve grasas adheridas y residuos difíciles de manera rápida.",
    price: 300,
    stock: 12,
    image: "/img/desengrasante.jpg",
    category: "limpieza"
  },
  {
    id: "Cln006",
    name: "Jabón en Polvo para Ropa",
    description: "Jabón en polvo para ropa, con agentes quitamanchas que aseguran limpieza profunda y un aroma duradero en tus prendas.",
    price: 200,
    stock: 18,
    image: "/img/jabon-polvo.jpg",
    category: "limpieza"
  }
];
