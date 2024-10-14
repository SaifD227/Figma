import Card1 from "../components/Cards/Card1";
import Card2 from "../components/Cards/Card2";
import AddNewCard from "./AddNewCard";
import CardExpensestatistics from "./CardExpensestatistics";


const CreditCard = () => {
  return (
    <div className="h-auto bg-gray-100 top-24 left-0 w-full z-10 md:left-60 md:w-[calc(100%-15rem)] absolute">
      <div className="p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card1 />
          <Card1 />
          <Card2 />
        </div>
      </div>
      <CardExpensestatistics />
        <AddNewCard />
    </div>
  );
};

export default CreditCard;
