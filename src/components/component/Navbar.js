import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar,  IconButton, Typography, InputBase } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";


// const useStyles = makeStyles((theme) => ({
//     grow: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       display: 'none',
//       [theme.breakpoints.up('sm')]: {
//         display: 'block',
//       },
//     },
//     search: {
//       position: 'relative',
//       borderRadius: theme.shape.borderRadius,
//       backgroundColor: fade(theme.palette.common.white, 0.15),
//       '&:hover': {
//         backgroundColor: fade(theme.palette.common.white, 0.25),
//       },
//       marginRight: theme.spacing(2),
//       marginLeft: 0,
//       width: '100%',
//       [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(3),
//         width: 'auto',
//       },
//     },
//     searchIcon: {
//       padding: theme.spacing(0, 2),
//       height: '100%',
//       position: 'absolute',
//       pointerEvents: 'none',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     inputRoot: {
//       color: 'inherit',      
//     },
//     inputInput: {
//         padding: theme.spacing(1, 1, 1, 0),        
//         paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//         transition: theme.transitions.create("width"), 
//         width: "100%",      
//         [theme.breakpoints.up("md")]: {
//           width: "20ch"
//      },
//     },
//     sectionDesktop: {
//       display: 'none',
//       [theme.breakpoints.up('md')]: {
//         display: 'flex',
//       },
//     },
//     sectionMobile: {
//       display: 'flex',
//       [theme.breakpoints.up('md')]: {
//         display: 'none',
//       },
//     },
//   }));     

const Navbar = () => {
    // const classes = useStyles();  
  return (
      <h1> Hello world
          
      </h1>
    // <div className={classes.grow}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <IconButton
    //         edge="start"
    //         className={classes.menuButton}
    //         color="inherit"
    //         aria-label="open drawer"
    //       >
    //         <MenuIcon />
    //       </IconButton>
    //       <Typography className={classes.title} variant="h6" noWrap>
    //         Material-UI
    //       </Typography>
    //       <div className={classes.search}>
    //         <div className={classes.searchIcon}>
    //           <SearchIcon />
    //         </div>
    //         <InputBase
    //           placeholder="Search…"
    //           classes={{
    //             root: classes.inputRoot,
    //             input: classes.inputInput
    //           }}
    //           inputProps={{ "aria-label": "search" }}
    //         />
    //       </div>
    //     </Toolbar>
    //   </AppBar>
    // </div>     
  )
}

export default Navbar;


// <nav>
    //  <ul>
    //   <li className="left">
    //     <svg  viewBox="0 0 1024 1024"
    //           style={{width:"48px"}}
    //          data-aut-id="icon" class="" fill-rule="evenodd">
    //       <path class="rui-77aaa" 
    //             d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z">
    //       </path>
    //     </svg>  

    //     <select>
    //         <option value="country"> Pakistan </option>           
    //     </select> 
    //      <input type='text' /> 
        
    //   </li>   
    //  </ul>  

    //  <ul className="right">
    //    <li>
    //      <Link to="/account/signin" className="account"> Sign In </Link>  
    //      <span className="sell"> Sell </span> 
    //    </li>  
    //  </ul>
    // </nav>        
    