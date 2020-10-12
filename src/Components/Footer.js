import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
function Footer() {
    return (
        <div className="footer" id="Footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        Hello
                    </div>
                    <div className="col-md-6" id="Media">
                        <a href="https://www.linkedin.com/in/avinash-chunduri-58a1bb1a0/" id="link"><LinkedInIcon/></a>
                        <a href="https://www.facebook.com/aviansh.chunduri/" id="link"><FacebookIcon/></a>
                        <a href="#" id="link"><InstagramIcon/></a>
                        <a href="https://github.com/ChunduriAvinash16" id="link"><GitHubIcon/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;