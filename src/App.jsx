function Header() {
  return (
    <header>
      <h1>Logo</h1>
    </header>
  );
}

function Card(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Title: {props.title}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <h3>copyright</h3>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Card name="Tim Timothy" title="CEO" age="27" />
        <Card name="Jim Jimothy" title="CTO" age="69" />
        <Card name="Dim Dimothy" title="CFO" age="100000000" />
      </main>
      <Footer />
    </>
  );
}

export default App;
