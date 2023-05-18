//1. Import createContest from react
import { createContext, useState } from "react";

//2. Create the context that is goint to be used into the app
export const AppContext = createContext();

//3. Create a export function  (rfc) that is going to work as the context provider
//   This function has to receive props

export default function AppContextProvider({ children }) {
  //4. Create the elements that you want to use across the app
  //Open and close the mobil navigation menus
  const [show, setShow] = useState(false);

  //Restdb.io url
  const url = "https://karinavalens-35ec.restdb.io/rest/better-sites ";

  //Mail chimp u/id info for append in the URL
  const mailU = "dac657d711abce8c5203722d7";
  const mailID = "977b2212a9";

  //Pay the chosen package
  //In this empty object is going to be storage the chosen package info
  const [pricing, setPricing] = useState({
    title: " ",
    price: " ",
  });

  //5. create a const that is going to be the value of the context,
  // with everything that we want to share to other pages or components
  const value = { show, setShow, url, mailU, mailID, pricing, setPricing };
  //6. Wrap the -app.js page in the context

  return (
    <div>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </div>
  );
}
