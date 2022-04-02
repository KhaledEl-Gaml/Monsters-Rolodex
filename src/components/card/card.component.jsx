import './card.styles.css'

const Card = ({m})=> {
    const {id , name ,email} = m
    return(
        <div className='card-container' key={id}>
        <img 
            src={`https://robohash.org/${id}?set=set2&size=180x180`} 
            alt={`${name}`} 
        />
        <h1>{name}</h1> 
        <h1 className='mail'>{email}</h1>   
    </div>
    )
   
}

 
export default Card;