import React, { useState } from "react"
import image from "./image/Image.png"
import smallimg from "./image/Befuman_logo 1.png"
import "./Sign_style.css"
import CssBasline from "@mui/material/CssBaseline"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';


const Sign_up = () => {

    const [user, setUser] = useState({

        name: "",
        email: "",
        company: "",
        password: "",


    })

    const handleChange = e => {

        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }


    return (

        <>

     <Grid  container style={{minHeight: "100vh"}}  >

      <Grid  item xs={12} sm={6} >
      <img className="logo-image" src={smallimg} alt="logoimage"  width={300}   style={{       objectFit: "cover"   }}  />
      <img src={image}    className="Main-img"   alt="Image"    style={{width: "90%",height: "80%",       }} />
      </Grid>
 
     <Grid container  item xs={12}  sm={6}   alignItems="center"   /*direction="column"*/   justify="space-between"     style={{padding: 10}} >
     <div/>
     <div  style ={{display: "flex", flexDirection: "column", maxWidth: 400, minWidth:300, }}  >
   <Grid    >

   <Typography    style={{height:60}}  variant="h4" className="typo_h4" > Sign Up</Typography>
  <Typography        variant="p" className="typo_h5"    >Welcome to Befuman to explore the <br /> new things.</Typography>
   </Grid>
  <form   className="input"   action="click" >
   <TextField InputProps={{ startAdornment: (<AccountCircle />), }}      name="name" value={user.name} style={{  height:90,  m: "1", width: "25ch" }} size="small" type="text" id="outlined-basic" label="Name" variant="outlined" onChange={handleChange} />
   <TextField InputProps={{ startAdornment: (<EmailIcon />), }} value={user.email} name="email" style={{  height:100,      m: "1", width: "25ch" }} size="small" id="email" label="Work Email" type="email" onChange={handleChange} />
   <TextField InputProps={{ startAdornment: (< BusinessIcon />), }} name="company" value={user.company} style={{   height:80,   m: "1", width: "25ch" }} size="small" id="outlined-basic" label="Company Name" variant="outlined" onChange={handleChange} />
   <TextField value={user.password} InputProps={{ startAdornment: (<HttpsIcon />), }} name="password" style={{  height:20,   m: "1", width: "25ch" }} size="small" label="Password" type="password" onChange={handleChange} autoComplete="current-password" />
     <div  style={{height:60}}   />   
     <Button type="submit" name="signup " value="Sign Up" className="btn btn-primary "   color="primary"   onChange={handleChange} variant="contained">Sing Up</Button> 
     </form>
     </div>

      <Grid  container >

      <Grid item>  
      
<form action="cilck"  className="lst_inp"    >
  <label htmlFor="clicked">
 <Typography variant="p" className="last"  >Already have an account?<a href="https://accounts.google.com/signin/v2/identifier?faa=1&rip=1&continue=https%3A%2F%2Faccounts.google.com%2Fgsi%2Fselect%3Fclient_id%3D49625052041-kgt0hghf445lmcmhijv46b715m2mpbct.apps.googleusercontent.com%26ux_mode%3Dpopup%26ui_mode%3Dcard%26as%3D7sV%252B8H9vgW5z0n9L3pDTGA%26channel_id%3D824443f0b98328604b1e92a18bac64f2c202494a6a93ed2694ab3baee58ab0f0%26origin%3Dhttps%3A%2F%2Ftwitter.com&flowName=GlifWebSignIn&flowEntry=ServiceLogin">Loging</a>   </Typography>
</label>                               
 </form>
      
      
          </Grid>
         
       
      </Grid>
      
      </Grid>
     </Grid>
      </>





    )



}


export default Sign_up