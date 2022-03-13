import {useHistory} from 'react-router-dom'
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuotes = () => {
  const history = useHistory()

  const addQuoteData = (quoteData) => {
    console.log(quoteData)

    history.push('/quotes');
  }

  return (
    <QuoteForm onAddQuote={addQuoteData}/>
  )
}

export default NewQuotes;
