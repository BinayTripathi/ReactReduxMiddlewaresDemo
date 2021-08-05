import styles from './index.module.css'
import { voteActions } from '../vote-reducer';
import Card from '../../UI/card/Card'
import { useState } from 'react';

import {useDispatch} from 'react-redux';
const Voter: React.FC<{name: string}> = (props) =>  {

    const [upVotebuttonClicked, setupVotebuttonClicked] = useState<boolean>(false);
    const [downVotebuttonClicked, setdownVotebuttonClicked] = useState<boolean>(false);

    const dispatch = useDispatch();

    const addVoteHandler= () => {
        dispatch(voteActions.upvote())
        setupVotebuttonClicked(true);
        setdownVotebuttonClicked(false)
    }

    const reduceVoteHandler= () => {
        dispatch(voteActions.downvote())
        setupVotebuttonClicked(false);
        setdownVotebuttonClicked(true)
    }

return (
     <Card>
        <div><strong>{props.name}</strong></div>
        <div className = {styles.div_button}>
        <button onClick = {addVoteHandler} className = {upVotebuttonClicked ? styles.clicked : styles.unclicked}> Add vote </button>
        <button onClick = {reduceVoteHandler} className = {downVotebuttonClicked ? styles.clicked : styles.unclicked}>Reduce vote</button>
        </div>
     </Card>

    )
}

export default Voter;