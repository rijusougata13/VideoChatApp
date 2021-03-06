import React, { useContext, useEffect, useState } from 'react';
import { Button, Typography, TextField, Grid, Container, Paper, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';
import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    gridContainer: {
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    container: {
        width: '600px',
        background: "red",
        height: "50vh",
        overflow: "scroll",
        margin: '35px 0',
        padding: 0,
        [theme.breakpoints.down('xs')]: {
            width: '80%',
        },
    },
    margin: {
        marginTop: 20,
    },
    padding: {
        padding: 20,
    },
    paper: {
        padding: '10px 20px',
        border: '2px solid black',
    },
}));

const Options = ({ children }) => {
    const classes = useStyles();
    const { me, callAccepted, name, setName, newMessage, sendMessage, callUser, callEnded } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState("");
    const [msg, setMsg] = useState("");
    const [chat, setChat] = useState([{
        name: "k",
        chat: "hi"
    }]);

    useEffect(() => {
        console.log("new", chat)
        setChat(prev => [
            ...prev,
            newMessage
        ])
    }, [newMessage])
    return (
        <container >
            Chat Here
            <div className={classes.container} >
                {
                    chat.map(msg => (
                        <p style={{ padding: "1rem" }}>
                            <strong>{msg.name} : </strong>
                            {msg.chat}
                        </p>
                    ))
                }
            </div>
            <div>
                <Input fullWidth value={msg} onChange={e => setMsg(e.target.value)} />
                <Button onClick={e => sendMessage({ name: name, chat: msg })} variant="contained" color="primary">
                    Send
                </Button>
            </div>
        </container >
    )
}
export default Options;