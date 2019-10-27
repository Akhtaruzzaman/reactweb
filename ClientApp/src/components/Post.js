import React, { Component } from 'react';
import { Like } from './Like';
export class Post extends Component {
    static displayName = Post.name;

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
        const elements = ['This is kitti, How are you all', 'two', 'three'];

        const items = []

        for (const [index, value] of elements.entries()) {
            items.push(<div className="col-md-4 border">
                            <h3>Post No.: {index+1}</h3>
                            <p>{value}</p>
                            <Like />
                        </div>
            )
        }
        return (
            <div className="row">
                {items}
            </div>
        );
    }
}
