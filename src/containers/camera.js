import React from 'react';
import Camera from 'react-camera';
import '../style/camera.css';
import {Link} from 'react-router-dom'
 


export default class MyCamera extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            webcamEnabled: false,
            userName: '',

        }
    }

    handleUserNameChange = (e) => {
        this.setState({ userName: e.target.value })
    }

    handleClick = (e) => {
        e.preventDefault();
        sessionStorage.setItem('userName', this.state.userName)
        const { userName } = this.state;
        this.setState({ userName: userName })
    }

    handleClear = () => {
        this.setState({ userName: '' })
    }

    takePicture = () => {
        this.camera.capture()
            .then(blob => {
                this.img.src = URL.createObjectURL(blob);
                this.img.onload = () => { URL.revokeObjectURL(this.src) }
            })
    }

    enableWebcam = () => this.setState({ webcamEnabled: true });

    render() {
        const { userName } = this.state
        return (
            <React.Fragment>
                <div className='container mb-3 mt-3'>
                <div className='card text-center'>
                <div className='card-header' style={{backgroundColor: 'black'}}>
                        <h2 style={{color: 'white'}}>ROCK PAPER SCISSOR SHOOT!</h2>
                    
                    <Link className="btn" data-toggle="modal" data-target="#exampleModal" >
                        <img src={require('../images/girl.png')} alt='' style={{width: '80px', height: '80px'}}/>
                    </Link></div></div>
                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel"><img alt=''
                                        className='captureImage' style={{ height: '100px', width: '120px' }}
                                        ref={(img) => {
                                            this.img = img;
                                        }} />
                                    </h5>
                                    <div className="col-md-8 mb-3" >Hello there! Welcome, <div style={{ fontStyle: 'italic', color: 'blue', fontSize: '30px' }}>
                                    {userName}
                                    </div></div>
                                </div>
                                <div className="modal-body">
                                    {!this.webCamEnabled ? <button type='button' className='btn btn-info mb-4' onClick={this.enableWebcam}>Open Cam</button> : <Camera
                                        style={{ position: 'relative' }}
                                        ref={(cam) => {
                                            this.camera = cam;
                                        }}>
                                        <div className='captureContainer ' onClick={this.takePicture}>
                                            <img src="https://img.icons8.com/ios-filled/50/000000/unsplash.png" className='captureButton btn btn-light mb-3' alt=''></img>
                                        </div>
                                    </Camera>
                                    }
                                    <form className="needs-validation" novalidate>
                                        <div className="form-row">
                                            <div className="col-md-6 mb-3">
                                                <label for="validationCustom01">Enter your username</label>
                                                <input type="text" onChange={this.handleUserNameChange} name='userName' onClick={this.handleClear} value={userName} className="form-control" id="validationCustom01" placeholder="Username" required />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button onClick={this.handleClick} className="btn btn-primary" type="submit">Submit form</button>
                                    <button type='button' className='btn btn-secondary' onClick={this.handleClear}>Clear</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
