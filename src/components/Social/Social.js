import React from 'react'
import styles from './Social.module.css';
import cn from 'classnames';
import FacebookIcon from '/public/14.svg';
import TwitterIcon from '/public/15.svg';
import VKIcon from '/public/16.svg';
import InstagramIcon from '/public/17.svg';
import YoutubeIcon from '/public/18.svg';


const Social = ({ size, children, href, className, ...props }) => {    
    return (
        <div
            className={ cn(styles.social, className, {                
                [styles.social_wide]: size == 'social_wide',
            })}
            {...props}
        >{
            href
                ? <a href={href}>{children}</a>
                : <>
                    {children}
                    <FacebookIcon />
                    <TwitterIcon />
                    <VKIcon />
                    <InstagramIcon />
                    <YoutubeIcon />
                  </>
        }   
            
        </div>
    );
};

export default Social