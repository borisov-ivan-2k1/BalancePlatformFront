import axios from './axios';

export const getGroupsRequest = () => axios.get(`/groups/list`);
export const createGroupRequest = (data) => axios.post(`/groups/create`, data);