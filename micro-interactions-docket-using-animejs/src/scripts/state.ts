import { createMachine } from 'xstate'


type ToggleEvent = {
    type: 'TOGGLE';
};

//State Machine
export const toggleMachine = createMachine<ToggleEvent>({
    id: 'toggleButton',
    initial: 'idle',
    states: {
        idle: {
            on: {TOGGLE: 'active'},
        },
        inactive: {
            on: {TOGGLE: 'active'},
        },
        active: {
            on: {TOGGLE: 'inactive'},
        },
    },
});