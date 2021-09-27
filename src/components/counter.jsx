import React, { Component } from 'react';
class Counter extends React.Component {
    state = {
        count: 0,
        tags: ["tag1", "tag2", "tag3"]
    }

    handleIncrement = (s) => {
        let count = this.state.count+1
        console.log("Increment clicked"+ s +" " + count);
        this.setState({count: count});
    }

    render() { 
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning": "primary";
        return (
          <div>
            <span className={classes}>{this.formatCount()}</span>
            <button onClick={() => this.handleIncrement(3)} className="btn btn-sm btn-outline-primary">
              Increment
            </button>
            <ul>
                {
                    this.renderTags()
                }
            </ul>
          </div>
        );
    }
    formatCount(){
        const {count} = this.state;
        return count === 0 ? "Zero": count;
    }
    renderTags(){
        return (this.state.tags.length === 0) ? "No tags found!" : this.state.tags.map(tag=> <li key={tag}>{tag}</li> )
    }
}
 
export default Counter
;