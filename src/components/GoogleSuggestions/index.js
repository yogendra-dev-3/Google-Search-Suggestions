// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeValue = suggestion => {
    this.setState({searchInput: suggestion})
  }

  onInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="google-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="image"
            alt="google logo"
          />
          <div className="card-container">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                className="input"
                placeholder="Search Google"
                onChange={this.onInputChange}
                value={searchInput}
              />
            </div>
            <ul>
              {searchResults.map(eachSuggestion => (
                <SuggestionItem
                  suggestionDetails={eachSuggestion}
                  key={eachSuggestion.id}
                  onChangeValue={this.onChangeValue}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
