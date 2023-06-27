import React from 'react';
import { Grid } from '@mui/material';
import Post from '../../Components/Post/Post';
import Head from 'next/head';
export async function getServerSideProps() {
  // Fetch data from the API
  const response = await fetch('https://fakestoreapi.com/products/');
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}

function posts({ data }) {
  return (
    <>
    <Head><title>Posts</title></Head>
  <h2  style={{fontSize:"32px", textAlign:"center"}}> Total <span style={{color:"green"}}>{data?.length}</span> posts found !!  </h2>
    <hr style={{width:"70%", margin:"auto", marginTop:"10px", marginBottom:"10px", borderRadius:"15px"}}></hr>
      <Grid container >
        {
        data.map(item => <Grid key={item?.id} >
          <Post category={item?.category} image={item?.image} ratingRate={item?.rating?.rate} 
           ratingCount={item?.rating?.count} id={item?.id} price={item?.price}></Post>
          </Grid>)
        }
      </Grid>
    </>
  );
}

export default posts;
