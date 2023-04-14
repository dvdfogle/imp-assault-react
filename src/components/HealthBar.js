export default function HealthBar(props) {
  const [current, setCurrent] = useState(props.initial);

  const update = (interval) => {
    if (current + interval <= props.max && current + interval >= 0) {
      setCurrent(current => current + interval)
    }
  }

  return {
    <div class="bar background">
      <div class="bar health" style="height:{current/props.max}%">current</div>
    </div>;
  }
}
