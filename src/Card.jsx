import locationIcon from "./icons8-taxi-location-96.png"

function Card(props){

    return(
        <div className={"card"}>

            <div>
                <img style={{borderRadius:"25px 25px 25px 25px",width:"300px",height:"350px"}} src={props.imageUrl} alt=""/>
            </div>

            <div>
                <div className={"location-info"}>
                    <img style={{width:"3%", alignSelf:"center"}} src={locationIcon} alt=""/>
                    <div> <h2>{props.location}</h2></div>
                </div>
                <a href={props.googleMapsUrl}>View on Google Maps</a>

                <div style={{paddingLeft:"40px"}}>
                    <div> <h1> {props.title}</h1></div>
                    <div> <h3> {props.startDate}</h3></div>
                    <p>{props.description}</p>
                </div>

            </div>


        </div>
    )


}

export default Card;