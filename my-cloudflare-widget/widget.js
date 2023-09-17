addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // Make a request to your React app's URL
  const apiUrl = "https://jolly-allen-9yh77v.vercel.app/"; // Replace with your actual URL

  const response = await fetch(apiUrl);

  // Modify the response as needed
  const modifiedResponse = new Response(response.body, {
    headers: {
      "Content-Type": "text/html" // Modify the content type as needed
    }
  });

  return modifiedResponse;
}
