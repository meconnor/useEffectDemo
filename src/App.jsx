import "./App.css";
import Counter from "./components/Counter";
import ProfileSearchForm from "./components/ProfileSearchForm";
import ProfileViewerWithSearch from "./components/ProfileViewerWithSearch";
import QuoteFetchLoader from "./components/QuoteFetchLoader";
import QuoteFetcher from "./components/QuoteFetcher";

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <QuoteFetcher /> */}
      {/* <QuoteFetchLoader /> */}
      <ProfileViewerWithSearch />
    </>
  );
}

export default App;
