import { Box, CardMedia } from '@material-ui/core';
import React from 'react';
import './SocialMedia.css';
import profiles from '../../assets/Info/socialMediaProfiles';

function SocialMedia() {
    return (
        <Box className="socialMedia-box">
            {profiles.map((profile, key) => {
                return (
                    <a href={ profile.link } target="_blank">
                        <Box className="box">
                            <CardMedia
                                style={{ backgroundSize: 'contain' }}
                                key={ key }
                                className="icon"
                                image={ profile.image }
                                />
                        </Box>
                    </a>
                )
            })}
        </Box>
    )
}

export default SocialMedia
