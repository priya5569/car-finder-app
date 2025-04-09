// File: pages/index.js
import { useState, useEffect } from "react";

const sampleCars = [
  {
    id: 1,
    name: "Honda Civic",
    brand: "Honda",
    fuel: "Petrol",
    seats: 5,
    price: 22000,
    image: "https://img.autocarpro.in/autocarpro/c0d182be-bf95-4b87-b7e3-c0641bf56077.jpg?w=750&h=490&q=75&c=1"
  },
  {
    id: 2,
    name: "Honda",
    brand: "Honda",
    fuel: "Petrol",
    seats: 5,
    price: 25000,
    image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Honda/City/9421/1739862184352/front-left-side-47.jpg"
  },
  {
    id: 3,
    name: "Honda",
    brand: "Honda",
    fuel: "Petrol",
    seats: 5,
    price: 28000,
    image: "https://spn-sta.spinny.com/blog/20230620200249/Honda-Elevate-1-jpg.webp?compress=true&quality=80&w=1140&dpr=2.6"
  },

  {
    id: 4,
    name: "Toyota Prius",
    brand: "Toyota",
    fuel: "Hybrid",
    seats: 5,
    price: 24000,
    image: "https://www.financialexpress.com/wp-content/uploads/2022/11/2023-toyota-prius-2-2.jpg"
  },
  {
    id: 5,
    name: "Toyota",
    brand: "Toyota",
    fuel: "Hybrid",
    seats: 5,
    price: 29000,
    image: "https://static3.toyotabharat.com/images/news/2022/nov-09/tkm-announces-its-foray-into-the-cng-segment-main-800x514.jpg"
  },

  {
    id: 6,
    name: "Tesla Model 3",
    brand: "Tesla",
    fuel: "Electric",
    seats: 5,
    price: 39900,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF-Tc3hAyj8i0KKAGEZRcyNYDbC9OkGcmdeg&s"
  },

  {
    id: 7,
    name: "Tesla Model 3",
    brand: "Tesla",
    fuel: "Electric",
    seats: 5,
    price: 39900,
    image: "https://blog.sothebysrealty.co.uk/hubfs/Tesla%E2%80%99s%20Most%20Expensive%20Cars-jpg.jpeg"
  },

  {
    id: 8,
    name: "Ford Mustang",
    brand: "Ford",
    fuel: "Petrol",
    seats: 4,
    price: 55000,
    image: "https://static.toiimg.com/thumb/msid-102895289,width-1280,height-720,resizemode-4/102895289.jpg"
  },

  {
    id: 9,
    name: "Ford Mustang",
    brand: "Ford",
    fuel: "Petrol",
    seats: 4,
    price: 55000,
    image: "https://i.insider.com/5e9a0cafdcd88c113f7c08b0?width=700"
  },
  {
    id: 10,
    name: "Audi",
    brand: "Audi",
    fuel: "Petrol",
    seats: 5,
    price: 42000,
    image: "https://images.hindustantimes.com/auto/img/2020/06/23/600x338/Screenshot_2020-06-23_at_1.23.11_PM_1592898801313_1592898807707.png"
  },

  {
    id: 11,
    name: "Audi",
    brand: "Audi",
    fuel: "Petrol",
    seats: 5,
    price: 42000,
    image: "https://media.zigcdn.com/media/content/2019/Sep/zw-audi-rs7-1.jpg"
  }

];

export default function Home() {
  const [cars, setCars] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [brandFilter, setBrandFilter] = useState("All");
  const [fuelFilter, setFuelFilter] = useState("All");
  const [priceFilter, setPriceFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCars(sampleCars);
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredCars = cars
    .filter(
      (car) =>
        (brandFilter === "All" || car.brand === brandFilter) &&
        (fuelFilter === "All" || car.fuel === fuelFilter) &&
        (priceFilter === "All" ||
          (priceFilter === "0-25000" && car.price <= 25000) ||
          (priceFilter === "25001-40000" && car.price > 25000 && car.price <= 40000) ||
          (priceFilter === "40001+" && car.price > 40000)) &&
        (car.name.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortOrder === "low") return a.price - b.price;
      if (sortOrder === "high") return b.price - a.price;
      return 0;
    });

  const brands = ["All", ...new Set(sampleCars.map((car) => car.brand))];
  const fuels = ["All", ...new Set(sampleCars.map((car) => car.fuel))];

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen text-gray-800 dark:text-white transition-all duration-700 ease-in-out">
        {/* Header */}
        <div className="p-6 flex justify-between items-center shadow-md bg-transparent dark:bg-transparent backdrop-blur-md">
          <div className="flex items-center gap-4">
            <img
              src="https://drive.google.com/uc?export=view&id=1-vboTltJjJFXSksheLaFlJYOvnX46UP0"
              alt="Car Finders Logo"
              className="w-12 h-12 rounded-full"
            />
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text animate-fade-in-up">Car Finders</h1>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white dark:bg-white dark:text-black shadow-md hover:scale-105 transition"
          >
            {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* Filters */}
        <div className="p-6 flex flex-wrap gap-4 justify-center bg-pink-50 dark:bg-gray-800">
          <input
            type="text"
            placeholder="Search cars..."
            className="px-4 py-2 rounded border bg-white dark:bg-gray-700 dark:text-white shadow transition-all duration-500 ease-in-out focus:ring-2 focus:ring-purple-400 focus:outline-none transform focus:scale-105 animate-pulse focus:animate-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select onChange={(e) => setBrandFilter(e.target.value)} className="px-4 py-2 rounded border bg-white dark:bg-gray-700 dark:text-white shadow">
            {brands.map((brand) => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
          <select onChange={(e) => setFuelFilter(e.target.value)} className="px-4 py-2 rounded border bg-white dark:bg-gray-700 dark:text-white shadow">
            {fuels.map((fuel) => (
              <option key={fuel} value={fuel}>{fuel}</option>
            ))}
          </select>
          <select onChange={(e) => setPriceFilter(e.target.value)} className="px-4 py-2 rounded border bg-white dark:bg-gray-700 dark:text-white shadow">
            <option value="All">All Prices</option>
            <option value="0-25000">Under $25,000</option>
            <option value="25001-40000">$25,001 - $40,000</option>
            <option value="40001+">Above $40,000</option>
          </select>
          <select onChange={(e) => setSortOrder(e.target.value)} className="px-4 py-2 rounded border bg-white dark:bg-gray-700 dark:text-white shadow">
            <option value="">Sort By</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden transition transform hover:scale-105 border dark:border-gray-700"
            >
              <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold text-purple-800 dark:text-pink-300 mb-1">{car.name}</h2>
                <p className="text-sm">🚘 Brand: {car.brand}</p>
                <p className="text-sm">⛽ Fuel: {car.fuel}</p>
                <p className="text-sm">🪑 Seats: {car.seats}</p>
                <p className="text-lg font-bold text-pink-600 dark:text-pink-400">${car.price.toLocaleString()}</p>
                <button
                  onClick={() => toggleWishlist(car.id)}
                  className={`mt-3 w-full px-4 py-2 rounded-full font-semibold transition ${
                    wishlist.includes(car.id)
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                  }`}
                >
                  {wishlist.includes(car.id) ? "❤️ Remove from Wishlist" : "🤍 Add to Wishlist"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

