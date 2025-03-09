import { Link } from "react-router-dom";

import Post from "../types/Post";

interface Props {
    postData:Post
}

const SinglePost = ({postData}: Props) => {
    const desc = (postData.body.length >= 50) ? postData.body.substr(0, 50) + '...' : postData.body

    return ( 
        <article className="card bg-base-100 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{postData.title}</h2>
                <p>{desc}</p>
                <div className="card-actions justify-end">
                    <Link to={`/post/${postData.id}`}>
                        <button className="btn btn-primary">Detail</button>
                    </Link>
                </div>
            </div>
        </article>
    );
}
 
export default SinglePost;