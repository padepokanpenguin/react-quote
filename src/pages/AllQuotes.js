import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Aria', text: 'Learning is fun' },
  { id: 'q2', author: 'Jamal', text: 'Practice make perfect' },
]

const AllQuotes = () => {
   return (
    <QuoteList quotes={DUMMY_QUOTES} />     
   )
}

export default AllQuotes;
