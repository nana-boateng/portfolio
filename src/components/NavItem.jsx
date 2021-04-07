import "./styles/style.css";

export default function NavItem(props) {
  return (
    <button className="mx-2" id="hoverable">
      {props.children}
    </button>
  );
}
