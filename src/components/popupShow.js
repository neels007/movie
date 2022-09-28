import React from 'react'
import './popup.css'


export default function PopupShow(props) {
    return (
        <div>
                {console.log(props.props)}
     
            <div className='popup'>
                <div className='popup-inner'>
                    <div className='closeEnd'>
                    <button className='btnpop' onClick={props.props.notDisplay}>X</button>
                    </div>
                    <div className='Image'>
                        {props.props.res.image === null && <img className='image' src='/no_image.jpg'></img>}
                        {props.props.res.image !== null && <img src={props.props.res.image.medium}></img>}
                    </div>
                    <div className='info'>
                        <h3>{props.props.res.name}</h3>
                        <div className='text'>language : {props.props.res.language}</div>
                        {props.props.res.network !== null && <div className='text'>Channel : {props.props.res.network.name}</div>}
                        {props.props.res.network !== null && <div className='text'>Country : {props.props.res.network.country.name}</div>}
                        {props.props.res.schedule.time !== "" && <div className='text'>Time : {props.props.res.schedule.time}</div>}
                        {props.props.res.rating.average !== null && <div className='text'> Rating : {props.props.res.rating.average}</div>}
                        {props.props.res.status !== null && <div className='text'>status : {props.props.res.status}</div>}
                        {props.props.res.premiered !== null && <div className='text'>premiered : {props.props.res.premiered}</div>}
                        {props.props.res.runtime !== null && <div className='text'>runtime : {props.props.res.runtime}</div>}
                        {props.props.res.genres.length > 0 && <div className='text'>genres : {props.props.res.genres + "   "}</div>}
                    </div>

                </div>

            </div>

        </div>
    )
}
