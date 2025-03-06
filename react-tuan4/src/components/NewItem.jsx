import './NewItem.css'
export default function NewItem({image, name, time}){

    return(
        <div class="item">
            <img class="image" src={image} alt="" />
            <div class="content">
                <div class="info">
                    <p>{name}</p>
                    <div class="time">{time}</div>
                </div>
                <img src="https://res.cloudinary.com/dne3wt0ys/image/upload/v1741261402/Icon_Button_73_dax8u2.png" alt="" />
            </div>
            
        </div>
    )
}