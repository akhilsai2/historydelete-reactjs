import {Component} from 'react'
import HistoryItem from './components/HistoryItem'
import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]
// Replace your code here
class App extends Component {
  state = {searchInput: ' ', HistoryResult: initialHistoryList}

  deleteHistory = id => {
    const {HistoryResult} = this.state
    const DeletedList = HistoryResult.filter(each => each.id !== id)
    this.setState({HistoryResult: DeletedList})
  }

  onSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
      HistoryResult: initialHistoryList,
    })
  }

  render() {
    const {searchInput, HistoryResult} = this.state
    let searchResult = HistoryResult
    if (searchInput !== ' ') {
      searchResult = initialHistoryList.filter(each => {
        const searchOf = each.title.toLowerCase()
        return searchOf.includes(searchInput.toLowerCase())
      })
    }
    return (
      <>
        <nav className="navContainer">
          <div className="container">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
            />

            <div className="searchContainer">
              <div className="imgContainer">
                <img
                  className="search"
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  alt="search"
                />
              </div>
              <input
                className="searchInput"
                type="search"
                placeholder="Search History"
                onChange={this.onSearchInput}
              />
            </div>
          </div>
        </nav>
        <div className="resultContainer">
          {searchResult.length !== 0 ? (
            <ul className="historyContainer">
              {searchResult.map(each => (
                <HistoryItem
                  listItems={each}
                  key={each.id}
                  deleteItem={this.deleteHistory}
                />
              ))}
            </ul>
          ) : (
            <p className="para">There is no history to show</p>
          )}
        </div>
      </>
    )
  }
}
export default App
