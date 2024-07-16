
import Product1 from '../../../public/product-img/product1.png'
import Product2 from '../../../public/product-img/product2.png'
import Product3 from '../../../public/product-img/product3.png'
import Product4 from '../../../public/product-img/product4.png'
import Product5 from '../../../public/product-img/product5.png'
import Product6 from '../../../public/product-img/product6.png'
import Product7 from '../../../public/product-img/product7.png'
import Product8 from '../../../public/product-img/product8.png'



import { nanoid } from 'nanoid';

export const productData = [
    {
      name: "Calabrese Broccoli",
      id: nanoid(),
      img: Product1,
      star: "⭐️⭐️⭐️⭐️⭐️",
      price: "$13.00",
      price2: "$20.00",
      
    },
    {
      name: "Fresh Banana Fruites",
      id: nanoid(),
      img: Product2,
      star: "⭐️⭐️⭐️⭐️⭐️",
      price: "$14.00",
      price2: "$20.00",

    },
    {
      name: "White Nuts",
      id: nanoid(),
      img: Product3,
      star: "⭐️⭐️⭐️⭐️⭐️",
      price: "$15.00",
      price2: "$20.00",



    },
    {
      name: "Vegan Red Tomato",
      id: nanoid(),
      img: Product4,
      star: "⭐️⭐️⭐️⭐️⭐️",
      price: "$17.00",
      price2: "$20.00",


    },
    {
      name: "Mung Bean",
      id: nanoid(),
      img: Product5,
      star: "⭐️⭐️⭐️⭐️⭐️",
      price: "$11.00",
      price2: "$20.00",

    },
    {
      name: "Brown Hazelnut",
      id: nanoid(),
      img: Product6,
      star: "⭐️⭐️⭐️⭐️⭐️",
      price: "$12.00",
      price2: "$20.00",


    },
    {
      name: "Eggs",
      id: nanoid(),
      img: Product7,
      star: "⭐️⭐️⭐️⭐️⭐️",
      price: "$17.00",
      price2: "$20.00",


    },
    {
      name: "Zelco Suji Elaichi Rusk",
      id: nanoid(),
      img: Product8,
      star: "⭐️⭐️⭐️⭐️⭐️",
      price: "$15.00",
      price2: "$20.00",

    },

  ];
  import Organic1 from '../home/components/organic/organic-img/organic1.png'
  import Organic2 from '../home/components/organic/organic-img/organic2.png'
  import Organic3 from '../home/components/organic/organic-img/organic3.png'
  import Organic4 from '../home/components/organic/organic-img/organic4.png'


  export const organicData = [
    { 
      id: 1,
      vegeteble: "Vegetable",
      img: Organic1,
      name: "Mung Bean",
      star: "⭐️⭐️⭐️⭐️⭐️",
      price: "$11.00",
      price2: "$20.00"
    },
    { 
      id: 2,
      vegeteble: "Vegetable",
      img: Organic2,
      name: "Brown Hazelnut",
      star: "⭐️⭐️⭐️⭐️⭐️",
      price: "$11.00",
      price2: "$20.00"
    },
    { 
      id: nanoid(),
      vegeteble: "Vegetable",
      img: Organic3,
      name: "Onion",
      star: "⭐️⭐️⭐️⭐️⭐️",
      price: "$11.00",
      price2: "$20.00"
    },
    { 
      id: nanoid(),
      vegeteble: "Vegetable",
      img: Organic4,
      name: "Cabbage",
      star: "⭐️⭐️⭐️⭐️⭐️",
      price: "$11.00",
      price2: "$20.00"
    },
  ]

  import offer1 from '../about/components/offer/offer-img/offer1.jpg'
  import offer2 from '../about/components/offer/offer-img/offer2.png'
  import offer3 from '../about/components/offer/offer-img/offer3.jpg'
  import offer4 from '../about/components/offer/offer-img/offer4.png'

 export const offersData = [
  {
    id: nanoid(),
    img: offer1,
    name: "Spicy"
  },
  {
    id: nanoid(),
    img: offer2,
    name: "Nuts & Feesd"
  },
  {
    id: nanoid(),
    img: offer2,
    name: "Fruits"
  },
  {
    id: nanoid(),
    img: offer2,
    name: "Vegetable"
  },
 ]
