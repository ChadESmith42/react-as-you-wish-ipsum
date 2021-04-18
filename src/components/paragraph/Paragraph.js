import Quotes from '../../util/get-quote';

function P() {
  return (
    <div>
      {Quotes.GetQuote() }
    </div>
  );
}

export { P };
