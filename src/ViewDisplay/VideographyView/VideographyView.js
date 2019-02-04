import React from 'react';
import Radium from 'radium';
import SideNav from '../../SideNav/SideNav';

const videoView = () => {
    const style = {
        test: {
            margin: '0',
            padding: '0',
            width: 'calc(100vw - 75px)',
            height: '100vh',
            backgroundColor: 'orange'
        },

        pageContainer: {
            display: 'flex',
            flexDirection: 'row'
        },
        
    }

    return (
        <div style={style.pageContainer}>
            <div>

            </div>
            <SideNav />
        </div>
    )
}

export default Radium(videoView);