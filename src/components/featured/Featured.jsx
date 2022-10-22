import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./featured.scss"

const Featured = ({type}) => {
  return (
      <div className="featured">
          {type && (
              <div className="category">
                  <span>{type === "movie" ? "Movies" : "Series"}</span>
                  <select name="genre" id="genre">
                      <option>Genre</option>
                      <option value="adventure">Adventure</option>
                      <option value="comedy">Comedy</option>
                      <option value="crime">Crime</option>
                      <option value="fantasy">Fantasy</option>
                      <option value="historical">Historical</option>
                      <option value="horror">Horror</option>
                      <option value="romance">Romance</option>
                      <option value="sci-fi">Sci-fi</option>
                      <option value="thriller">Thriller</option>
                      <option value="western">Western</option>
                      <option value="animation">Animation</option>
                      <option value="drama">Drama</option>
                      <option value="documentary">Documentary</option>
                    </select>
              </div>
          )}
          <img src="" alt="" />
          <div className="info">
              <img src="" alt="" />
              <span className="desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Placeat nemo, aperiam odit sit voluptatem corrupti consectetur
                  impedit ipsam eos fuga sequi velit eveniet. Ipsa adipisci
                  magnam perferendis aut provident repudiandae!
              </span>
              <div className="buttons">
                  <buttons className="play">
                      <PlayArrow />
                      <span>Play</span>
                  </buttons>
                  <buttons className="more">
                      <InfoOutlined />
                      <span>Info</span>
                  </buttons>
              </div>
          </div>
      </div>
  );
}

export default Featured