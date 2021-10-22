import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Card.module.css';

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className={classes.components}>
        <div id="closeIcon" className="row">
            <button onClick={onClose} className={classes.buttonNew}>X</button>
        </div>
        <div className="card-body">
          <Link to={`/ciudad/${id}`} style={{ textDecoration: 'none' }}> 
          <h5 className={classes.header}>{name}</h5>
          </Link><hr />
          <div className={classes.tempGlobal}>
            <div className={classes.temp}>
              <p>Min</p>
              <p>{min}°</p>
            </div>
            <div className={classes.temp}>
              <p>Max</p>
              <p>{max}°</p>
            </div>
            <div className={classes.temp}>
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
          
        </div>
      </div>
    );
};
