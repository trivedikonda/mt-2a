import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

class CharacterCount extends Component {
  state = {isAdded: false, textInput: '', charactersList: []}

  onChangeText = event => {
    this.setState({textInput: event.target.value})
  }

  renderNoUsersInputView = () => (
    <div className="image-container">
      <img
        width={400}
        height={240}
        className="no-user-inputs-image"
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    </div>
  )

  onSubmitButton = event => {
    event.preventDefault()

    this.setState({isAdded: true})
    const {textInput} = this.state
    const newItem = {
      id: uuidv4(),
      word: textInput,
    }

    console.log(newItem)
    this.setState(prevState => ({
      charactersList: [...prevState.charactersList, newItem],
      textInput: '',
    }))
  }

  renderAddCharacterAndCount = () => {
    const {charactersList} = this.state
    console.log(charactersList)
    const uoList = charactersList.length > 3 ? 'overflow-content' : 'uo-list'
    return (
      <ul className={`${uoList}`}>
        {charactersList.map(each => (
          <li key={each.id}>
            <p className="paragraph">
              {each.word} : <span className="length">{each.word.length}</span>
            </p>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const {isAdded, textInput} = this.state
    return (
      <div className="app-container">
        <div className="left-container">
          <h1 className="left-heading">Count The characters like a Boss...</h1>
          {isAdded
            ? this.renderAddCharacterAndCount()
            : this.renderNoUsersInputView()}
        </div>
        <div className="right-container">
          <h1 className="right-heading">Character Counter</h1>
          <form onSubmit={this.onSubmitButton}>
            <div className="input-and-button">
              <input
                className="text-bar"
                value={textInput}
                type="text"
                placeholder="Enter the characters here"
                onChange={this.onChangeText}
              />
              <button type="submit" className="button">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCount
