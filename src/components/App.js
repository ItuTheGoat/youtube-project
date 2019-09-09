import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component
{

    state = { videos: [], selectedVideo: null };

    // Asynchronous function to get the search term a
    // and use it to get the data from youtube api. 
    onTermSubmit = async term =>
    {
        const response = await youtube.get('/search', 
        {
            params: 
            {
                q: term
            }
        });

        
        this.setState({videos: response.data.items})
    };

    onVideoSelect = (video) =>
    {
        console.log('From the App!', video);

    }

    render()
    {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}> 
                <SearchBar onFormSubmit = { this.onTermSubmit }/>
                I have { this.state.videos.length } videos.

                <VideoList 
                    onVideoSelect = { this.onVideoSelect }
                    videos = {this.state.videos} />
            </div>
            );
    }
}

export default App;