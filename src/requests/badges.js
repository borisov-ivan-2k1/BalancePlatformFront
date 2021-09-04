import axios from './axios';

export const getBadgesRequest = (userId) => axios.get(`/User/Badges`, { params: { userId } });
