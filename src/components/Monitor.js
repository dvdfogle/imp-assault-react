export default function Monitor(props) {
  return (
    <div className="monitor {props.team}">
      <div class="screen {props.team}">
        {props.children}
      </div>
    </div>
  )
}

export const Header = ({title, subtitle}) => {
  if (subtitle) {
    return <header><h1>{title}</h1><p role="doc-subtitle">{subtitle}</p></header>;
  }
  return <header><h1>{title}</h1></header>;
}
