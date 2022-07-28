import './index.css'

const Create = props => {
  const {details, color, toggledLike, onDelete} = props
  const {name, comment, timeObj, isLiked, id} = details
  const firstLetter = name.slice(0, 1)

  const clickedOnLike = () => {
    toggledLike(id)
  }

  const onDeleteClicked = () => {
    onDelete(id)
  }

  const likedImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeButtonColor = isLiked ? 'active-like' : ''

  const likeButtonText = isLiked ? 'Liked' : 'Like'
  return (
    <div className="comment-box">
      <div className="name-container">
        <p className={`name-circle ${color}`}>{firstLetter}</p>
        <p className="name">{name}</p>
        <p className="time">{timeObj}</p>
      </div>
      <p className="comment-typed">{comment}</p>
      <div className="like-container">
        <div className="like-box">
          <img
            src={likedImgUrl}
            className={`like-img ${likeButtonColor}`}
            onClick={clickedOnLike}
            alt="like"
          />
          <p className={`like-word ${likeButtonColor}`}>{likeButtonText}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          className="like-img"
          alt="delete"
          onClick={onDeleteClicked}
        />
      </div>
      <hr />
    </div>
  )
}

export default Create
