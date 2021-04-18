import Quotes from '../../util/get-quote';

/**
 * Creates a button with a quote as the text.
 */

function Button() {
  // Since buttons tend to have short values, we'll take the first 20 characters of the quote.
  const quote = Quotes.GetSingleLine().slice(0, 20);

  return (
    <button >
      {quote}
    </button>
  );
}

export default Button;
