import { MoviesGrid } from "./components/MoviesGrid";

export function App() {
  return (
    <>
        <header className="header_title">
            <h1 className="title">Movie List</h1>
        </header>
        <main>
            <MoviesGrid />
        </main>
    </>
  );
}