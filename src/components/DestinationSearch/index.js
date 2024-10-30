import {Component} from 'react'
import DestinationItem from '../DestinationItem/index'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bg-container">
        <div className="heading-and-input-card">
          <h1 className="heading-ele">Destination Search</h1>
          <div className="input-card">
            <input
              className="input-ele"
              type="search"
              placeholder="Search"
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-img"
            />
          </div>
        </div>

        <ul className="ul-container">
          {searchResults.map(eachItem => (
            <DestinationItem key={eachItem.id} destination={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
