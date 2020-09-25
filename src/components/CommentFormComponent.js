import React, { Component } from 'react';
import { Button } from 'reactstrap';

class CommentFormComponent extends Component {
    render(){
        return (
            <div className="row">
                <div className="col-md-5 m-1">

                </div>
                <div className="col-md-5 m-1">
                        <Button outline><i className="fa fa-pencil fa-lg" />Submit Comment</Button>

                </div>
            </div>
           
        )
    }
}

export default CommentFormComponent