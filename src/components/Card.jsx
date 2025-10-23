export default function Card(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Title: {props.title}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}
