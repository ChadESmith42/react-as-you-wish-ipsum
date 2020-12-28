import GetQuote from '../../util/get-quote';

function H1() {
  let q = GetQuote()[0];
  return (<h1>{q}</h1>);
}

function H2() {
  let q = GetQuote()[0];
  return (<h2>{q}</h2>);
}

function H3() {
  let q = GetQuote()[0];
  return (<h3>{q}</h3>);
}

function H4() {
  let q = GetQuote()[0];
  return (<h4>{q}</h4>);
}

function H5() {
  let q = GetQuote()[0];
  return (<h5>{q}</h5>);
}

function H6() {
  let q = GetQuote()[0];
  return (<h6>{q}</h6>);
}

export { H1, H2, H3, H4, H5, H6 };
