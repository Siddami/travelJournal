import '../index.css'

export default function locations(props){
    return(
        <section className='location'>
            <img src={`${props.image}`} className='location_img' />
            <div className='info'>
                <div className='place'>
                    <img src="/location.svg" alt="location_icon" className='icon' />
                    <p>{`${props.country}`}</p>
                    <a href="#">View on Google Maps</a>
                </div>
                <h1>{`${props.location}`}</h1>
                <div className='describe'>
                    <h3>{`${props.date}`}</h3>
                    <p>{`${props.description}`}</p>
                </div>
            </div>
        </section>
    )
}
