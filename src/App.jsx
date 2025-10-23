import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";

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
