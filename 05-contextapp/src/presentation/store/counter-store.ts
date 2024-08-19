export interface CounterState {
  count: number;
  incrementBy: (value: number) => void;
}