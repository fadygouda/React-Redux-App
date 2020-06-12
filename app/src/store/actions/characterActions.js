import axios from 'axios'


export const fetchCharacter = () => {
    return dispatch => {
        dispatch({ type: "FETCH_CHARACTER_START" });
        axios
            .get('https://www.breakingbadapi.com/api/character/random')
            .then(res => {
                console.log(res.data);
                const response = res.data.map(array => {
                    
                    console.log(array)
                    return array
                        // array.birthday,
                        // array.occupation,
                        // array.image,
                        // array.nickname,
                        // array.portrayed,
                        // array.error
                        
                });
                console.log(response)
                dispatch({ type: "FETCH_CHARACTER_SUCCESS", payload: response
            })})
            .catch(err => console.log(err))
            
        }

}
    