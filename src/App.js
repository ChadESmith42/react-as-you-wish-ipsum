import './App.css';
import ParagraphElement from './components/paragraph/Paragraph';
import { H1, H2, H3, H4, H5, H6 } from './components/header/Header';

function App() {
  return (
    <div>
      <h1>As You Wish Ipsum Examples</h1>
      <section>
        <article>
          <h1>Headers</h1>
          <H1/>
          <H2 />
          <H3 />
          <H4 />
          <H5 />
          <H6 />
        </article>
      </section>
      <section>
        <article>
          <h1>Paragraphs</h1>
          <ParagraphElement />
        </article>
      </section>
    </div>
  );
}

export default App;
