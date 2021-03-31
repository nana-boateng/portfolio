export default function Card({ colour = "white", style, ...props }) {
  return (
    <div className={`h-max w-52 bg-${colour} rounded-md shadow-sm ${style}`}>
      {props.children}
    </div>
  );
}
