/* In the ./api.js file, you define an async function handler that takes a url parameter.
 Inside this function, you set a key constant to your API key and use the fetch function 
 to make an HTTP GET request to the url with the API key included in the request headers.
  Once the request is complete, you parse the response body as JSON and return it wrapped 
  in an object with a res property. */
export async function handler(url) {
  /* Get request to disply the data */
  const key = "62838b6de8128861fcf3d3b6";

  const res = await fetch(url, {
    headers: {
      apikey: key,
    },
  });
  const customers = await res.json();
  return customers;
}

export async function handlerPost(url, payload) {
  /* Port request to feed the database */
  const key = "62838b6de8128861fcf3d3b6";

  const res = await fetch(url, {
    method: "POST",
    headers: {
      apikey: key,
      "Content-Type": "application/json",
      /* Prefer: "return=representation"=> this line make the res fail in the browser*/
    },
    body: JSON.stringify(payload),
  });
  const newContact = await res.json();
  return newContact;
}
