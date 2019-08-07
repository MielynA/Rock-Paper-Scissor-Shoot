import React from 'react';
import '../style/player.css';
import PlayerCards from '../components/player'


export default class Players extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            symbol: ['rock', 'paper', 'scissor'],       
        }
    }

    handleWinner = () => {

        const { playerBlue, playerRed, } = this.state;
        if (playerBlue === playerRed) {
            return (<p className='blinking' style={{ color: 'green' }}>It's a tie!</p>)
        }
        if ((playerBlue === 'rock' && playerRed === 'scissor') ||
            (playerBlue === 'paper' && playerRed === 'rock') ||
            (playerBlue === 'scissor' && playerRed === 'paper')) {

            return  (<p className='blinking' style={{ color: 'blue' }}>Player Blue win!</p>)

        }
            return (<p className='blinking' style={{ color: 'red' }}>Player Red win!</p>)
    }

    handleRunButton = () => {
        let counter = 0;
        let newInterval = setInterval(() => {
            counter++
            this.setState({
                playerRed: this.state.symbol[Math.floor(Math.random() * 3)],
                playerBlue: this.state.symbol[Math.floor(Math.random() * 3)],
                winner: ""
            })
            if (counter > 20) {
                clearInterval(newInterval)
                this.setState({ winner: this.handleWinner() })
            }
        }, 100)

    }

    render() {
        const { playerRed, playerBlue } = this.state
        return (
            <React.Fragment>
                <div className='card text-center'>
                   <div className='container'>
                    {/* <div className='card-body'> */}
                        <PlayerCards color='red' symbol={playerRed} className='icon'></PlayerCards>
                        <PlayerCards color='blue' symbol={playerBlue} className='icon'></PlayerCards>
                    </div>
                    <div className='container'>
                        <button type='button' className='btn btn-info mb-4' onClick={this.handleRunButton}>Start</button>
                       
                    </div>
                </div>
                <div className='card-footer text-muted mt-3'>
                    <p className='text-center'>{this.state.winner}</p>
                </div>
            </React.Fragment>
        );
    }

}

