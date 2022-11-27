import Head from "next/head";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Results from "../components/Results/Results";
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link
          rel="icon"
          href="https://i.pinimg.com/originals/1b/f2/96/1bf2964cd5d85f8a85d47ead994ad0c7.jpg"
        />
      </Head>

      <Header />
      <Navbar />
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(`
  https://api.themoviedb.org/3${
    requests[genre]?.url || requests.fetchTrending.url
  }
  `).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
