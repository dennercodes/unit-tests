import api from '../api/axios';

interface User {
  id: number;
  name: string;
  email: string;
}

const PATH = '/users';

export const getUserService = async (userId?: number): Promise<User> => {
  if (userId === undefined) {
    throw new Error('Invalid user ID');
  }

  const url = `${PATH}/${String(userId)}`;

  const { data } = await api.get<User>(url);

  if (!data.id || !data.name || !data.email) {
    throw new Error('Invalid user data');
  }

  return data;
};
