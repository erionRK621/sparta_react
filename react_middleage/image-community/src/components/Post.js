import React from "react";

const Post = (props) => {
  return (
    <React.Fragment>
      <div>user profile/ user name / insert_dt / is_me(edit btn)</div>
      <div>contents</div>
      <div>image</div>
      <div>comment cnt</div>
    </React.Fragment>
  );
};

Post.defaultProps = {
  userinfo: {
    user_name: "rookie",
    user_profile:
      "https://blog.kakaocdn.net/dn/bTEhUV/btqECug9iOs/mxgZUk4MLJVCK3xtcNe6NK/img.jpg",
  },
  image_url:
    "https://blog.kakaocdn.net/dn/bTEhUV/btqECug9iOs/mxgZUk4MLJVCK3xtcNe6NK/img.jpg",
  contents: "강아지네요",
  comment_ctn: 10,
  insert_dt: "2021-09-30 10:00:00",
};
export default Post;
