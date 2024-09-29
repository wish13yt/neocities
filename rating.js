var form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the rating value.
  var rating = event.target.querySelector('input[name="rating"]').value;

  // Send the rating to the server.
  // ...

  // Redirect the user to a different page.
  window.location.href = '/thank-you.html';
});
