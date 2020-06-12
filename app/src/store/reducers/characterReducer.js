

const initialState = {
    name: "",
    birthday: "",
    image: "",
    nickname: "",
    portrayed: "",
    isFetching: false,
    error: ""
}

export const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_CHARACTER_START":
            return {
                ...state,
                isFetching: true
            }
        case "FETCH_CHARACTER_SUCCESS":
            return {
                ...state,
                name: action.payload.map(array => {return array.name}),
                birthday: action.payload.map(array => {return array.birthday}),
                image: action.payload.map(array => {return array.img}),
                nickname: `Nickname: ${action.payload.map(array => {return array.nickname})}`,
                portrayed: `Actor Name: ${action.payload.map(array => {return array.portrayed})}`,
                isFetching: false,
                error: ''

                
            }
        default:
            return state;
    }
}