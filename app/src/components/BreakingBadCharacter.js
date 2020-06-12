import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'
import { fetchCharacter } from '../store/actions/characterActions'


const BreakingBadCharacter = props => {
    console.log(props);
    useEffect(() => {
        props.fetchCharacter();

    }, []);

    // if (props.isFetching) {
    //     return <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />

    
    return (
        <div>
            <h1>Breaking Bad Characters</h1>
            {props.isFetching && (
                <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
            )}

            {props.name && <h3>{props.name}</h3>}
            {props.birthday && <p>{props.birthday}</p>}
            {props.image && <img src= {props.image} alt=""/>}
            {props.nickname && <p>{props.nickname}</p>}
            {props.portrayed && <p>{props.portrayed}</p>}
            {props.error && <p>{props.error}</p>} 
            <button onClick={props.fetchCharacter}>Fetch a new Character</button>
        </div>
    );
};

const mapStateToProps = state => {
    console.log(state);
    return {

        name: state.characterReducer.name,
        birthday: state.characterReducer.birthday,
        image: state.characterReducer.image,
        nickname: state.characterReducer.nickname,
        portrayed: state.characterReducer.portrayed,
        isFetching: state.characterReducer.isFetching,
        error: state.characterReducer.error        
    }
}

export default connect(mapStateToProps,{ fetchCharacter })(BreakingBadCharacter); 