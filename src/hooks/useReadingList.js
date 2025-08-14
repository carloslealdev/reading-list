import { useContext } from "react";
import { ReadingListContext } from "../context/list";

export const useReadingList = () => {
  const { readingList, setReadingList, isInList, setIsInList } =
    useContext(ReadingListContext);

  const addToReadingList = (book) => {
    setReadingList([...readingList, book]);
    // setIsInList(true);
  };

  const removeFromReadingList = (readingList, book) => {
    setReadingList(readingList.filter((item) => item.ISBN !== book.ISBN));
    // setIsInList(false);
  };

  return {
    readingList,
    setReadingList,
    addToReadingList,
    removeFromReadingList,
    // isInList,
    // setIsInList,
  };
};
