function UL() {
  const quotes = ['Quote 1', 'Quote 2', 'Quote 3', 'Quote 4'];

  return (
    <ul>
      <li>{quotes[0]}</li>
      <li>{quotes[1]}</li>
      <li>{quotes[2]}</li>
      <li>{quotes[3]}</li>
    </ul>
  );
}

function OL() {
  const quotes = ['Quote 1', 'Quote 2', 'Quote 3', 'Quote 4'];
  return (
    <ol>
      <li>{quotes[0]}</li>
      <li>{quotes[1]}</li>
      <li>{quotes[2]}</li>
      <li>{quotes[3]}</li>
    </ol>
  );
}

export { UL, OL };
