// import bcrypt from "bcryptjs";

// const data = {
//   users: [
//     {
//       name: "Juan",
//       email: "admin@admin.com",
//       password: bcrypt.hashSync("1234", 8),
//       isAdmin: true,
//     },
//     {
//       name: "Carlos",
//       email: "guest@guest.com",
//       password: bcrypt.hashSync("1234", 8),
//       isAdmin: false,
//     },
//   ],
//   products: [
//     {
//       name: "Nike Slim Shirt",
//       category: "Shirts",
//       image: "/images/p1.jpg",
//       price: 120,
//       countInStock: 10,
//       brand: "Nike",
//       rating: 4.5,
//       numReviews: 10,
//       description: "high quality product",
//     },
//     {
//       name: "Adidas Fit Shirt",
//       category: "Shirts",
//       image: "/images/p2.jpg",
//       price: 100,
//       countInStock: 20,
//       brand: "Adidas",
//       rating: 4.0,
//       numReviews: 10,
//       description: "high quality product",
//     },
//     {
//       name: "Lacoste Free Shirt",
//       category: "Shirts",
//       image: "/images/p3.jpg",
//       price: 220,
//       countInStock: 0,
//       brand: "Lacoste",
//       rating: 4.8,
//       numReviews: 17,
//       description: "high quality product",
//     },
//     {
//       name: "Nike Slim Pant",
//       category: "Pants",
//       image: "/images/p4.jpg",
//       price: 78,
//       countInStock: 15,
//       brand: "Nike",
//       rating: 4.5,
//       numReviews: 14,
//       description: "high quality product",
//     },
//     {
//       name: "Puma Slim Pant",
//       category: "Pants",
//       image: "/images/p5.jpg",
//       price: 65,
//       countInStock: 5,
//       brand: "Puma",
//       rating: 4.5,
//       numReviews: 10,
//       description: "high quality product",
//     },
//     {
//       name: "Adidas Fit Pant",
//       category: "Pants",
//       image: "/images/p6.jpg",
//       price: 139,
//       countInStock: 12,
//       brand: "Adidas",
//       rating: 4.5,
//       numReviews: 15,
//       description: "high quality product",
//     },
//   ],
// };
// export default data;
// import axios from "axios";

// const data = async () => {
//   try {
//     const res = await axios.get(
//       "https://api.thesneakerdatabase.com/v1/sneakers?limit=20&page=20"
//     );
//     console.log("DB", res);
//   } catch (err) {
//     console.error(err);
//   }
//   return res;
// };
// export default data;