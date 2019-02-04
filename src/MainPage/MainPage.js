import React from 'react';
import Radium from 'radium';
import Navbar from '../Navbar/Navbar';
import ViewDisplay from '../ViewDisplay/ViewDisplay';

const mainPage = () => {
    const style = {
        mainPageDiv: {
            display: 'flex',
            width: '100vw',
        }
    }

    return (
        <div style={style.mainPageDiv}>
            <Navbar />
            <ViewDisplay />
        </div>
    )
}

export default Radium(mainPage);