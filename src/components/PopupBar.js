import React, { useEffect, useState } from 'react'
import './popup.css'
import PopupShowCheck from './PopupShowCheck'
import PopupActor from './PopupActor'



export default function PopupBar(props) {
    // const [pop,setPop]=useState(props)



    return (
        <>
            {props.res != null && (

                props.isShow && (
                    <PopupShowCheck res={props.res} notDisplay={props.notDisplay} ></PopupShowCheck>)

            )}

            {props.res != null && (

                props.isActor && (
                    <PopupActor props={props}></PopupActor>)

            )}



        </>
    )
}
