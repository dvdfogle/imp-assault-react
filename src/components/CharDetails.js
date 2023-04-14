export default function CharDetails(props) {
  var currentHealth = props.maxHealth;
  // const defenseDice = props.defense.map((color) => (
  //   <Die color="{color}" />
  // ));
  // const healthBar = <HealthBar initial={props.health.current} max={props.health.max} />;
  // const statusEffects = <StatusEffects current={props.statusEffects}/>;

  if (props.summary) {
    return (
      <li key="{props.id}"><a href="#" id="{props.id}">{props.name}</a></li>
    );
  }
  return (
    <div className="char">
      <p>{props.name}</p>
      <img src="/images/tokens/{props.id}.png" class="circle" />
    </div>
  );
}
