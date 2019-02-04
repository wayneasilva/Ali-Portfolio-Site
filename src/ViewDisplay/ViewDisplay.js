import React from 'react';
import Radium from 'radium';
import Route from 'react-router-dom/Route';
import VideoView from './VideographyView/VideographyView';
import PhotoView from './PhotographyView/PhotographyView';
import EditingView from './EditingView/EditingView';
import ContactView from './ContactView/ContactView';

const viewDisplay = () => {
    
    return (
        // <h1>hdfkahsdhfsahfsahdfkkashdf</h1>
        <div>
            <Route path="/videography" render={() => <VideoView />} />
            <Route path="/photography" render={() => <PhotoView />} />
            <Route path="/editing" render={() => <EditingView />} />
            <Route path="/contact" render={() => <ContactView />} />
        </div>
    )
}

export default Radium(viewDisplay);