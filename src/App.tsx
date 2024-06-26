

function App() {

  return (
    < div className="h-screen w-full flex justify-center items-center">
      <div className="flex p-10 border border-purple-400 rounded-md bg-slate-100">
        <button className="text-white text-xl bg-green-500 px-3 py-2 rounded-lg">increment</button>
        <h2 className="text-2xl mx-10">0</h2>
        <button className="text-white text-xl bg-red-500 px-3 py-2 rounded-lg">decrement</button>
      </div>
    </div>
  )
}

export default App
