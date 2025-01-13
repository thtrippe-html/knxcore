// Sample data for demonstration
const sampleResults = [
  {
    title: "New York City Getaway",
    description: "Explore the vibrant city life of NYC with exclusive deals.",
    price: "$299"
  },
  {
    title: "Paris Romantic Escape",
    description: "Experience the city of love with a special package.",
    price: "$799"
  },
  {
    title: "Tropical Bahamas Vacation",
    description: "Relax in the sun with an all-inclusive Bahamas trip.",
    price: "$599"
  },
  {
    title: "Tokyo Adventure",
    description: "Discover the bustling streets and culture of Tokyo.",
    price: "$899"
  }
];

// Get references to DOM elements
const form = document.querySelector("#searchForm");
const resultsContainer = document.querySelector("#results");

// Event listener for form submission
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the page from refreshing

  // Get the search query
  const searchInput = document.querySelector("#searchInput").value.toLowerCase();

  // Filter results based on search query
  const filteredResults = sampleResults.filter((result) =>
    result.title.toLowerCase().includes(searchInput) ||
    result.description.toLowerCase().includes(searchInput)
  );

  // Display the filtered results
  displayResults(filteredResults);
});

// Function to display search results
function displayResults(results) {
  // Clear previous results
  resultsContainer.innerHTML = "";

  // Check if there are results
  if (results.length === 0) {
    resultsContainer.innerHTML = "<p>No results found. Try a different search.</p>";
    return;
  }

  // Generate result cards
  results.forEach((result) => {
    const card = document.createElement("div");
    card.classList.add("result-card");

    card.innerHTML = `
      <h3>${result.title}</h3>
      <p>${result.description}</p>
      <p><strong>${result.price}</strong></p>
      <button>Book Now</button>
    `;

    resultsContainer.appendChild(card);
  });
}

// Display all results on initial load
displayResults(sampleResults);
