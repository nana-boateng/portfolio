export default function Nav({ style = "", ...props }) {
  return <nav className={`flex flex-row ${style}`}>{props.children}</nav>;
}
