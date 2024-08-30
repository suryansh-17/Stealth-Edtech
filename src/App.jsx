import "./App.css";
import BillBar from "./components/BillBar";
import Button from "./components/Button";
import FreqCard from "./components/FreqCard";
import ItemCard from "./components/ItemCard";
import Topbar from "./components/Topbar";
import data from "./data/data";
function App() {
  return (
    <div className="max-w-[390px] border font-manrope bg-[#f0f0f5]">
      <Topbar />
      {data.map((item) => (
        <div key={item.itemName} className="p-2">
          <ItemCard
            itemName={item.itemName}
            img={item.img}
            calorie={item.calorie}
            price={item.price}
          />
        </div>
      ))}
      <h1 className="font-bold text-[#403C3C] ml-3">Frequently Ordered</h1>
      <div className="flex">
        <FreqCard />
        <FreqCard />
        <FreqCard />
      </div>
      <div className="p-3">
        <BillBar />
      </div>
      <div className="p-[14px]">
        <Button />
      </div>
    </div>
  );
}

export default App;
