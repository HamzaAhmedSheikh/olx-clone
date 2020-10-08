import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar,  IconButton, Typography, InputBase } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from 'react-router-dom'

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
      <header className='head er'>
       <div className='_1B5Sf _2d97D'>
        <div className="_2fu44">
          <div className="_2r6hS hJUTK">
           <Link to='/'>
            <svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
           </Link>   
          </div>  

          <div className="2KctL">
           <div className="_3W9XC">
            <div className="_18aBn">
             <div style={{display: "flex"}}>
              <div className="IOsQD">
               <div className="_16LoD"> 
                 <span><svg width="25px" height="25px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"></path></svg></span>                   
                 <input class="_1jABB" value="Karachi, Sindh" placeholder="Search city, area or locality" />
                 <span class="I95t7"><button type="button" class="rui-3mpO_" role="button" tabindex="0" data-aut-id="" title=""><svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path></svg></button></span>
               </div>  
              </div>   
             </div>  

             <div className="zYZEU">
              <div className="_2C0uj">
               <form role="search" className="rui-Xybo_ _20jkh"> 
                <button type="submit"></button>                
                <fieldset>
                  <div>
                   <input type="text" placeholder="Find Cars, Mobile Phones and more..." value="" data-aut-id="searchBox" />
                  </div>
                </fieldset>
                <button type="reset" aria-hidden="true" aria-label="reset"></button>
                <button type="button" aria-label="show search"></button>               
               </form>  
              </div>   
             </div>  
             <div data-aut-id="btnSearch" class="_3b3oR">
              <span>
                <svg style={{width:"24px", height:"24px"}} viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd">
                 <path class="rui-2h8NR" d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z">
                 </path>
                </svg>
              </span>
             </div>
            </div>   
           </div>   
          </div>

          <div className="_14lZ9  _110yh">
           <button type="button" class="rui-3sH3b rui-17DJY rui-1zK8h RgSo4 _1oFFI">
              <span> Login </span>
           </button>   
           <a class="_21nYN" rel="" data-aut-id="btnSell" href="/post">
             <svg width="104" height="48" viewBox="0 0 1603 768" class="_3V9PS">
              <g>
               <path class="_2bClX _12yOz" d="M434.442 16.944h718.82c202.72 0 367.057 164.337 367.057 367.058s-164.337 367.057-367.057 367.057h-718.82c-202.721 0-367.058-164.337-367.058-367.058s164.337-367.058 367.058-367.058z"></path>
               <path class="_2bClX _YBz-" d="M427.241 669.489c-80.917 0-158.59-25.926-218.705-73.004l-0.016-0.014c-69.113-54.119-108.754-131.557-108.754-212.474 0-41.070 9.776-80.712 29.081-117.797 25.058-48.139 64.933-89.278 115.333-118.966l-52.379-67.581c-64.73 38.122-115.955 90.98-148.159 152.845-24.842 47.745-37.441 98.726-37.441 151.499 0 104.027 50.962 203.61 139.799 273.175h0.016c77.312 60.535 177.193 93.887 281.22 93.887h299.699l25.138-40.783-25.138-40.783h-299.698z"></path>
               <path class="_2bClX _3uYj7" d="M1318.522 38.596v0c-45.72-14.369-93.752-21.658-142.762-21.658h-748.511c-84.346 0-165.764 21.683-235.441 62.713l3.118 51.726 49.245 15.865c54.16-31.895 117.452-48.739 183.073-48.739h748.511c38.159 0 75.52 5.657 111.029 16.829v0c44.91 14.111 86.594 37.205 120.526 66.792l66.163-57.68c-43.616-38.010-97.197-67.703-154.957-85.852z"></path>
               <path class="_2bClX BfroU" d="M1473.479 124.453l-55.855 9.91-10.307 47.76c61.844 53.929 95.92 125.617 95.92 201.88 0 25.235-3.772 50.26-11.214 74.363-38.348 124.311-168.398 211.129-316.262 211.129h-448.812l25.121 40.783-25.121 40.783h448.812c190.107 0 357.303-111.638 406.613-271.498 9.572-31.009 14.423-63.162 14.423-95.559 0-98.044-43.805-190.216-123.317-259.551z"></path>
              </g>
             </svg>
             
              <div class="DrSmZ">
                <span class="EgzsJ">
                 <svg width="16px" height="16px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd">
                   <path class="rui-367TP" d="M414.898 123.739v291.218h-291.218l-97.014 97.014 97.014 97.131h291.218v291.16l97.073 97.071 97.073-97.071v-291.16h291.16l97.131-97.131-97.131-97.014h-291.16v-291.218l-97.073-97.073z"></path>
                 </svg>
                </span>
                <span>Sell</span>
              </div>
            </a>
          </div>          
        </div>          
       </div>   
      </header>
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
    