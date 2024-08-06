import comments from '../data/comments';

function Comments(){
    return (
        <div>
          {comments.map(comment => (
            <div key={comment.id}>
              <h2>{comment.postedBy}</h2>  
              <p>{comment.date} AT {comment.time}</p>
              <p>{comment.content}</p>
              <a href='#'>Reply</a>
            </div>
          ))}
        </div>
      );
}

export default Comments;