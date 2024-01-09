import { useState } from "react";
import store from "../../assets/icons/store.png";
import arrowDown from "../../assets/icons/arrow-down.svg";
import home from "../../assets/icons/home.svg";
import order from "../../assets/icons/order.svg";
import products from "../../assets/icons/products.svg";
import delivery from "../../assets/icons/delivery.svg";
import markering from "../../assets/icons/marketing.svg";
import analytics from "../../assets/icons/analytics.svg";
import payments from "../../assets/icons/payments.svg";
import tools from "../../assets/icons/tools.svg";
import discounts from "../../assets/icons/discounts.svg";
import audience from "../../assets/icons/audience.svg";
import appearance from "../../assets/icons/appearance.svg";
import plugins from "../../assets/icons/plugins.svg";
import wallet from "../../assets/icons/wallet.svg";

const menuItems = [
  {
    name: "Home",
    icon: home,
  },
  {
    name: "Orders",
    icon: order,
  },
  {
    name: "Products",
    icon: products,
  },
  {
    name: "Delivery",
    icon: delivery,
  },
  {
    name: "Marketing",
    icon: markering,
  },
  {
    name: "Analytics",
    icon: analytics,
  },
  {
    name: "Payments",
    icon: payments,
  },
  {
    name: "Tools",
    icon: tools,
  },
  {
    name: "Discounts",
    icon: discounts,
  },
  {
    name: "Audience",
    icon: audience,
  },
  {
    name: "Appearance",
    icon: appearance,
  },
  {
    name: "Plugins",
    icon: plugins,
  },
];

const SideBar = () => {
  const [active, setActive] = useState("Payments");

  return (
    <div className="w-[224px] h-screen flex flex-col justify-between text-white bg-secondary px-2.5 py-4 sticky">
      {/* Header */}
      <div className="flex flex-col gap-6">
        <div className="flex justify-between px-1">
          <div className="flex gap-3">
            <img className="rounded-md" src={store} alt="store_img" />
            <div>
              <h1 className="text-[15px] font-semibold">Nishyan</h1>
              <a
                className="text-[13px] underline underline-offset-4 opacity-80"
                href="#"
              >
                Visit store
              </a>
            </div>
          </div>

          <button>
            <img src={arrowDown} alt="dropdown" />
          </button>
        </div>

        {/* Menu Itemd */}
        <div>
          <ul className="w-full flex flex-col">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  className={`w-full flex flex-row items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-700 opacity-80 hover:opacity-100 ${
                    item.name === active && "bg-gray-600 opacity-100"
                  }`}
                  onClick={() => setActive(item.name)}
                >
                  <img src={item.icon} alt={item.name} />
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Credits */}
      <button className=" flex items-center gap-2 px-1.5 py-3 bg-[#353C53] rounded-md">
        <div className=" p-1.5 bg-slate-500 rounded-md">
          <img src={wallet} alt="wallet" />
        </div>
        <div>
          <p className="opacity-80">Available credits</p>
          <p className="font-semibold text-left">222.10</p>
        </div>
      </button>
    </div>
  );
};

export default SideBar;
