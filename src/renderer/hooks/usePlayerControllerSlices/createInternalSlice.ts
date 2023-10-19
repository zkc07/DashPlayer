import { StateCreator } from 'zustand/esm';
import { InternalSlice } from './SliceTypes';

const createInternalSlice: StateCreator<
    InternalSlice,
    [],
    [],
    InternalSlice
> = () => ({
    internal: {
        lastSeekToOn: 0,
        exactPlayTime: 0,
        subtitleIndex: new Map(),
    },
});

export default createInternalSlice;
