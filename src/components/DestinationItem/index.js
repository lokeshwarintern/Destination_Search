import './index.css'

const DestinationItem = props => {
  const {destination} = props
  const {name, imgUrl} = destination

  return (
    <li className="list-item">
      <img src={imgUrl} alt={name} className="destination-img" />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
