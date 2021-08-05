import styles from './Voters.module.css';
import Voter from './Voter/index'
import { useSelector } from 'react-redux';
import {RootState} from '../../store/store'
//import VoteSlice, {VOTER_STATE_TYPE} from '../../store/vote-reducer';

const Voters = () => {

    const votes = useSelector<RootState>(state  => state.voteCounter)

    return (
        <div className = {styles.container}>
            
            <div>Total votes {votes} </div>
            <Voter name={'Aarna'}/>
            <Voter name={'Juhi'}/>
            <Voter name={'Binay'}/>
        </div>
    )

}


export default Voters;