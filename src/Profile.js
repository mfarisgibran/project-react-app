export default function Profile(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age} years old</h2>
      <h3>{props.gender}</h3>
    </div>
  )
}
