import "./App.css";
import Row from "./Components/Rows/Row";
import requests from "./request";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        isLargeRow
        fetchUrl={requests.fecthNetflixOriginals}
        title="NETFLIX ORIGNALS"
      />
      <Row fetchUrl={requests.fetchTrending} title="Trending Now" />
      <Row fetchUrl={requests.fetchTopRated} title="Top Rated" />
      <Row fetchUrl={requests.fetchActionMovies} title="Action Movies" />
      <Row fetchUrl={requests.fetchComedyMovies} title="Comedy Movies" />
      <Row fetchUrl={requests.fetchHorrorMovies} title="Horror Movies" />
      <Row fetchUrl={requests.fetchRomanceMovies} title="Romance Movies" />
      <Row fetchUrl={requests.fetchDocumentaries} title="Documentaries" />
    </div>
  );
}

export default App;
