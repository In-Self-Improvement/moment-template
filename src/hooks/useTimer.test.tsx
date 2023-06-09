import {renderHook, act} from '@testing-library/react-native';
import useTimer from './useTimer';

describe('useTimer', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
    jest.useRealTimers();
  });

  test('should initialize correctly', async () => {
    const {result} = renderHook(() => useTimer(60));
    expect(result.current.time).toBe('00:01:00');
  });

  test('should start the timer', () => {
    const {result} = renderHook(() => useTimer(60));

    act(() => {
      result.current.start();
    });
    act(() => {
      jest.advanceTimersByTime(1000); // 1초 경과
    });

    expect(result.current.time).toBe('00:00:59');
  });

  test('should restart the timer', () => {
    const {result} = renderHook(() => useTimer(60));

    act(() => {
      result.current.restart();
      jest.advanceTimersByTime(1000); // 1초 경과
    });

    expect(result.current.time).toBe('00:00:59');
  });
});
