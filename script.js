document.querySelector('form').addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get values from the form inputs
  const item = document.getElementById('floating_email').value;
  const tnxId = document.getElementById('floating_password').value;
  const amount = document.getElementById('floating_repeat_password').value;

  // Validate the inputs (you might want to add more validation logic here)
  if (!item || !tnxId || !amount) {
    alert('Please fill in all fields.');
    return;
  }
    const successMessage = document.createElement('p');
      successMessage.textContent = 'Transaction waiting to be signed.';
      successMessage.style.color = 'green';
      document.body.appendChild(successMessage);
    
  // If you're using Sui.js to interact with your smart contract:
  if (wallet) {
    try {
      const tx = {
        packageObjectId: '0xeb50c794fae73531b7d9f8e1d963e221f2fbecdd973de8793ae280fc91401df2',
        module: 'mycoin', 
        function: 'submit', 
        arguments: [item, tnxId, amount], //  Assuming your transfer function takes these arguments
        gasBudget: 900000000, //  Set your gas budget 
      };

      const result = await wallet.executeMoveCall(tx);
      console.log('Transaction result:', result);
      alert('Transfer initiated! Transaction ID: ' + result.txId);
    } catch (error) {
      console.error(error);
      alert('Error during transfer: ' + error.message);
    }
  } else {
    alert('Please connect your wallet first.');
  }
});
