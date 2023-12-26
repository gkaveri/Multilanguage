import {Component} from 'react'
import './App.css'

import Tabs from './components/Tabs'
import LanguageItem from './components/LanguageItem'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {
    activeTab: languageGreetingsList[0].id,
  }

  clickTabItem = tabValue => {
    this.setState({activeTab: tabValue})
  }

  getFilteredProjects = () => {
    const {activeTab} = this.state
    const filteredTab = languageGreetingsList.filter(
      eachTab => eachTab.id === activeTab,
    )
    return filteredTab
  }

  render() {
    const {activeTab} = this.state
    const filteredTab = this.getFilteredProjects()

    return (
      <div className="main-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="tabs-container">
          {languageGreetingsList.map(eachTab => (
            <Tabs
              key={eachTab.id}
              tabDetails={eachTab}
              clickTabItem={this.clickTabItem}
              isActive={activeTab === eachTab.id}
            />
          ))}
        </ul>
        {filteredTab.map(eachTabItem => (
          <LanguageItem key={eachTabItem.id} languageDetails={eachTabItem} />
        ))}
      </div>
    )
  }
}

export default App
