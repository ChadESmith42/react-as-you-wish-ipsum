import Quotes from '../../util/get-quote';

function H1() {
  return (<h1>{Quotes.GetSingleLine()}</h1>);
}

function H2() {
  return <h2>{Quotes.GetSingleLine()}</h2>;
}

function H3() {
  return <h3>{Quotes.GetSingleLine()}</h3>;
}

function H4() {
  return <h4>{Quotes.GetSingleLine()}</h4>;
}

function H5() {
  return <h5>{Quotes.GetSingleLine()}</h5>;
}

function H6() {
  return <h6>{Quotes.GetSingleLine()}</h6>;
}

export { H1, H2, H3, H4, H5, H6 };
