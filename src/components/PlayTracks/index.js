import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const PlayTracks = props => {
  const {eachDetails, sendDelTrack} = props

  const {name, genre, duration, imageUrl, id} = eachDetails
  const deletePlayTrack = () => {
    sendDelTrack(id)
  }

  return (
    <li>
      <div className="img-name-genre">
        <img src={imageUrl} className="playTrack-img" alt="track" />
        <div>
          <p>{name}</p>
          <p>{genre}</p>
        </div>
      </div>
      <div className="img-name-genre">
        <p>{duration}</p>

        <AiOutlineDelete className="icon-edit" onClick={deletePlayTrack} />
      </div>
    </li>
  )
}

export default PlayTracks
