import {Link} from "react-router-dom";

import Monitor, {Header} from '../components/Monitor';

export default function Home({savedGames}) {
  const gameLinks = Object.entries(savedGames);

  return (
    <>
      <Monitor team="rebel" style={{gridColumn:"1/3", gridRow:"1/1"}}>
        <Header title="Imperial Assault" subtitle="Companion" />
        <div className="filler"></div>
      </Monitor>
      <Monitor team="rebel" style={{gridColumn:"1/1", gridRow:"2/2"}}>
        <Header title="New Campaign"/>
        <div className="filler">
          <p>Choose your preferred list of expansions and figure packs, and start up a new game of Imperial Assault!</p>
          <button><Link to="/new_game">Begin</Link></button>
        </div>
      </Monitor>
      <Monitor team="rebel" style={{gridColumn:"2/2", gridRow:"2/2"}}>
        <Header title="Load Campaign"/>
        <div className="filler">
          <ul>
          {gameLinks.map((game) =>
            <li><Link to={`/play_game/${game[0]}`}>{game[1].teamName}</Link></li>
          )}
          </ul>
        </div>
      </Monitor>
    </>
  );
}
