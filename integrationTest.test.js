// Code written by Adam Betinsky on April 20th, 2026 with assistance from chatGPT. See the AI Disclosure for relevant information

// This test tries to search the color "Blue" in the api
test("SearchColors API response (searching blue)", async () => {
    
  // Await a fetch to my live search color API and save the result. Do a POST request with a JSON file including the color "blue" and a dummy user ID
  const res = await fetch("http:/betinsky-colorslab.com/LAMPAPI/SearchColors.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({
      search: "blue",
      userId: 1
    })
  });

  const data = await res.json(); // Await the result from the API and save it

  // Check to see if the returned status is 200 and if the data isn't empty. Return the results to generate the test's final result
  expect(res.status).toBe(200);
  expect(data).toBeDefined();
});