import "./register.scss";

const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Converge</h1>
                    <p>Welcome to Converge! A music social media app! Changing interactions one song at a time!</p>
                    <span>Have an account?</span> 
                    <button>Login</button>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" /> 
                        <input type="text" placeholder="Name" /> 
                        <button>Register</button> 
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register 