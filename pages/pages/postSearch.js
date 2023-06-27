import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import Post from '../../Components/Post/Post';
import Head from 'next/head';
import { Input } from '@mui/joy';
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

function postSearch({ data }) {
    const [category, setCategory] = useState("");
    const searchData = data.filter((item) => item.category == category);
    return (
        <>
            <Head><title>Post search</title></Head>
            <div style={{ width: "80%", margin: "auto", height: "100%" }}>
                <Input name='search' onChange={(e) => setCategory(e.target.value)} placeholder='Search by category like jewelery' />
            </div>
            {
                searchData?.length >= 1 && <>
                    <h2 style={{ fontSize: "32px", textAlign: "center" }}> Total <span style={{ color: "green" }}>{searchData?.length}</span> posts found !!  </h2>
                </>
            }
            <Grid container mb={"25px"}>
                {
                    searchData?.map(item => <Grid key={item?.id} >
                        <Post category={item?.category} image={item?.image} ratingRate={item?.rating?.rate}
                            ratingCount={item?.rating?.count} id={item?.id} price={item?.price}></Post>
                    </Grid>)
                }
            </Grid>

<img src="https://i.ibb.co/jDQpvxk/jewelery.jpg" alt="jewelery" style={{height:"415px", width:"100%", marginBottom:"22px"}}/>
        </>
    );
}

export default postSearch;
