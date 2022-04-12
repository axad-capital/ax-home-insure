import React from 'react'
import './homeComp.css'
import HomeImg from './home-img.png'

function HomeComp() {

    function handleFormSubmit() {
        console.log('form clicked')
    }

    return (
        <div>
            <div className='header-container'>
                <div className='header-info'>
                    <h1 className='header-title'>Compare <span className='green'>Home Insurance</span> Quotes To Save Money!</h1>
                    <h2 className='header-text'>The Simple, Easy and Quick Way To Buy Home Insurance.</h2>
                </div>
                <div className="header-img-container">
                    <img className="header-img" src={HomeImg} alt="home" />
                </div>
            </div>

            <div className='form'>
                <div className='form-container'>
                    <label htmlFor="home-zip">Enter Your Zipcode</label>
                    <input className='home-zip-input' name='home-zip' type="text" placeholder='Zipcode' />
                    <button onClick={handleFormSubmit} className='zip-btn'>Submit</button>
                </div>
                <h2 className='form-info'>Let us do the searching for you so you can see how much you can save with an affordable home owners insurance plan.</h2>
            </div>

            <div className='step-container'>
                <h1 className="step-container-title">3 Easy Steps To Get Affordable Home Insurance</h1>
                <div className='steps'>
                    <div className="step">
                        <h2>Request Your Quote</h2>
                        <p>Tell us about yourself by filling out a short form about your home insurance needs. It takes approximately 3 minutes.</p>
                    </div>
                    <div className="step">
                        <h2>Compare Multiple Plans</h2>
                        <p>Compare quotes with your current policy and see how much you can save.</p>
                    </div>
                    <div className="step">
                        <h2>Saving Money</h2>
                        <p>You can change your Home Insurance policy and start saving money!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComp