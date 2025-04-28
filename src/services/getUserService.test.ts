import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getUserService } from './getUserService';
import api from '../api/axios';

vi.mock('../api/axios', () => ({
  default: {
    get: vi.fn(),
  },
}));

describe('getUserById', () => {
  const mockUser = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return a single user', async () => {
    const getMock = vi.mocked(api.get);
    getMock.mockResolvedValueOnce({ data: mockUser });

    const result = await getUserService(1);

    expect(result).toStrictEqual(mockUser);
    expect(getMock).toHaveBeenCalledWith('/users/1');
    expect(getMock).toHaveBeenCalledTimes(1);
  });

  it('should throw an error when user is not found', async () => {
    const error = {
      response: {
        status: 404,
        data: { message: 'User not found' },
      },
    };
    const getMock = vi.mocked(api.get);
    getMock.mockRejectedValueOnce(error);

    await expect(getUserService(999)).rejects.toStrictEqual(error);
    expect(getMock).toHaveBeenCalledWith('/users/999');
  });

  it('should throw an error when network request fails', async () => {
    const error = new Error('Network error');
    const getMock = vi.mocked(api.get);
    getMock.mockRejectedValueOnce(error);

    await expect(getUserService(1)).rejects.toStrictEqual(error);
    expect(getMock).toHaveBeenCalledWith('/users/1');
  });

  it('should throw an error when invalid id is provided', async () => {
    const getMock = vi.mocked(api.get);
    await expect(getUserService()).rejects.toThrow('Invalid user ID');
    expect(getMock).not.toHaveBeenCalled();
  });

  it('should throw an error when response data is invalid', async () => {
    const getMock = vi.mocked(api.get);
    getMock.mockResolvedValueOnce({
      data: { id: 1 },
    });

    await expect(getUserService(1)).rejects.toThrow('Invalid user data');
  });
});
