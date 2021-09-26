import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteBucket, updateBucket } from "./redux/modules/bucket";
import Button from "@material-ui/core/Button";

const Detail = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const bucket_index = params.index;
  const bucket_list = useSelector((state) => state.bucket.list);

  return (
    <div>
      <h1>{bucket_list[bucket_index].text}</h1>
      <Button
        onClick={() => {
          dispatch(updateBucket(bucket_index));
        }}
      >
        완료하기
      </Button>
      <Button
        onClick={() => {
          console.log("삭제하기 버튼을 눌렀어!");
          dispatch(deleteBucket(bucket_index));
          history.goBack();
        }}
      >
        삭제하기
      </Button>
    </div>
  );
};

export default Detail;
