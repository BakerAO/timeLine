import React from 'react';
import Header from './Header';
import Main from './Main';
import '../styles/App.css';

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                {/* <div className="row">
                    <div className="column">
                        1
                    </div>
                    <div className="column">
                        2
                    </div>
                </div> */}
                <Header />
                <Main />
            </div>
        );
    }
}
