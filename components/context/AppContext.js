//1. Import createContest from react
import { createContext, useState } from "react";

//2. Create the context that is goint to be used into the app
export const AppContext = createContext();

//3. Create a export function  (rfc) that is going to work as the context provider
//   This function has to receive props

export default function AppContextProvider({ children }) {
  //4. Create the elements that you want to use across the app
  const [show, setShow] = useState(false);

  const url = "https://karinavalens-35ec.restdb.io/rest/better-sites  ";

  //5. create a const that is going to be the value of the context,
  // with everything that we want to share to other pages or components
  const value = { show, setShow, url };
  //6. Wrap the -app.js page in the context

  return (
    <div>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </div>
  );
}
