import React from 'react';
import styled from 'styled-components';

let Component = styled.div`
`;
  let ImgTweet = styled.img`
    width: 100%;
    height: 297px;
    margin-top:1em;
    border-radius: 15px;
  `;
function ImageTweet({src}){
          return (
        <Component>

            <ImgTweet
              src={src}
              alt=""
            />

        </Component>
          )
}

export default ImageTweet;
