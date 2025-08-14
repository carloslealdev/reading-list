import { library } from "../data/books.json";
import { Book } from "./Book";

export const BooksList = () => {
  return (
    <div className="container">
      <div className="row">
        {library.map(({ book }) => (
          <Book key={book.ISBN} {...book} book={book} />
        ))}
      </div>
    </div>
  );
};
