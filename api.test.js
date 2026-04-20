test("SearchColors API response (searching blue)", async () => {
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

  const data = await res.json();

  expect(res.status).toBe(200);
  expect(data).toBeDefined();
});