import React, { useReducer } from 'react';
import filterReducer, { initialState } from '../reducers/filter';

const FilterContext = React.createContext({});

const FilterProvider = ({ children }) => {
    const [filter, dispatch] = useReducer(filterReducer, initialState);
    const toggle = value => dispatch({ type: 'filter/toggle', payload: value })
    const remove = value => dispatch({ type: 'filter/remove', payload: value })
    return (
        <FilterContext.Provider value={{ filter, toggle, remove }}>
            {children}
        </FilterContext.Provider>
    );
};

export { FilterProvider, FilterContext };