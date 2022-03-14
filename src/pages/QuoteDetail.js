import {useParams, Route, Link, useRouteMatch} from 'react-router-dom';
import {Fragment} from 'react';
import HiglightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';


const DUMMY_QUOTES = [
  { id: 'q1', author: 'Aria', text: 'Learning is fun' },
  { id: 'q2', author: 'Jamal', text: 'Practice make perfect' },
]

const QuoteDetail = () => {
  const match = useRouteMatch()
  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

  if (!quote) {
    return <p>No quote found</p>
  }

  return (
    <Fragment>
      <HiglightedQuote text={quote.text} author={quote.author}/>
      <Route path={match.path} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>Load Comment</Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  )
}

export default QuoteDetail;
