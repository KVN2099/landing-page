import { Box, CardMedia, Tooltip } from '@material-ui/core';
import React from 'react';
import './SocialMedia.css';
import profiles from '../../assets/Info/socialMediaProfiles';

function SocialMedia() {
    return (
        <Box className="socialMedia-box">
            {profiles.map((profile, key) => {
                return (
                    <Tooltip title={ profile.name } aria-label="add">
                        <Box className="box">
                            <CardMedia
                                style={{ backgroundSize: 'contain' }}
                                key={ key }
                                className="icon"
                                image={ profile.image }
                                />
                        </Box>
                    </Tooltip>
                )
            })}
        </Box>
    )
}

export default SocialMedia
