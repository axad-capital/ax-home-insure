import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import './quotePage.css'
import FormImg from '../../ImageSrcHosting/TV_M239_05.jpg'

const QuotePage = () => {

    function getVarId() {
        var url = window.location.href;
        var match = url.match(/source=(\d+)/)
        if (match) {
            var varId = match[1];
            return varId
        }
        return 21
    }

    function quoteFormHandler() {
        let formData = {
            id: uuidv4(),
            homeOwner: document.getElementById('home-owner').value,
            insured: document.getElementById('insured').value,
            zipcode: document.getElementById('form-zip').value
        }

        let allData = {
            "tracking": {
                "content_type": "xml/json",
                "ni_ad_client": 669716,
                "ni_zc": formData.zipcode,
                // "ip": data.ip,
                "ua": navigator.userAgent,
                "ni_var1": getVarId(),
                "ni_ref": "/thank-you"
            },
            "contact": {
                "zip": formData.zipcode,
                "homeowner": formData.homeOwner,
            },
            "current_insurance": {
                "currently_insured": formData.insured,
            },
        }

        fetch("https://www.nextinsure.com/listingdisplay/listings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(allData)

        }).then(res => {
            return res.json()
        }).then(data => {
            if (data.listings === '') {
                window.location.href = '/thank-you'
            }
            console.log(data)
            localStorage.setItem('adData', JSON.stringify(data))
            window.location.href = '/thank-you'
        })
        // })
    }

    return (
        <div>
            <div className='main-form-container'>
                <div className='form-img-container'>
                    <img className='form-img' src={FormImg} alt="form-img" />
                </div>
                <div className='quote-form'>
                    <h1 id='quote-heading'>Get A Free Quote Now</h1>
                    <p className='quote-sub-heading'>Stay Home & Find Affordable Home Insurance In 2 Minutes</p>
                    <div className='quote-form-info'>
                        {/* <label htmlFor="first">First Name</label>
                    <input id='first' name='first' className='form-input' type="text" placeholder='First Name' /> */}

                        {/* <label htmlFor="last">Last Name</label>
                    <input id='last' name='last' className='form-input' type="text" placeholder='Last Name' /> */}

                        <label className='zip-code-label' htmlFor="zip">Enter Your Zipcode</label>
                        <input id='form-zip' name='zip' className='form-input' type="text" placeholder='Zipcode' />

                        {/* <label htmlFor="email">Email</label>
                    <input id='email' name='email' className='form-input' type="text" placeholder='Email' /> */}

                        {/* <label htmlFor="bday">Date of Birth</label>
                    <input id='bday' name='bday' className='form-input' type="date" /> */}

                        <label htmlFor="home-owner">Are you a Home Owner?</label>
                        <select id='home-owner' className='form-input' name="home-owner">
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                        <label htmlFor="insured">Are you currently insured?</label>
                        <select id='insured' className='form-input' name="insured">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>

                        {/* <label htmlFor="phone-num">Phone Number</label>
                    <input id='phone-num' name='phone-num' className='form-input' type="text" placeholder='Phone Number' /> */}

                        <br />
                        <button className='form-btn' onClick={quoteFormHandler}>Submit</button>
                        <br />
                    </div>
                    <p className='permission'>By clicking "Submit", I provide my express written consent via electronic signature authorizing AxHomeInsure and one or more Home Insurance specialists, their agents and marketing partners to contact me and other related products and services to the number and email address I provided (including any wireless number). I further expressly consent to receive telemarketing emails, calls, text messages, pre-recorded messages, and artificial voice messages via an autodialed phone system, even if my telephone number is a mobile number that is currently listed on any state, federal or corporate ???Do Not Call??? list. I understand that my consent is not a condition of purchase of any goods or services and that standard message and data rates may apply.</p>
                </div>
            </div>
        </div>
    )
}

export default QuotePage