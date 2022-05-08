import { Box } from '@material-ui/core';
import { Pagination, Rating } from '@material-ui/lab';
import React from 'react';
import './reviews.scss';

export default function Reviews({ reviewsData }) {
  return (
    <Box className="reviewWrapper">
      <h2 className="titleReview">Customer Reviews</h2>

      {reviewsData ? (
        <Box>
          {reviewsData.map((review, index) => (
            <Box key={index}>
              <Box className="reviwewContentWrapper">
                <img
                  className="avatarPersonReview"
                  src={
                    review.userReview.avatar ||
                    'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
                  }
                  alt="review"
                />
                <Box className="reviewInfo">
                  <h3 className="namePersonReview">{review.userReview.username}</h3>
                  <Rating readOnly name="simple-controlled" value={review.rating} />
                  <p className="reviewConent">{review.content}</p>
                  <p className="reviewDate">{review.createdAt}</p>
                </Box>
              </Box>
              <div className="horizontalLine"></div>
            </Box>
          ))}

          <Pagination
            shape="rounded"
            color="primary"
            className="myInfo-order-pagination"
            count={Math.ceil(reviewsData.length / 5)}
            defaultPage={1}
            boundaryCount={3}
          />
        </Box>
      ) : (
        <h3 className="namePersonReview">Don`t have any comment yet!</h3>
      )}
    </Box>
  );
}
