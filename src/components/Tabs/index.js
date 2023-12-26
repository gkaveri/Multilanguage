import './index.css'

const Tabs = props => {
  const {tabDetails, isActive, clickTabItem} = props
  console.log(isActive)
  const {id, buttonText} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(id)
  }

  const activeTabBtn = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`tab-btn ${activeTabBtn}`}
        onClick={onClickTabItem}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default Tabs
