import "./rightbar.css";
import { Users } from "../../dummyData";

export default function Rightbar() {
  const HomeRightbar = () => {
    return (
      <>
        <img className="rightbarAd" src="assets/ads/ads1.jpg" alt="" />
        <img className="rightbarAd" src="assets/ads/ads2.jpg" alt="" />
        <img className="rightbarAd" src="assets/ads/ads3.jpg" alt="" />
        <img className="rightbarAd" src="assets/ads/ads4.jpg" alt="" />
        <img className="rightbarAd" src="assets/ads/ads5.jpg" alt="" />
        <h4 className="rightbarTitle">LIST TOP PHOTOGRAPHERS</h4>
        <h2 className="rightbarSeeAll">See All</h2>
        <hr className="rightbarHr" />
        <ul className="rightbarFriendList">
          {/* {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))} */}
        </ul>
        
        
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <HomeRightbar/>
      </div>
    </div>
  );
}