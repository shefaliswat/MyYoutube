import React from 'react';
import { ButtonList } from './ButtonList';
import { VideoContainer } from './VideoContainer';

export const SecondaryContainer = () => {
    return (
        <div className="p-4">
            <ButtonList/>
            <VideoContainer />
        </div>
    )
}