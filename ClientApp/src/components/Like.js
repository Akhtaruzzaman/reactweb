import React, { Component } from 'react';

export class Like extends Component {
    static displayName = Like.name;

    constructor(props) {
        super(props);
        this.state = { currentCount: 0 };
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }

    render() {
        return (
            <div>
                <p>Total Like {this.state.currentCount}</p>
                <button className="btn btn-primary" onClick={this.incrementCounter}> <i class="fe-icon-heart"></i> {this.state.currentCount}</button>
            </div>
            
        );
    }
}
