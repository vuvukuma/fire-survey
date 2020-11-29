import Header from '../header/Header';
import Page from '../page/Page';

function App() {
  return (
    <article class="container mx-auto">
      <Header></Header>
      <Page className="title">
        <h1>When can I retire 🔥</h1>
        <button>Let's check this out ⏱</button>
      </Page>
      <Page className="">
        <h2>Q1.</h2>
        <span>1/3</span>
        <h3>Your annual income (after tax)</h3>
        $<input type="number"></input>
        <button>Next</button>
      </Page>
      <Page className="">
        <h2>Q2.</h2>
        <span>2/3</span>
        <h3>Your monthly expense</h3>
        $<input type="number"></input>
        <button>Next</button>
      </Page>
      <Page className="">
        <h2>Q3.</h2>
        <span>3/3</span>
        <h3>Your current portfolio value</h3>
        $<input type="number"></input>
        <button>Next</button>
      </Page>
      <Page className="">
        <h2>Y</h2>
        <h3>Your FIRE number 💰</h3>
        <div>$ 625,000</div>
        <h3>You can retire in ⏱</h3>
        <div>June 18, 2030</div>
        $<input type="number"></input>
        <button>Share the result 🤑</button>
        <button>Recommend it to friends 🙈</button>
      </Page>
      <footer className="">
        © 2020 Vuvukuma
      </footer>
    </article>
  );
}

export default App;
