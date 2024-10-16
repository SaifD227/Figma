import BarChart from "../MyCharts/BarChart";
import PieChart from "../MyCharts/PieChart";

const WeeklyActivity = () => {
  return (
    <div className="mx-5 pt-14">
      <div className="flex flex-col md:flex-row justify-between itespace-y-8 md:space-y-0 md:space-x-5">
        <div className="w-full sm:w-60 md:w-96  ">
          <h1 className="mb-4 text-blue-950 text-lg">Weekly Activity</h1>
          <BarChart />
        </div>

        <div className="w-full sm:w-80 md:w-96 ">
          <h1 className="mb-4 text-blue-950 text-lg">Expense Statistics</h1>
          <div className="bg-white">
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyActivity;
