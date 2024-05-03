import l from './styles/Card.module.css'
import TextComponent from './TextComponent'
export default function CardWrapper({title}){

    return<div className={l.card}>
        
        <TextComponent>{title}</TextComponent>
    </div>
} 