import Data from "./Data";
import Main from "./components/Main"
import Header from "./components/Header"
function App() {
  const Datainfo = Data.map(data =>{
    return(
      <Main
        key = {data.id}
        {...data}
      />
    )
  })
  return (
    <div className="App">
      <Header/>
      {Datainfo}
    </div>
  );
}

export default App;
