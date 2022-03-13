import QuoteForm from '../components/quotes/QuoteForm';

const NewQuotes = () => {
  const addQuoteData = (quoteData) => {
    console.log(quoteData)
  }

  return (
    <QuoteForm onAddQuote={addQuoteData}/>
  )
}

export default NewQuotes;
