import React from 'react';
import maleImage from '../../assets/male.png';
import femaleImage from '../../assets/female.png';

const Item = (props) => {
  return (
    <li>
      {props.name ? <h3><span>Name:</span> {props.name}</h3>: null}
      <div className="gender">
        <span>Gender:</span>
        <figure>
          {props.gender === 'Male' ?
            <img src={maleImage}  alt="Male" />
          :
            <img src={femaleImage} alt="Female" />
          }
        </figure>
      </div>
      <p><span>Culture:</span> {props.culture? props.culture: "-"}</p>
      {props.aliases[0] !== '' ? <p><span>Also, known as:</span> {props.aliases.join(", ")}</p> : null}
      {props.playedBy[0] !== '' ? <p><span>playedBy:</span> {props.playedBy}</p> : null}
    </li>
  )
}

export default Item
