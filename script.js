// Select the form and input fields
const searchForm = document.getElementById('search-form');
const destinationInput = document.getElementById('destination');
const checkInInput = document.getElementById('check-in');
const checkOutInput = document.getElementById('check-out');

// Handle form submission
searchForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    const destination = destinationInput.value.trim();
    const checkIn = checkInInput.value;
    const checkOut = checkOutInput.value;

    // Validate the inputs
    if (!destination || !checkIn || !checkOut) {
        alert('Please fill out all fields.');
        return;
    }

    // Check if check-out date is after check-in date
    if (new Date(checkOut) <= new Date(checkIn)) {
        alert('Check-out date must be after the check-in date.');
        return;
    }

    // Show a success message
    alert(`Searching for trips to ${destination} from ${checkIn} to ${checkOut}.`);
});