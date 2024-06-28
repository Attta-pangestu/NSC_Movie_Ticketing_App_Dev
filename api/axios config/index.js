import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://app.sandbox.midtrans.com/snap/v1',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Basic ' + Buffer.from('SB-Mid-server-SS8AIdrIFyMHqE4oFTHrZehP').toString('base64'),
  },
});

export default instance;