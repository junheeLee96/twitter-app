import React, { useEffect, useState } from "react";
import { dbService } from "../fbBase";
import Tweet from "../components/Tweet";
import TweetFactory from "../components/TweetFactory";

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
