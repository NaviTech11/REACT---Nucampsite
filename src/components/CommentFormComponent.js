import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

//VALIDATION LOGIC
const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
class CommentFormComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
          rating: '',
          author: '',
          text: '',
          isModalOpen: false,
          touched: {
            author: false,
            }
        };
        //Binding the toggle and Submit methods
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       

    }

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values))
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render(){
        return (
            <div className="row">
                <div className="col-md-5 m-1">

                </div>
                <div className="col-md-5 m-1">
                        <Button outline onClick={this.toggleModal}><i className="fa fa-pencil fa-lg" />Submit Comment</Button>

                </div>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                       <LocalForm onSubmit={values => this.handleSubmit(values)}>
                        <div className="form-group">
                            <Label htmlFor="rating">Rating</Label>
                            <Control.select  model=".rating" id="rating" name="rating" className="form-control">
                               <option>1</option>
                               <option>2</option>
                               <option>3</option>
                               <option>4</option>
                               <option>5</option>
                            </Control.select>
                        </div>
                        <div className="form-group">
                            <Label htmlFor="author">Your Name</Label>
                            <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control" 
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}         
                            />
                            <Errors
                                className="text-danger"
                                model=".author"
                                show="touched"
                                component="div"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be at least 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <Label htmlFor="text">Comment</Label>
                            <Control.textarea model=".text" id="text" name="text"
                                        rows="6"
                                        className="form-control"          
                            />
                        </div>
                            <Button type="submit" color="primary">
                                Submit
                            </Button>
                           
                       </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
           
        )
    }
}

export default CommentFormComponent