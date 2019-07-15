import React from 'react';
import '../styles/Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="title">
                    <h1>Timeline</h1>
                </div>
                <div className="settings">
                    <img src="/settings.png" alt="settings" />
                </div>
            </div>
        );
    }
}
