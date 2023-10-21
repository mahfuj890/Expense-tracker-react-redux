import { useSelector } from "react-redux";
export default function Balance() {
  const { transactions } = useSelector((state) => state.transaction);

  const calculateIncome = (transactions) => {
    let income = 0;
    transactions.forEach((transaction) => {
      const { type, amount } = transaction;
      if (type === "income") {
        income += amount;
      } else {
        income -= amount;
      }
    });

    return income;
  };

  return (
    <div className="top_card">
      <p>Your Current Balance</p>
      <h3>
        <span>৳</span>
        <span>
          {" "}
          {new Intl.NumberFormat("en-IN").format(calculateIncome(transactions))}
        </span>
      </h3>
    </div>
  );
}
