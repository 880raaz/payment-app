document.getElementById("paymentForm").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const upiId = document.getElementById("upiId").value;
    const amount = document.getElementById("amount").value;
  
    if (!upiId.includes("@")) {
      document.getElementById("responseMessage").textContent = "Invalid UPI ID!";
      return;
    }
  
    document.getElementById("responseMessage").textContent = "Processing payment...";
  
    // Simulating payment (replace with actual backend call)
    setTimeout(() => {
      document.getElementById("responseMessage").textContent = `₹${amount} sent to ${upiId} successfully!`;
    }, 2000);
  });
  