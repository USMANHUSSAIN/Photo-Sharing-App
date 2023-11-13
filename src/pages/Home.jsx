import React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from '../firebase';
import {NavLink, useNavigate} from 'react-router-dom';
import {ImageGallery} from "@rainbow-modules/storage";

import '../App.css';
import Button from "@mui/material/Button";
import {Label} from "@mui/icons-material";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const defaultTheme = createTheme();

export default function Home() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log("uid", uid);
                const email = user.email;
                setEmail(email);
            } else {
                // User is signed out
                console.log("user is logged out")
            }
        });

    }, [])

    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
            // An error happened.
        });
    }

    const [userUniqueId] = email.split("@");

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <CameraIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" noWrap>
                        Photo Sharing App ({userUniqueId})
                    </Typography>
                    <Button onClick={handleLogout}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/></svg>
                    </Button>
                </Toolbar>
            </AppBar>

            <div className="App">
                <Card>
                    <ImageGallery
                        path="/gallery"
                        allowUpload
                        allowDelete
                        onSelect={(imageRef) => {
                            alert(imageRef.name)
                        }}
                    />
                </Card>
            </div>

        </ThemeProvider>
    );
}