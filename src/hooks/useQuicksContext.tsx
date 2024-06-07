import { useContext } from 'react';

import { type InitialState, QuicksContext } from '../context';

const useQuicksContext = (): InitialState => useContext(QuicksContext);

export default useQuicksContext;
