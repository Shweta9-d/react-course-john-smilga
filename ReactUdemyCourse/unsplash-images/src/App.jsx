import "./App.css";
import ThemeToggle from "./components/ThemeToggle";
import Gallery from "./components/Gallery";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </div>
  );
}

export default App;
