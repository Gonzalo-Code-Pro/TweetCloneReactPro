import React from "react";
import styled from "styled-components";
import HeaderHome from "../molecula/Headers/HeaderHome";
import TwitterInput from "../organismos/TwitterInput";
import Tweet from "../organismos/Tweet";
function CenterTwitter() {
  let CenterTwitter = styled.div`
    height: 100vh;
    position: sticky;
    overflow: auto;
    ::-webkit-scrollbar {
      display: none;
    }
  `;
  let ListTweets = styled.div``;
  let space = {
    minHeight: "10px",
    border: "1px solid rgb(247, 247, 247)",
  };
  return (
    <CenterTwitter>
      <HeaderHome />
      <TwitterInput />
      <div style={space}></div>
      <ListTweets>
        <Tweet src="https://pbs.twimg.com/media/EvHWk1XWYAECllI?format=png&name=small" type="imageTweet"/>
        <Tweet src="https://pbs.twimg.com/media/EvHU5_IXYAMoYKY?format=png&name=small" type="imageTweet"/>
        <Tweet src="https://pbs.twimg.com/media/EvHUUxOXEAAD1wb?format=jpg&name=large" type="descriptionTweet"/>
        <Tweet src="https://pbs.twimg.com/media/EvHALXNXMAEacpx?format=jpg&name=medium" type="descriptionTweet"/>
        <Tweet src="https://elcomercio.pe/resizer/roA98JW6qBs1xsNdSU5P5a3uy-s=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/63FEGNZUIRCK3DE3M4XCWJQSO4.jpg"
type="descriptionTweet"/>
        <Tweet src="https://pbs.twimg.com/media/EvHALXNXMAEacpx?format=jpg&name=medium" type="descriptionTweet"/>
      </ListTweets>
    </CenterTwitter>
  );
}
export default CenterTwitter;
