import React, { useEffect, useState } from "react";
import { dbService } from "../fbBase";
import Tweet from "../components/Tweet";

import TweetFactory from "../components/TweetFactory";
import Profile from "./Profile";

const Home = ({ userObj, refreshUser, ProClick }) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    dbService.collection("tweets").onSnapshot((snapshot) => {
      const tweetArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTweets(tweetArr);
    });
  }, []);

  return (
    <>
      {ProClick && (
        <div style={{ position: "absolute", top: "0", height: "20%" }}>
          <div style={{ overflow: "hidden", backgroundColor: "red" }}>
            <Profile userObj={userObj} refreshUser={refreshUser} />
          </div>
        </div>
      )}
      <div className="container">
        <TweetFactory userObj={userObj} />
        <div style={{ marginTop: 30 }}>
          {tweets.map((tw) => (
            <Tweet
              key={tw.id}
              tweetObj={tw}
              isOwner={tw.creatorId === userObj.uid}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
