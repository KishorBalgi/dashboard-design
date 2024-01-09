import OverAllPayments from "../components/payments/OverAllPayments";
import TransactionsTable from "../components/payments/TransactionsTable";

const PaymentsPage = () => {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between">
        <h2 className=" text-xl font-semibold">Overview</h2>

        {/* Select Time range */}
        <div className=" flex justify-end">
          <select className="bg-white  text-gray-900 text-sm rounded-lg block w-32 p-2.5 outline-none">
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
