import React from 'react'
import './homeComp.css'
import HomeImg from './home-img.png'
import AxHome from './axhome.png'

function HomeComp() {

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
                {/* <div className='form-container'>
                    <label htmlFor="home-zip">Enter Your Zipcode</label>
                    <input className='home-zip-input' name='home-zip' type="text" placeholder='Zipcode' />
                    <button onClick={handleFormSubmit} className='zip-btn'>Submit</button>
                </div> */}
                <h2 className='form-info'>Let us do the searching for you so you can see how much you can save with an affordable home owners insurance plan.</h2>
                <div className='button-container'>
                    <button onClick={() => window.location.href = '/get-quote'} className='get-quote-btn'>Get A Quote</button>
                </div>
            </div>

            <div className="line"></div>

            <div className='step-container'>
                <h1 className="step-container-title">3 Easy Steps To Get Affordable Home Insurance</h1>
                <div className='steps'>
                    <div className="step">
                        <h2>Request Your Quote</h2>
                        <div className="line3"><div className="line3"></div></div>
                        <br />
                        <p>Tell us about yourself by filling out a short form about your home insurance needs. It takes approximately 3 minutes.</p>
                    </div>
                    <div className="step">
                        <h2>Compare Multiple Plans</h2>
                        <div className="line3"><div className="line3"></div></div>
                        <br />
                        <p>Compare quotes with your current policy and see how much you can save.</p>
                    </div>
                    <div className="step">
                        <h2>Saving Money</h2>
                        <div className="line3"><div className="line3"></div></div>
                        <br />
                        <p>You can change your Home Insurance policy and start saving money!</p>
                    </div>
                </div>
            </div>
            <div className="line"></div>

            <div id="about-us">
                <h2 className='about-us-title'>🏚️ What We Do 🏚️</h2>
                <div className="line2"></div>
                <h4 className='about-us-text'>AxHomeInsure is an innovative technology company that helps homeowner insurance shoppers find the most affordable and comprehensive home insurance on the market. </h4>
                <br />
                <h4 className='about-us-text'>We believe that searching for a policy to protect your home should be a convenient and straightforward task, which is why we offer multiple insurance company quotes within minutes of searching.</h4>
            </div>
            <br />
            <br />
            <br />

            <div id="what-is">
                <div className='what-is-title-container'>
                    <img className='axhome' src={AxHome} alt="home" />
                    <h1 className="what-is-title">What Is Home Insurace?</h1>
                </div>
                <div className="what-is-info">
                    <h2>Home insurance, or homeowner's insurance (abbreviated sometimes as HOI), is a type of insurance that covers a private residence. It is a policy that groups various personal insurance protections, which can include losses occurring to one's home, its contents, loss of use living expenses, or loss of other personal possessions of the owner of the home, as well as coverage for liability for accidents that may happen at the home or at the hands of the homeowner within their property.</h2>
                </div>
                <div className='button-container'>
                    <button onClick={() => window.location.href = '/get-quote'} className='get-quote-btn'>Get A Quote</button>
                </div>
                <br />
            </div>
        </div>
    )
}

export default HomeComp