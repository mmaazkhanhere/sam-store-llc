import { updateCart, removeFromCart } from "@/store/cartSlice";
import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";

export default function CartItem({ data }) {
  //data is recieved from api
  const p = data.attributes; //the attributes of the product is saved in p variable
  const dispatch =
    useDispatch(); /*useDispatch hook of React-Redux library returns a reference to the Redux store's dispatch function, which allows
  components to dispatch actions to update store's state*/

  const updateCartItem = (e, key) => {
    //method to update cart items when quantity of the product is changed
    let payload = {
      key, //the value of key parameter that was passed into the function
      val:
        key === "quantity"
          ? parseInt(e.target.value)
          : e.target
              .value /*because the quantity of a product is expected to be a number, so the ParseInt
      method is used to convert a string to a number if necessary */,
      id: data.id, //this is the id property of data object
    };
    dispatch(updateCart(payload)); //dispatch function is used to send the object to a reducer to update the state of the cart
  };
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/*Image Starts */}
      <div className="aspect-square w-[50px] md:w-[150px]">
        <Image
          src={p.thumbnail.data.attributes.url} //src path is that of image from api
          alt={p.name} //name of the product as according to product being fetched
          width={150}
          height={150}
        />
      </div>
      {/*Image Ends */}
      {/*Product Detail Box Starts */}
      <div className="flex w-full flex-col">
        {/*Product Name and Price */}
        <div className="flex flex-col justify-between md:flex-row">
          <div className="flex font-playfair flex-col font-semibold text-black/[0.8] md:flex-row">
            {p.name}{" "}
            {/*Name of the Product, which is in flex with other elements in tablet and larger screen and flex col 
            in small screen */}
          </div>
          <div className="md:text-md block font-quickSand text-sm font-medium text-black/[0.5] md:hidden">
            {p.subtitle}{" "}
            {/*Short description of the product as of the product being fetched. It is hidden when in tablet
            screen and shown in smaller screen. */}
          </div>
          <div className="md:text-md mt-2 text-sm font-bold font-playfair text-black/[0.5]">
            $ {p.price} {/*Price of the product that is being fetched */}
          </div>
        </div>
        {/*Product Subtitles displayed when in large screen below the name */}
        <div className="md:text-md hidden font-medium font-quickSand text-black/[0.5] md:block">
          {p.subtitle}
        </div>
        {/*Quantity Selection */}
        <div className="mt-4 flex items-center justify-between">
          <div className="items-center md:text-md flex gap-2 text-sm text-black/[0.5] md:gap-10 ">
            <div className="flex items-center gap-1">
              {/*Makes the 'quantity' and the menu in flex */}
              {/*Quantity selectoin */}
              <div className="font-semibold font-quickSand">Quantity:</div>
              <select
                className="hover:text-black"
                onChange={(e) =>
                  updateCartItem(e, "quantity")
                } /*when value is changed, updateCart item function is called with the new qunatity as 'val' property of the payload object and updateCartItem
                function will be called to update the state of the shhopping cart*/
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((q, i) => {
                  /*the first portion (before .map) creates an array with 10 elements where each
                element is a number from 1 to 10. The length proerty specfies the length of array
                .map applies a function to each element of the array and returns a new arry with the same length as original array.*/
                  return (
                    <option key={i} value={q} selected={data.quantity === q}>
                      {" "}
                      {/*the function passed to map creates an html option element for each number in 
                    array. The key prop is set to the index of the element in the array. The 'value' prop is set to the number. The 'selected' prop is set to 'true'
                    if the 'data.quantity' variable is equal to the current number */}
                      {q}
                    </option>
                  );
                })}
              </select>{" "}
              {/*Selecting quantity of the product. It is a dropdown menu where the quantity of the product is selected */}
            </div>
          </div>
          {/*Quantity Selection ends */}
          {/*Delete Button */}
          <RiDeleteBin6Line
            className="cursor-pointer text-black/[0.5] hover:text-black text-[16px]"
            onClick={() =>
              dispatch(removeFromCart({ id: data.id }))
            } /*an arrow function dispatches an action to remove an item from the cart with id of that product*/
          />
        </div>
      </div>
    </div>
  );
}
