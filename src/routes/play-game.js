
import AppBar from "../components/AppBar";
import Monitor, {Header} from "../components/Monitor";
import List from "../components/List";
import CharDetails from "../components/CharDetails";

export default function PlayGame({game}) {
  const activeMission = game.campaign.currentMission();
  return (
    <>
      <AppBar title="{game.teamName}" Campaign Tracker />
      <div className="App" id="terminal">
        <Monitor team="rebel" style={{gridColumn:"1/1", gridRow:"1/1"}}>
          <Header title="Active Assignment" subtitle={activeMission.name} />
          <div className="filler">
            <List items={game.rebellion.heroes.map((hero) =>
              <CharDetails summary={true} hero={hero} />
            )} />
          </div>
        </Monitor>
        <Monitor team="imperial" style={{gridColumn:"1/1", gridRow:"2/2"}}>
          <Header title="Mission Log" />
          <div className="filler">
          </div>
        </Monitor>
      </div>
    </>
  );
}
