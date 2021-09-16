import './index.css'

const FaqItem = props => {
  const {faqDetails, showHide, isShowing} = props
  const {questionText, answerText, id} = faqDetails
  console.log(isShowing)

  const onClickShow = () => {
    showHide(id)
  }

  const imageUrl = isShowing
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const altName = isShowing ? 'minus' : 'plus'

  return (
    <li className="list-item">
      <div className="question-container">
        <h1 className="question">{questionText}</h1>
        <button type="button" className="button" onClick={onClickShow}>
          <img src={imageUrl} alt={altName} className="image" />
        </button>
      </div>
      <hr />
      {isShowing ? <p className="answer">{answerText}</p> : null}
    </li>
  )
}

export default FaqItem
