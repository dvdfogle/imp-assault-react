import axios from "axios";

import Monitor, {Header} from '../components/Monitor';

export default function NewGame() {
  function getData() {
    axios({
      method: "GET",
      url: "/api/expansions"
    })
    .then((response) => {
      const res = response.data;
      console.log(res);
    })
  }

  return (
    <>
      <Monitor team="jedi" style={{gridColumn:"1/1", gridRow:"1/3"}}>
        <Header title="Boxes" />
        <div className="filler">
        </div>
      </Monitor>
      <Monitor team="rebel" style={{gridColumn:"2/4", gridRow:"1/1"}}>
        <Header title="Hero Packs" />
        <div className="filler">
        </div>
      </Monitor>
      <Monitor team="imperial" style={{gridColumn:"2/4", gridRow:"2/2"}}>
        <Header title="Villain Packs" />
        <div className="filler">
        </div>
      </Monitor>
    </>
  );
}
