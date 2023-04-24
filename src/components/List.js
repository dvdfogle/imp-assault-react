export default function List(props) {
  return (
    <ul>
      {props.items.map((item) => <li key={item.toString()}>{item}</li>)}
    </ul>
  )
}
