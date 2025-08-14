import { createContext, useState } from "react";

export const ReadingListContext = createContext();

export const ReadingListProvider = ({ children }) => {
  const [readingList, setReadingList] = useState([]);
  // const [isInList, setIsInList] = useState(false);
  return (
    <ReadingListContext.Provider
      value={{
        readingList,
        setReadingList,
        // isInList,
        // setIsInList,
      }}
    >
      {children}
    </ReadingListContext.Provider>
  );
};
