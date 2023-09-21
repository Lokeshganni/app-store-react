// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItemObj, getActiveTabItem, isActive} = props
  const {tabId, displayText} = tabItemObj
  const onClickTabItem = () => {
    getActiveTabItem(tabId)
  }
  const changeTabStyle = isActive ? 'add-tab-style' : ''
  const addTabBtnStyle = isActive ? 'add-tab-btn-style' : ''
  return (
    <li className={`tab-item ${changeTabStyle}`}>
      <button className={`tab-btn ${addTabBtnStyle}`} onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
