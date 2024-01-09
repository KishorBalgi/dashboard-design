const OverAllPayments = () => {
  return (
    <div>
      {/* Cards */}
      <div className=" my-6 grid grid-cols-2 gap-4">
        {/* Pending Payouts */}
        <div className="flex flex-col gap-4 bg-white rounded-md p-4 shadow-sm">
          <p className="text-base">Online orders</p>

          <p className=" text-3xl font-medium">231</p>
        </div>

        {/* Completed Payouts */}
        <div className="flex flex-col gap-4 bg-white rounded-md p-4 shadow-sm">
          <p className="text-base">Amount Received</p>

          <p className=" text-3xl font-medium">₹23,92,312.19</p>
        </div>
      </div>
    </div>
  );
};

export default OverAllPayments;
