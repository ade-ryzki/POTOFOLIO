import "./homepage.css"
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Header from "../../components/Header";

export default function Homepage() {
  return (
    <>
            <Header/>
            <div className="homepage">    
                <div className="homeFeedSidebar">
                    <Feed/>
                    <Rightbar/>
                </div>
            </div>
        </>
  )
}
