import React from 'react';
import Radium from 'radium';

const sideNav = () => {

    const style = {
        divStyle: {
            height: '100vh',
            width: '400px'
        },

        ulStyle: {
            margin: '0',
            padding: '0',
            display: 'flex',
            flexDirection: 'column',
            // justifyContent: 'spa',
            height: '100%',
            width: '100%',
            backgroundColor: '#141414'
        },

        liStyle: {
            borderBottom: '1px solid white',
            width: '100%',
            height: '5%',
            backgroundColor: '#0c0c0c',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
        }
    }

    return (
        <div style={style.divStyle}>
            <ul style={style.ulStyle}>
                <li style={style.liStyle}>Portfolio Item 1</li>
                <li style={style.liStyle}>Portfolio Item 2</li>
                <li style={style.liStyle}>Portfolio Item 3</li>
            </ul>
        </div>
    )
}

export default Radium(sideNav);