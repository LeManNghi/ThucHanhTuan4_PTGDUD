export default function NewItem({image, name, time}){
    return(
        <div>
            <img height='100px' width='100px' src={image} alt="" />
            <p>{name}</p>
            <p>{time}</p>
        </div>
    )
}