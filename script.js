// script.js
document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    const destination = document.getElementById('destination').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
  
    // Validate inputs
    if (!destination || !startDate || !endDate) {
      alert('Please fill in all fields.');
      return;
    }
  
    // Display results (mock data for now)
    const results = document.getElementById('results');
    results.innerHTML = `
      <div class="result-card">
        <h3>${destination} - $500</h3>
        <p>From: ${startDate} To: ${endDate}</p>
        <button>Book Now</button>
      </div>
      <div class="result-card">
        <h3>${destination} - $750</h3>
        <p>From: ${startDate} To: ${endDate}</p>
        <button>Book Now</button>
      </div>
    `;
  });
  