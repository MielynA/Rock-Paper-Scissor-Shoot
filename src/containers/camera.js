import React from 'react';
import Camera from 'react-camera';
import '../style/player.css';
import User from '../components/user'



export default class MyCamera extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            webcamEnabled: false,
            userName: '',
            userDisplay: []
            
        }
    }

    handleUserNameChange = (e) => {
        this.setState({userName: e.target.value})
    }

    handleClick = (e) => {
        e.preventDefault();
        sessionStorage.setItem('userName', this.state.userName)
        const { userName , userDisplay} = this.state;
        this.setState({ userName: userName })
        console.log(userName)
        // userDisplay.shift({userDisplay})
        // console.log(userDisplay)
    }

    handleClear = () => {
      this.setState({userName: ''})
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
        const {userName} = this.state
        return (
            <React.Fragment>
                <div className='container mb-3 mt-3'>
                    <a href="#" class="btn btn-info" data-toggle="modal" data-target="#exampleModal">
                        <img src={require('../images/face.svg')} alt='' />
                    </a>
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel"><img alt=''
                                        className='captureImage' style={{ height: '100px', width: '120px' }}
                                        ref={(img) => {
                                            this.img = img;

                                        }}
                                    />
                                    </h5><div class="col-md-4 mb-3">Hello there! Welcome, <div>
                                    {userName}
                                    </div>
                                    </div>
                                   
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    {!this.webCamEnabled ? <button type='button' className='btn btn-info mb-4' onClick={this.enableWebcam}>Open Cam</button> : <Camera
                                        style={{ position: 'relative' }}
                                        ref={(cam) => {
                                            this.camera = cam;
                                        }}>
                                        <div className='captureContainer ' onClick={this.takePicture}>
                                            <img src="https://img.icons8.com/ios-filled/50/000000/unsplash.png" className='captureButton btn btn-light mb-3'></img>
                                        </div>
                                    </Camera>
                                    }
                                    {/* form */}
                                    <form class="needs-validation" novalidate>
                                        <div class="form-row">
                                            <div class="col-md-4 mb-3">
                                                <label for="validationCustom01">Username</label>
                                                <input type="text" onChange={this.handleUserNameChange} name='userName' onClick={this.handleClear} value={userName} class="form-control" id="validationCustom01" placeholder="Username" required />
                                                <div class="valid-feedback">
                                                    Looks good!
      </div>
                                            </div>
                                        </div>
                                    </form>
                                   

                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button onClick={this.handleClick} class="btn btn-primary" type="submit">Submit form</button>
                                    <button type='button' className='btn btn-secondary' onClick={this.handleClear}>Clear</button>
                                </div>
                                {
                                        this.state.userDisplay.map((e, i)=>{
                                            console.log(e)
                                            return(
                                                <div>
                                                    <h1>{e.userDisplay}</h1>
                                                    </div>
                                            );
                                        })
                                    }
                            </div>
                        </div>
                    </div>
                </div>



            </React.Fragment>
        );
    }
}
