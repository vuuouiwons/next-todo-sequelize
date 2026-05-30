import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
    value: number
}

type Action = {
    increment: () => void;
    decrement: () => void;
    reset: () => void;
    updateValue: (value: State['value']) => void
}

export const useCounterStore = create<State & Action>()(
    persist(
        set => ({
            value: 0,
            increment: () => set((state) => ({ value: state.value + 1 })),
            decrement: () => set((state) => ({ value: state.value - 1 })),
            reset: () => set({ value: 0 }),
            updateValue: (value) => set(() => ({ value }))
        }),
        { 'name': 'counterStore' }
    ),
);