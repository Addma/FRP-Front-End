import React from 'react';
import { useState } from "react"
import BG from '../help';
import Nav from './nav';
import { Link } from 'react-router-dom';
import Footer from './footer';
import Terms from './terms';
const SignUp = () => {

    const [pass, setPass] = useState('');
    const [email, setMail] = useState('');
    const [account, setAccount] = useState('grower');
    const [address, setAddress] = useState('');
    const [org, setOrg] = useState('');
    const [pass2, setPass2] = useState('');
    const [conditions, setConditions] = useState(false) 
    const [terms, setTerms] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (pass !== pass2){
        alert("Passwords don't match")
        setPass('');
        setPass2('');
            return;
        }

        let newUser = {
            organization: org,
            email: email,
            password: pass,
            account: account,
            address: address
        }
        const res = await fetch("http://localhost:3001/signup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser)
        })
        const data = await res.json();
        if (data.status === "ok"){
            alert("You have been signed up. Redirecting to login...");
            window.location.href= "/login";
        } else {
            alert("You already have an acount with this e-mail.");
        }
        setPass('');
        setMail('');
        setAccount('');
        setAddress('');
        setOrg('');
    }
    console.log(terms)
    return (
        <div>
            <Nav bg={BG()}/>
        <div id="signup">
        <form onSubmit={handleSubmit}>
            <div id="signup-form">
                
                <h1>Sign up</h1>
                <div>
                <label htmlFor='signup-org'>Organization</label>
                <input onChange={e => setOrg(e.target.value)} value={org} id="signup-org"/>
                </div>
                <div>
                <label htmlFor="signup-email">E-mail Address</label>
                <input value={email} onChange={e => setMail(e.target.value)} id="signup-email" placeholder="name@example.com"/>
                </div>
                <div>
                <label htmlFor="signup-password">Password <span style={{fontSize: "12px"}}>(6 or more characters)</span></label>
                <input type="password" value={pass} onChange={e => setPass(e.target.value)} id="signup-password" placeholder="Password"/>
                </div>
                <div>
                <label htmlFor="signup-password2">Confirm Password</label>
                <input type="password" value={pass2} onChange={e => setPass2(e.target.value)} id="signup-password2" placeholder="Confirm Password"/>
                </div>
                <div>
                <label htmlFor="signup-address">Address of Community Garden/Kitchen:</label>
                <input value={address} onChange={e => setAddress(e.target.value)} id="signup-address" placeholder=""/>
                </div>
                <div>
                <label htmlFor="account" id="account-label">
                <label>Grower<input name="account" type="radio" value="grower" onChange={e => setAccount(e.target.value)} checked={account === 'grower'} /></label>
                <label>Kitchen<input type="radio" name="account" value="kitchen" onChange={e => setAccount(e.target.value)} checked={account === 'kitchen'}/></label>
                <label>Both<input type="radio" name="account" value="both" onChange={e => setAccount(e.target.value)} checked={account === 'both'}/></label>
                </label>
                </div>
                <label htmlFor="conditions" id="conditions-label">
                <input type="checkbox" checked={conditions} onChange={() => setConditions(!conditions)}/> I have read and agreed to the &nbsp;<span onClick={() => setTerms(true)}>terms and conditions.</span>
                </label>
                <button type="submit">Register</button>
                <p>Have an account? <Link to="/login">Login</Link></p>
            </div>
        </form>
        
        </div>
        {terms && <Terms closeTerms={setTerms} acceptTerms={setConditions}/>}
        <Footer />
        </div>
        
    )

}
export default SignUp;