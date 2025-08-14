import { useReadingList } from "../hooks/useReadingList";
import { MiniBook } from "./MiniBook";

export const ReadingList = () => {
  const { readingList } = useReadingList();

  console.log(readingList);

  return (
    <div className="list">
      <h1>Reading List</h1>

      {readingList.map((book) => (
        <MiniBook key={book.ISBN} {...book} book={book} />
      ))}
    </div>
  );
};
