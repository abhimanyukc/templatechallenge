// Hero.js
import React from "react";
import { FaFolder, FaStar } from "react-icons/fa";
import img1 from "../images/jacket3.jpg";
import img2 from "../images/jacket4.webp";
import img3 from "../images/jacket5.jpeg";
import img4 from "../images/jacket6.jpg";
import img5 from "../images/jacket2.webp";
import img6 from "../images/jacket.webp";

const Hero = ({ carts }) => {
  const mostPopularItems = [
    { id: 1, name: "Popular Item 1", rating: 4, price: 19.99, image: img1 },
    { id: 2, name: "Popular Item 2", rating: 5, price: 29.99, image: img2 },
    { id: 3, name: "Popular Item 3", rating: 3, price: 15.99, image: img4 },
    { id: 4, name: "Popular Item 4", rating: 4, price: 19.99, image: img6 },
  ];

  const folderIcons = [
    {
      id: 1,
      name: "Clothing",
      icon: <FaFolder />,
      subFolders: ["Hoodies", "T-shirts"],
    },
    { id: 2, name: "Music", icon: <FaFolder /> },
    { id: 3, name: "Posters", icon: <FaFolder /> },
  ];

  const productCards = [
    { id: 1, name: "Product 1", price: 39.99, image: img3 },
    { id: 2, name: "Product 2", price: 49.99, image: img1 },
    { id: 3, name: "Product 3", price: 29.99, image: img5 },
    { id: 4, name: "Product 4", price: 59.99, image: img6 },
    { id: 5, name: "Product 5", price: 69.99, image: img1 },
    { id: 6, name: "Product 6", price: 19.99, image: img2 },
   
  ];

  return (
    <div className="flex-row mx-auto md:flex max-w-screen-2xl ">
      <div className="flex flex-wrap justify-center md:justify-start">
        {productCards.map((product) => (
          <div
            key={product.id}
            className="w-full mb-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 "
          >
            <div className="max-w-md p-6 rounded-lg shadow-md ">
              <div className="mb-4 rounded-md ">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full mx-auto mb-2 "
                />
                <div className="bottom-0 left-0 right-0 p-8 ">
                <h3 className="text-lg font-semibold ">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
                <button className="px-4 py-2 mt-2 text-white rounded bg-slate-500 hover:bg-slate-800">
                  Add to Cart
                </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto lg:flex lg:flex-col lg:justify-between lg:mx-auto max-w-screen-2xl lg:w-1/4 lg:mt-0 md:p-auto ">
      <div className="flex flex-col items-center mb-8 md:mb-0">
    <h3 className="mb-4 mr-10 text-lg font-semibold">Most Popular</h3>
    <ul>
      {mostPopularItems.map((item) => (
        <li key={item.id} className="flex p-3 m-3 border-[1px] rounded-md">
          <div className="">
            <span className="mr-2">{item.name}</span>
            <div className="flex items-center justify-start">
              <FaStar className="text-yellow-500" />
              <span className="ml-1">stars</span>
            </div>
          </div>
          <img
            src={item.image}
            alt={item.name}
            className="object-cover w-10 h-full ml-8 "
          />
        </li>
            ))}
          </ul>
        </div>

        {/* Bottom Section - Categories */}
        <div className="mx-auto lg:mx-auto max-w-screen-2xl lg:w-1/4 sm:mb-auto">
          <h3 className="mb-4 text-lg font-semibold ">Categories</h3>
          <div className="flex flex-col items-center">
            {folderIcons.map((folder) => (
              <div key={folder.id} className="flex items-center mb-2">
                {folder.icon}
                <span className="ml-2">{folder.name}</span>
                {folder.subFolders && (
                  <ul className="ml-4">
                    {folder.subFolders.map((subFolder) => (
                      <li key={subFolder} className="flex items-center">
                        <FaFolder className="mr-1" />
                        <span>{subFolder}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
