import './PhotoInput.css';

export default function Photo(props){
    
    return (
        <div className = "photo-container">
            <img alt='Something went wrong!' src={props.source} />
        </div>
    )
}