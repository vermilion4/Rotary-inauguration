
  // Function to handle the webhook notification
  function handleWebhookNotification(payload) {
    // Process the payload data received from the webhook
    // For example, you can log the payload data to the console
    console.log('Webhook notification received:', payload);
    // Perform any other actions or logic as needed
  }

  function sendWebhookNotification(payload) {
    const webhookURL = 'https://dgifys-installation2023/v1/tickets?wait=true';
    const secretKey = 'B6aKuOZ4espx1ZmYKYn1';
  
    // Make an HTTP POST request to the webhook URL
    fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Webhook-Secret-Key': secretKey
      },
      body: JSON.stringify(payload)
    })
      .then(response => {
        if (response.ok) {
          console.log('Webhook notification sent successfully');
        } else {
          throw new Error('Failed to send webhook notification');
        }
      })
      .catch(error => {
        console.error('Failed to send webhook notification:', error);
      });
  }

  // Event listener for payment button click
  const paymentButtons = document.querySelectorAll('.interswitch-btn2');
  paymentButtons.forEach(button => {
    button.addEventListener('click', function (event) {
      // event.preventDefault();

      // Extract relevant information from the button and its parent container
      // const paymentId = button.getAttribute('id');
    
      const amountElement = button.parentElement.parentElement.parentElement.firstElementChild.querySelector('.price b');
      const amount = amountElement.textContent.trim();

      // Prepare the payload for the webhook notification
      const payload = {
        // paymentId: paymentId,
        amount: amount,
        event: "LINK.TRANSACTION_SUCCESSFUL"
        // Include any other relevant data as needed
      };

      // Send the webhook notification
      sendWebhookNotification(payload);
    });
  });