import { decrement, increment, incrementByValue } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();


  return (
    <div className="">
      <div className="h-screen w-full flex justify-center items-center">
        <div className="flex p-10 border border-purple-400 rounded-md bg-slate-100">
          <button 
            onClick={() => dispatch(increment())} 
            className="text-white text-xl bg-green-500 px-3 py-2 rounded-lg mr-5"
          >
            increment
          </button>

          <button 
            onClick={() => dispatch(incrementByValue(5))} 
            className="text-white text-xl bg-green-500 px-3 py-2 rounded-lg"
          >
            incrementByValue
          </button>

          <h2 className="text-2xl mx-10">{count}</h2>

          <button 
            onClick={() => dispatch(decrement())} 
            className="text-white text-xl bg-red-500 px-3 py-2 rounded-lg"
          >
            decrement
          </button>
        </div>
      </div>
      {count > 5 && (
        <div 
          className="box w-96 h-40 text-center ml-28 flex justify-center items-center border border-red-700"
        />
      )}
    </div>
  );
}

export default App;
