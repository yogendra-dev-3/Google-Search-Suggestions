// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, onChangeValue} = props
  const {suggestion} = suggestionDetails

  const onChangeSearchInput = () => {
    onChangeValue(suggestion)
  }

  return (
    <li className="list">
      <p className="suggestion">{suggestion}</p>
      <img
        className="arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={onChangeSearchInput}
      />
    </li>
  )
}

export default SuggestionItem
