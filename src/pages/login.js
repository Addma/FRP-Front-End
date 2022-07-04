import Nav from '../components/nav';
import { Link } from 'react-router-dom';
import {useState, useRef, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../features/userSlice';
import Footer from '../components/footer';
const Login = () => {
    const user = useSelector((state) => state.user.user)   
    console.log(user);
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const dispatch = useDispatch();
    const loginRef = useRef(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        loginRef.current.style.opacity = "0";
        const user = {email: email, password: password}
        try {
        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        const data = await response.json();
        console.log("res", data);
         if (data.user){
             console.log(data);
            alert("Login successful");
            dispatch(login(data.user))
            window.location.href = '/dashboard'
        } else {
            if (data.message){
                alert(data.message);
            }else
            alert('Please check your email/password')
        }
    }catch(err) {
        console.log(err);
        alert("Something wrong happened... try again");
    }
        setEmail('');
        setPass('');
        loginRef.current.style.opacity = "1";
    }

    useEffect(() => {
        dispatch(logout())
    }, [dispatch])
    return (
        <div>
        <Nav /> 
        <div id="login">
        <form onSubmit={handleSubmit}>
            <div id="login-form">
                <div>
            <h1>Hello,</h1>
            <h1>Welcome Back</h1>
                </div>
            <label htmlFor="email">Email:</label>
            <input onChange={e => setEmail(e.target.value)} id="email" value={email} placeholder="info@example.com"/>
            <label htmlFor="password">Password:</label>
            <input type="password" onChange={e => setPass(e.target.value)} id="password" value={password}/>
            <button type="submit" ref={loginRef}>Login</button>
            <p>Not a member? <Link to="/signup">Register now</Link></p>
            </div>
        </form>
        </div>
        <Footer/>
        </div>
    )
}
export default Login;