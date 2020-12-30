import './App.css';
import { P } from './components/paragraph/Paragraph';
import { H1, H2, H3, H4, H5, H6 } from './components/header/Header';
import { UL, OL } from './components/lists/Lists';

function App() {
  return (
    <div>
      <header>As You Wish Ipsum Examples</header>
      <section>
        <article>
          <h2>Headers</h2>
          <span>H1</span>
          <H1/>
          <span>H2</span>
          <H2 />
          <span>H3</span>
          <H3 />
          <span>H4</span>
          <H4 />
          <span>H5</span>
          <H5 />
          <span>H6</span>
          <H6 />
        </article>
        <article>
          <h2>Paragraphs</h2>
          <P />
        </article>
        <article>
          <h2>Lists</h2>
          <h4>Unordered List:</h4>
          <UL />
          <h4>Ordered List:</h4>
          <OL />
        </article>
      </section>
    </div>
  );
}

export default App;
