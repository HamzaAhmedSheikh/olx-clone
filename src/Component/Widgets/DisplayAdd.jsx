import React from 'react';
import { Paper, Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, DialogTitle, Dialog, Typography } from '@material-ui/core';
import * as materialIcon from "@material-ui/icons"; //materialIcon.Search
import { makeStyles } from '@material-ui/core/styles';
import { black, white } from '@material-ui/core/colors';
import PropTypes from 'prop-types';
import { useStateValue } from '../../GlobalState/ContextProvider';

 const emails = [
    {text: 'WhatsApp', icon: <materialIcon.WhatsAppIcon />},
    {text: 'Facebook',  icon: <materialIcon.FacebookIcon />}, 
    {text: 'Linkeden',  icon: <materialIcon.LinkedInIcon />}
    ];

 const useStyles = makeStyles({
    avatar: {
        backgroundColor: '#000',
         color: '#fff',
    },
 });

 function SimpleDialog(props) {
    console.log('SimpleDialog ====>' , props); 
   const classes = useStyles();
   const { onClose, selectedValue, open } = props;  

   const handleClose = () => {
       onClose(selectedValue);
   };

   const handleListItemClick = (value) => {
       onClose(value);
   };

    return (
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}> 
       <DialogTitle id="simple-dialog-title"> Share on Social Media Platforms </DialogTitle> 

       <List>
         {emails.map(({text, icon}) => (
           <ListItem button onClick={() => handleListItemClick(text)} key={text}>
            <ListItemAvatar>
             <Avatar className={classes.avatar}>
                {icon}
             </Avatar>  
            </ListItemAvatar>  
            <ListItemText primary={text} />
           </ListItem>
        ))}                       
       </List>      
      </Dialog>  
    );
  }

  SimpleDialog.propTypes = {
      onClose: PropTypes.func.isRequired,
      open: PropTypes.bool.isRequired,
      selectedValue: PropTypes.string.isRequired,
  };
  