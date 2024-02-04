import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'
import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'Kylian Mbappé',
      bio: 'A passionate footballer, age 25ans ',
      imgSrc: 'mbappe.jpg', 
      profession: 'Football Player',
    },
    show: false,
    mountTime: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ mountTime: prevState.mountTime + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountTime } = this.state;

    return (
      
      <div className="App">
         <div> 
         <h1>Profile App</h1>
         <Card className='card' style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Text>
        <button style={{ borderRadius: '30px' , backgroundColor: 'red' }} onClick={this.toggleProfile}>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>

        {show && (
          <div className="profile">
            <img style={{ width: '80%' , height: '50%' }} src={imgSrc} alt={fullName} />
            <h2>{fullName}</h2>
            <p>{profession}</p>
            <p>{bio}</p>
          </div>
        )}
        </Card.Text>
      </Card.Body>
    </Card>

        </div>
        <p>Time since mount: {mountTime} seconds</p>
      </div>
    );
  }
}

export default App;