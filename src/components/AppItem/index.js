// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <li className="app-item-card">
      <img className="app-logo" src={imageUrl} alt={appName} />
      <p className="app-heading">{appName}</p>
    </li>
  )
}

export default AppItem
