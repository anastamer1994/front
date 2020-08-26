import React from 'react';
import {Typography,Link} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';


const usesStyles = makeStyles((theme) => ({
      footerSection : {
        marginTop : '5em',
        padding : '7em 0',
        backgroundColor: '#1a1a1a',
        color: '#fff',
        fontSize:15         
      },
      copyLink :{
        color : '#fff',
        fontSize : 17,
      },
      copyRight : {
          color : '#fff',
          fontSize : 17
      }
}));
function Copyright() {
    return (
      <Typography variant="body2" className={usesStyles().copyRight} align="center">
        {'Copyright © '}
        <Link className={usesStyles().copyLink} href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  };

const Footer = () => {
    const classes = usesStyles();

    return(
        <>
         <footer className={classes.footerSection} >
             <div className="container">
                 <div className="row mb-4">
                    <div className="col-md-3 mb-3">
                        <ul className="list-unstyled link">
                        <li>About Us</li>
                        <li>Terms &amp; Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Rooms</li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-3">
                        <ul className="list-unstyled link">
                        <li>The Rooms &amp; Suites</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Restaurant</li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-3 pr-md-5 contact-info">
                        <p>Address: 198 West 21th Street, <br/> Suite 721 New York NY 10016</p>
                        <p>Phone: (+1) 435 3533</p>
                        <p>Email: info@domain.com</p>
                    </div>
                    <div className="col-md-3 mb-3">
                        <p>Sign up for our newsletter</p>
                        <form action="#" className="footer-newsletter">
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email..." />
                                <button type="submit" className="btn"></button>
                            </div>
                        </form>
                    </div>
                 </div>
             </div>
               
            <Copyright />
             
         </footer>
        </>
    )
}

export default Footer;