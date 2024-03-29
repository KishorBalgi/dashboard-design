import { useEffect, useState } from "react";
import data from "../../data/transactions.json";
import Loader from "../../common/loader/Loader";
import info from "../../assets/icons/info.svg";
import arrow from "../../assets/icons/arrow.svg";
import polygon from "../../assets/icons/polygon.svg";
import search from "../../assets/icons/search.svg";
import sort from "../../assets/icons/sort.svg";
import download from "../../assets/icons/download.svg";

const TransactionsTable = () => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [transactionData] = useState(data);
  const limit = 10;
  const skip = (page - 1) * limit;
  const totalPages = Math.ceil(transactionData.length / limit);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  function handleNextPage() {
    if (page === totalPages) return;
    setPage((page) => page + 1);
  }

  function handlePrevPage() {
    if (page === 1) return;
    setPage((page) => page - 1);
  }

  function formatDate(date: string) {
    const formattedDate = new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    return formattedDate;
  }

  return (
    <div>
      <h2 className=" text-xl font-medium">Transactions | This Month</h2>

      {/* Table Container */}
      <div className="bg-white rounded-md p-4 my-6 shadow-sm">
        {/* Actions Bar */}
        <div className="flex justify-between">
          {/* Search Bar */}
          <div className="justify-self-center">
            <div className="w-[250px] flex gap-2 items-center bg-white border border-gray-200 rounded-md px-4 py-2">
              <img src={search} alt="search" />
              <input
                type="text"
                className="w-full bg-white outline-none"
                placeholder="Search by Order ID..."
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button className="flex gap-2 items-center rounded-md border border-gray-200 p-2">
              Sort
              <img src={sort} alt="sort" />
            </button>
            <button className="h-full rounded-md border border-gray-200 p-2">
              <img src={download} alt="download" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div>
          <table className="w-full my-4">
            <thead>
              <tr className="text-center rounded-md opacity-80">
                <th className="font-medium px-[14px] py-3 text-left bg-[#F2F2F2] rounded-s-md">
                  Order ID
                </th>
                <th className="flex items-center gap-1 justify-center font-medium px-[14px] py-3 bg-[#F2F2F2]">
                  Order Date
                  <button>
                    <img className="w-2.5" src={polygon} alt="sort" />
                  </button>
                </th>
                <th className="font-medium px-[14px] py-3 text-right bg-[#F2F2F2]">
                  Order amount
                </th>
                <th className="flex items-center justify-end  gap-1 font-medium px-[14px] py-3 bg-[#F2F2F2] rounded-e-md">
                  Transaction Fees
                  <button>
                    <img src={info} alt="info" />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Table Data */}
              {!loading &&
                transactionData.slice(skip, skip + limit).map((transaction) => (
                  <tr
                    key={transaction.order_id}
                    className="text-center border-b hover:bg-gray-50"
                  >
                    <td className="text-[#146EB4] font-medium px-[14px] py-3 text-left">
                      {transaction.order_id}
                    </td>
                    <td className="px-[14px] py-3">
                      {formatDate(transaction.order_date)}
                    </td>
                    <td className="px-[14px] py-3 text-right">
                      ₹{transaction.order_amount}
                    </td>
                    <td className="px-[14px] py-3 text-right">
                      ₹{transaction.transaction_fees}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          {loading && <Loader />}

          {/* Pagination */}
          {!loading && (
            <div className="flex justify-center gap-2">
              <button
                className="flex font-medium items-center gap-2 border border-gray-200 rounded-md px-4 py-2"
                onClick={handlePrevPage}
              >
                <img src={arrow} alt="arrow-prev" />
                Previous
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  className={`rounded-md px-4 py-2 ${
                    index + 1 === page ? "bg-primary text-white" : ""
                  }`}
                  onClick={() => setPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              <button
                className="flex font-medium items-center gap-2 border border-gray-200 rounded-md px-4 py-2"
                onClick={handleNextPage}
              >
                Next <img className="rotate-180" src={arrow} alt="arrow-prev" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionsTable;
