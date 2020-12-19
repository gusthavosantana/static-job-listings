export const initialState = {
    items: []
}
export default function FilterReducer(state = initialState, action) {
    switch(action.type) {
        case 'filter/toggle':
            console.log('toggle');
            const value = action.payload;
            const filterValue = state.items;
            const currentValue = filterValue.includes(value) 
                ? filterValue.filter(v => v !== value)
                : [...filterValue, value];
            return { items: currentValue };
        case 'filter/remove':
            return { items: state.items.filter(v => v !== action.payload) }
        default:
            return state;
    }
}