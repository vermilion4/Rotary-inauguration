var openModalBtns = document.querySelectorAll(".open-modal-btn");
var modal = document.getElementById("modal");
var amountField = document.getElementById("js-amount");

// Loop through each button and attach click event listener
openModalBtns.forEach(function(btn) {
  btn.addEventListener("click", function() {
      // Set the amount in the modal form to the data-amount attribute of the clicked button
      amountField.value = this.dataset.amount;
      modal.style.display = "block";
  });
});

// Add event listener to document object
document.addEventListener("click", function(event) {
  // Check if the clicked element is outside of the modal
  if (event.target == modal) {
    // Close the modal
    modal.style.display = "none";
  }
});
