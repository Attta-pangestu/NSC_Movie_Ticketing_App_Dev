
import axios from 'axios';

const snapBaseUrl = 'https://app.sandbox.midtrans.com/snap/v1';
const serverKey = 'SB-Mid-server-SS8AIdrIFyMHqE4oFTHrZehP'; 

export async function createSnapTransaction(orderId, grossAmount) {
  try {
    const transactionDetails = {
      transaction_details: {
        order_id: orderId,
        gross_amount: grossAmount,
      },
    };

    const response = await axios.post(
      `${snapBaseUrl}/transactions`,
      transactionDetails,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Basic ${btoa(serverKey)}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error creating Snap transaction:', error);
    throw error;
  }
}
