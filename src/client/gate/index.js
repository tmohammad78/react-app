import axios from './api';
const key = '890d958f-9e64-4211-a2fa-d732c7a3920f';
export const foodList = (payload) => axios.get(`/menu/${key}`, payload);
