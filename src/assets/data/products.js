import ts001 from "../../assets/images/ts001.jpg";
import ts002 from "../../assets/images/ts002.jpg";

import sweater001 from "../../assets/images/sweater001.jpg";

import lSteeve001 from "../../assets/images/lSteeve001.jpg";

const products = [
  {
    id: "001",
    productName: "MEOW CITY Tee",
    imgUrl: ts001,
    category: "tee",
    price: "350.000",
    shortDesc: "",
    description: "áo thun tay ngắn",
    reviews: [
      {
        rating: 4.7,
        text: "này kia",
      },
    ],
  },
  {
    id: "002",
    productName: "HOLOGRAM Tee",
    imgUrl: ts002,
    category: "tee",
    price: "390.000",
    shortDesc: "",
    description: "áo thun ngắn tay",
    reviews: [
      {
        rating: 4.9,
        text: "này kia",
      },
    ],
  },
  {
    id: "003",
    productName: "BAPE x COKE",
    imgUrl: sweater001,
    category: "sweater",
    price: "390.000",
    shortDesc: "",
    description: "áo sweater tay dài",
    reviews: [
      {
        rating: 4.7,
        text: "này kia",
      },
    ],
  },
  {
    id: "004",
    productName: "THE CARL",
    imgUrl: lSteeve001,
    category: "polo",
    price: "390.000",
    shortDesc: "",
    description: "the signature",
    reviews: [
      {
        rating: 4.1,
        text: "này kia",
      },
    ],
  },
];

export default products;
