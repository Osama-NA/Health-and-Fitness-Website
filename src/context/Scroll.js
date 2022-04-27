import { createContext, useReducer } from 'react';

const SAME_PAGE_SCROLL = 'SAME_PAGE_SCROLL';
const initialState = false;

const reducer = (state, action) => {
    switch (action.type) {
        case SAME_PAGE_SCROLL:
            return !state;
        default:
            return state;
    }
}

export const ScrollContext = createContext(initialState);

export const ScrollProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const samePageScroll = () => dispatch({ type: SAME_PAGE_SCROLL })

    return (
        <ScrollContext.Provider value={{
            scroll: state,
            samePageScroll
        }}>
            {children}
        </ScrollContext.Provider>
    );
}