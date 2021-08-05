import style from './Card.module.css'

const Card: React.FC = (props) => {


    return <div className= {style.card}>{props.children}</div>
}

export default Card;