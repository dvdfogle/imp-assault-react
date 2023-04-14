import Monitor, {Header} from "./components/Monitor";
import CharDetails from "./components/CharDetails";

function App(props) {
  const current_mission = "Aftermath";

  return (
    <div className="App" id="terminal">
      <Monitor team="rebel" style={{gridColumn:"1/2", gridRow:"1/2"}}>
        <Header title="Active Assignment" subtitle={current_mission} />
      </Monitor>
    </div>
  );
}


export default App;
//{props.game.missions.splice(-1).name}
