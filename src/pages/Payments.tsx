import OverAllPayments from "../components/payments/OverAllPayments";
import TransactionsTable from "../components/payments/TransactionsTable";

const PaymentsPage = () => {
  return (
    <div className="p-8 bg-[#fafafa]">
      <div className="flex items-center justify-between">
        <h2 className=" text-xl font-medium">Overview</h2>

        {/* Select Time range */}
        <div className=" flex justify-end">
          <select className="bg-white  text-gray-900 text-sm rounded-md block w-32 px-2.5 py-2 outline-none border border-gray-200">
            <option value={"last30Days"}>This Month</option>
            <option value={"lastYear"}>This Year</option>
            <option value={"allTime"}>All Time</option>
          </select>
        </div>
      </div>

      {/* Over All Payment Stats */}
      <OverAllPayments />

      {/* Transactions Table */}
      <TransactionsTable />
    </div>
  );
};

export default PaymentsPage;
