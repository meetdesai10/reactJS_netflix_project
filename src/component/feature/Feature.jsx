import React from "react";
import "./Feature.scss";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";
export default function Feature({type}) {
  return (
    
    <div className="feature">
    {
        type && (
            <div className="category">
                <span>{type === "series"? "Series" : "Movies"}</span>
                <select name="type" id="type">
                    <option>--select--</option>
                    <option value="adventure">adventure</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="rommance">rommance</option>
                    <option value="sci-fi">Sci-Fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="drama">Drama</option>
                </select>
            </div>
        )
    }
      <img
        src="https://ntvb.tmsimg.com/assets/p10700229_b_h10_aa.jpg?w=960&h=540"
        alt=""
        className="backgroundImage"
      />
      <div className="info">
        <img src="./public/vampire.png" alt="" />
      <div className="des">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
        beatae placeat quam voluptatibus tempore, voluptas eos repellendus
        corrupti at praesentium reiciendis quas neque dolorum amet similique
        fuga quidem? Eum, enim?
      </div>
      <div className="buttons">
        <div className="play">
          <PlayArrow />
          <span>Play</span>
        </div>
        <div className="more">
            <InfoOutlined/>
            <span>info</span>
        </div>
      </div>
      </div>
    </div>
  );
}
