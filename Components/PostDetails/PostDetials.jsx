import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { PhotoProvider, PhotoView } from 'react-photo-view';
export default function PostDetails(props) {
  const { title, description, category, image, ratingRate, ratingCount, id, price } = props;
  return (
    <React.Fragment>
      <Box ml={10} mb={12}>
        <Card id='postCard' style={{ height: "auto", width: "70%", margin: "auto" }}>
        <PhotoProvider>
          <PhotoView src={image}>
            <CardMedia
              style={{ padding: "10px", borderRadius: "22px" }}
              component="img"
              image={image}
              alt="Product"
              height={"380"}
            />
          </PhotoView>
        </PhotoProvider>
          <CardContent>
            <Typography paragraph>
              <span style={{ color: "#26C6B5", margin: "0 5px" }}>  Category: </span> {category}
            </Typography>
            <Typography paragraph>
              <span style={{ color: "#26C6B5", margin: "0 5px" }}>  Title: </span> {title}
            </Typography>
            <Typography paragraph>
              <span style={{ color: "#26C6B5", margin: "0 5px" }}>  Description: </span> {description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Box display={"flex"} my={2} > <LocalOfferIcon style={{ color: "#26C6B5", margin: "0 5px" }}></LocalOfferIcon> ${price} </Box>
            <Box display={"flex"} mx={2} > <GradeIcon style={{ color: "yellow", margin: "0 5px" }}></GradeIcon> {ratingRate} </Box>
            <Box display={"flex"} mx={2}> <FeedbackIcon style={{ color: "#26C6B5", margin: "0 5px" }}> </FeedbackIcon> {ratingCount} </Box>
          </CardActions>
        </Card>
      </Box>
    </React.Fragment>
  );
}

