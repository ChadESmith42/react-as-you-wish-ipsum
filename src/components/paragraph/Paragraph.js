import GetQuote from '../../util/get-quote';

function P() {
  const quotes = GetQuote();
  const q = [];
  for (let quote of quotes) {
    q.push(<p>{quote}</p>);
  }

  return (
    <div>
      {q}
    </div>
  );
}

export { P };
