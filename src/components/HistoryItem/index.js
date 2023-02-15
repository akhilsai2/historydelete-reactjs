import './index.css'

const HistoryItem = props => {
  const {listItems, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = listItems

  const testId = () => {
    deleteItem(id)
  }

  return (
    <>
      <li className="container">
        <div className="listContainer">
          <p className="time">{timeAccessed}</p>
          <img src={logoUrl} className="logo" alt="domain logo" />
          <p className="title">{title}</p>
          <p className="link">{domainUrl}</p>
        </div>
        <div>
          <button
            type="button"
            className="button"
            onClick={testId}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete"
            />
          </button>
        </div>
      </li>
    </>
  )
}

export default HistoryItem
