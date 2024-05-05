import React, { useState } from "react";
const CartContainer = ({ data }) => {
  const [state, setState] = useState([]);
  const [additem, setAdditem] = useState(1);

  const increment = () => {
    if (additem < 10) {
      setAdditem(additem + 1);
    }
  };

  const decrement = () => {
    if (additem > 1) {
      setAdditem(additem - 1);
    }
  };

  const data1 = data[0];
  let array = [];
  for (let data2 in data1) {
    array.push(data1[data2]);
  }

  const updateItem = (sneker) => {
    setState([...state, sneker]);
  };
  return (
    <div className="flex px-24">
      <div className="flex gap-3 w-[60%] flex-wrap py-11 px-8 ">
        {array.slice(1, 13).map((sneker, id) => {
          return (
            <div
              className="shadow p-5 w-56 rounded-xl flex flex-col justify-between"
              key={id}
            >
              <img src={sneker.imageURL} alt="" className="w-52" />
              <div>
                <h2 className="pt-3">{sneker.name}</h2>
                <p>{sneker.price}$</p>
                <button
                  className="bg-zinc-800 py-2 px-8 mt-3 rounded-xl text-white"
                  onClick={() => updateItem(sneker)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" bg-[#F6F6F6] w-[40%] mt-14 rounded-xl shadow-xl p-5  items-center">
        <h3 className="font-bold text-2xl">Cart</h3>
        {state.map((item, i) => {
          return (
            <div className="flex mt-3 justify-between items-center" key={i}>
              <img src={item.imageURL} alt="" className="w-24" />
              <div className="w-48 text-wrap h-full">
                <p className=" ">{item.name}</p>
                <p className="">${item.price}</p>
              </div>
              <div className="flex gap-2 items-center justify-between">
                <button
                  className="px-3 py-2 bg-green-400 text-white rounded-md text-xs "
                  onClick={() => increment()}
                >
                  +
                </button>
                <p>{additem}</p>
                <button
                  className="px-3 py-2 bg-red-400 text-white rounded-md text-xs "
                  onClick={() => decrement()}
                >
                  -
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartContainer;
