import Post from "../Post/Post"
import "./feed.css";
import { Posts } from "../../dummyData";
import { URL_API } from "../../helper/url";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}