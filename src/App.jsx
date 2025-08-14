import { BooksList } from "./components/BooksList";
import { ReadingList } from "./components/ReadingList";
import { ReadingListProvider } from "./context/list";

function App() {
  return (
    <ReadingListProvider>
      <h1>Libros Disponibles</h1>

      <BooksList />
      <ReadingList />
    </ReadingListProvider>
  );
}

export default App;
