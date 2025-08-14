import { library } from "../data/books.json";
import { useReadingList } from "../hooks/useReadingList";
import { Book } from "./Book";

export const BooksList = () => {
  const { readingList } = useReadingList();

  const libraryFiltered = library.filter(
    (book) => !readingList.some((item) => item.ISBN === book.book.ISBN)
  );

  return (
    <div className="container">
      <div className="row">
        {libraryFiltered.map(({ book }) => (
          <Book key={book.ISBN} {...book} book={book} />
        ))}
      </div>
    </div>
  );
};
