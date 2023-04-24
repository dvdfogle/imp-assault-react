export default function AppBar({title}) {
  return (
    <header className="toolbar">
      <h1>{title}</h1>
      <Hamburger />
    </header>
  )
}

const Hamburger = () => {
  return (
    <div id="hamburger">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
