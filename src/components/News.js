import React, { Component } from 'react';
import NewsLayout from './NewsLayout';

const newsCenter = {
    textAlign: 'center'
}
class News extends Component {
    render() {
        return (
            <div style={newsCenter}>
                
                <h1>News</h1>

                <NewsLayout />

            </div>
        );
    }
}

export default News;