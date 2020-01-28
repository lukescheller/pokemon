
const PokeReducer = (state, action) => {
    switch (action.type) {
        case 'ALL_POKEMON':
            return [...state, {
                id: action.payload.id,
                name: action.payload.name,
                img: action.payload.img,
                types: action.payload.types
            }]
        default:
            return state
    }
}

export default PokeReducer