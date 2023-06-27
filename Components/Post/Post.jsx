import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Box, Button } from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from "next/link";
import CategoryIcon from '@mui/icons-material/Category';
export default function Post(props) {
  const {  category, image, ratingRate, ratingCount, id , price} = props;
  return (
    <Box ml={10} my={"30px"} data-aos="zoom-in" data-aos-delay="300">
      <Card  id='postCard' style={{ height: "auto", width: "310px", textTransform:"uppercase" }}>
        <CardMedia
          style={{ padding: "10px", borderRadius:"22px" }}
          component="img"
          image={image}
          alt="Product"
          height={"240"}
        />
        <CardContent>
        <Box display={"flex"} my={1} > <CategoryIcon style={{ color: "#26C6B5", margin:"0 5px" }}></CategoryIcon> {category} </Box>
          <Box display={"flex"} mt={1} > <LocalOfferIcon style={{ color: "#26C6B5", margin:"0 5px" }}></LocalOfferIcon> ${price} </Box>
        </CardContent>
        <CardActions >
          <Box display={"flex"} mx={2} > <GradeIcon style={{ color: "yellow" }}></GradeIcon> {ratingRate} </Box>
          <Box display={"flex"} mx={2}> <FeedbackIcon style={{ color: "#26C6B5",  margin:"0 3px" }}> </FeedbackIcon> {ratingCount} </Box>
          <Link href={`/pages/productDetails?id=${id}`}> <Button style={{ color: "#26C6B5"}}>Show more <ArrowForwardIcon></ArrowForwardIcon> </Button></Link>
        </CardActions>
      </Card>
    </Box>
  );
}