import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Delete } from 'react-axios';
import './popup.css'

export default function PopupActor(props) {

  const [res, resData] = useState(props.props.res)
  const [age, setAge] = useState(null);
  const [show, setShow] = useState(null);

  //dob to age
  useEffect(() => {
    var today = new Date();
    var birthday = new Date(res.birthday);
    var age = today.getFullYear() - birthday.getFullYear();
    var m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }
    setAge(age);
  }, [])
  useEffect(() => {
    axios.get(`https://api.tvmaze.com/people/${res.id}/castcredits?embed=show`)
      .then((data) => {
        setShow(data.data)
      });

  }, []);

  const close = () => {
    props.props.notDisplay();
    // setShow(null);
    setAge(null)


  }


  return (
    <div>
      <div className='popup'>
        <div className='popup-inner'>
          <div className='Image'>
            {res.image === null && <img className='image' src='/no_image.jpg'></img>}
            {res.image !== null && <img src={res.image.medium}></img>}
          </div>
          <div className='info'>
            <h3>{res.name}</h3>
            <div className='text'>
              {res.gender !== null && <div className='text'>gender : {res.gender}</div>}
              {res.country !== null && <div className='text'>country : {res.country.name}</div>}

              {res.birthday !== null && <div className='text'>birthday : {res.birthday}</div>}
              {res.deathday !== null && <div className='text'>deathday : {res.deathday}</div>}
              {res.birthday !== null && <div className='text'>Age : {age}</div>}
              
              <br></br>
              {console.log(show)}
              {show !== null && (
                show.length > 0 &&
                <div className='text'>Show :- {
                  //show[0]._embedded.show.name
                  // <ul>
                    show.map((data) =>(
                     
                     <div>{data._embedded.show.name}</div>

                    ))

                  // </ul>
                    
                
                }</div>)}
              {/* {show.length > 0 && console.log(show[0]._embedded.show.name)} */}
              {/* {show[0]._embedded.show.name !== null && <h1>sucess</h1>} */}
              {/* <h1>{show[0]._embedded.show.name}</h1> */}
              {/* {show[0]._embedded.show} */}
              <button className='btnpop' onClick={close}>X</button>


            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
