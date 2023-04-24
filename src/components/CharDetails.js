export default function CharDetails(props) {
  var hero = props.hero;
  var currentHealth = hero.maxHealth;
  // const defenseDice = props.defense.map((color) => (
  //   <Die color="{color}" />
  // ));
  // const healthBar = <HealthBar initial={props.health.current} max={props.health.max} />;
  // const statusEffects = <StatusEffects current={props.statusEffects}/>;

  if (props.summary) {
    return (
      <a href="#" id="{hero.id}">{hero.name}</a>
    );
  }
  return (
    <div className="char">
      <p>{hero.name}</p>
      <img src="/images/tokens/{hero.id}.png" class="circle" />
    </div>
  );
}
