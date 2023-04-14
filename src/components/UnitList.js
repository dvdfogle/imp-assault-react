import CharDetails from "./CharDetails";

export default function UnitList(props) {
  const heroList = props.heroes.map((hero) => (
    <CharDetails id={hero.id} name={hero.name} summary={props.summary} />
  ));
  if (props.summary) {
    return (
      <ul id="hero-list">
        {heroList}
      </ul>
    )
  }
}
