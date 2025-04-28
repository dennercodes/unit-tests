import { describe, it, expect } from 'vitest';
import { useUser, UserProvider } from '../context/UserContext';
import { renderHook, waitFor, act } from '@testing-library/react';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <UserProvider>{children}</UserProvider>;
};

describe('useUser', () => {
  it('should return the user', () => {
    const { result } = renderHook(() => useUser(), { wrapper: Wrapper });

    expect(result.current.user).toBe(null);
  });

  it('should throw an error when used outside of a UserProvider', async () => {
    const { result } = renderHook(() => useUser(), { wrapper: Wrapper });

    act(() => {
      result.current.setUser({ id: 1, name: 'John Doe', email: 'john.doe@example.com' });
    });

    await waitFor(() => {
      expect(result.current.user).toBeDefined();
      expect(result.current.user?.id).toBe(1);
      expect(result.current.user?.name).toBe('John Doe');
      expect(result.current.user?.email).toBe('john.doe@example.com');
    });
  });
});
