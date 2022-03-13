import {useParams, Route} from 'react-router-dom';
import {Fragment} from 'react';
import HiglightedQuote from '../components/quotes/HiglightedQuote';
import Comments from '../components/comments/Comments';


const DUMMY_QUOTES = [
  { id: 'q1', author: 'Aria', text: 'Learning is fun' },
  { id: 'q2', author: 'Jamal', text: 'Practice make perfect' },
]

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

  if (!quote) {
    return <p>No quote found</p>
  }

  return (
    <Fragment>
      <HiglightedQuote text={quote.text} author={quote.author}/>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  )
}

export default QuoteDetail;
