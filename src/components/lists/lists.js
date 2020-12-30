import GetQuote from '../../util/get-quote';

function UL() {
  const quotes = listQuotes();

  return (
    <ul>
      {quotes.map(quotes => {
        return (<li>{quotes}</li>);
      })}
    </ul>
  );
}

function OL() {
  const quotes = listQuotes();
  return (
    <ol>
      {quotes.map(quotes => {
        return (<li>{quotes}</li>);
      })}
    </ol>
  );
}

function listQuotes() {
  const quotes = GetQuote();
  if (quotes.length < 3) {
     return listQuotes();
  }
  return quotes;
}

export { UL, OL };
