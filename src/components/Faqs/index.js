import {Component} from 'react'

import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {
    isShowing: false,
  }

  showHide = id => {
    const {faqsList} = this.props
    const {isShowing} = this.state

    faqsList.filter(each => {
      if (each.id === id) {
        this.setState(prevState => ({
          isShowing: !prevState.isShowing,
        }))
      }
      return isShowing
    })
  }

  renderFagsList = () => {
    const {faqsList} = this.props
    const {isShowing} = this.state
    return (
      <ul className="unOrder">
        {faqsList.map(eachItem => (
          <FaqItem
            faqDetails={eachItem}
            key={eachItem.id}
            showHide={this.showHide}
            isShowing={isShowing}
          />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">FAQs</h1>
          {this.renderFagsList()}
        </div>
      </div>
    )
  }
}

export default Faqs
