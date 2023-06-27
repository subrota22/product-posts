import { Button, TextField } from '@mui/material'
import Textarea from '@mui/joy/Textarea';
import Head from 'next/head';
import React from 'react';
const contact = () => {
    return (
        <>
            <Head><title>Contact page </title></Head>
                <h2 style={{fontSize:"48px", fontWeight:"bolder", margin:"10px 14px", color:"green", textAlign:"center"}}> Contact us </h2>
                <form action="https://formsubmit.co/itinfobd24@gmail.com" className='contact_form' method="post">
                    <TextField fullWidth label="Full name" id="Full name" name="full-name"  style={{margin:"8px 0px"}} required/>
                    <TextField fullWidth label="Email" id="Full name" name="email"  style={{margin:"8px 0px"}} required/>
                    <Textarea minRows={6} style={{margin:"8px 0px"}} placeholder='Enter your message here...'  required />
                    <Button  type='submit' style={{backgroundColor:"green", color:"white", width:"100%"}}>Send Message</Button>
                </form>
        </>
    );
};

export default contact;