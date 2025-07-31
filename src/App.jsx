import "./App.css";
 
function App() {
  return (
   
    <div className="grid grid-cols-5 h-screen text-center">
      <div className="col-span-1 bg-zinc-800">
 
      </div>
      <div className="col-span-4 flex flex-col h-screen p-20">
        <div className="container flex-1 overflow-auto">
 
        </div>
        <div className="bg-zinc-800 w-1/2 p-1 pr-5 text-white m-auto rounded-4xl border border-zinc-700 flex h-16">
          <input className="w-full h-full p-3 outline-none" type="text" placeholder="Ask me anything"/>
          <button>Ask</button>
        </div>
      </div>
    </div>
  );
}
 
export default App;