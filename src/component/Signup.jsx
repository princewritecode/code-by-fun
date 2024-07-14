import './signup.css';

function Signup()
{
    return (
        <div className="main-section">
            <div className="left-section">
                <h1 className='main-heading'>Learn to code by <br></br> watching others</h1>
                <p className="main-info">
                    See how experienced developers solve problems in real-time.<br></br> Watching
                    scripted tutorials is great, but understanding how <br></br> developers think is
                    invaluable.
                </p>
            </div>
            <div className="right-section">
                <button className='button-free-trials'>Try it free 7 days then $20/mo. thereafter</button>
                <div className="form-section">
                    <form className="form-group">
                        <input type="text" placeholder="First Name" className="nameInput" />
                        <input type="text" placeholder="Last Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button className='green-btn'>Claim your free trial</button>
                    </form>
                    <p>
                        By clicking the button, you are agreeing to our Terms and Services
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;