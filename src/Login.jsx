import './Login.css';

function Login() {
  return (
    <div className="Login">
      <header className="App-header">
        <p>
          <strong>Login </strong>
        </p>
        <div className="logincontainer">
          <div className="logincard">
            <form action="">
              <label htmlFor="">User</label><br />
              <input type="text" /><br />

              <label htmlFor="">Password</label><br />
              <input type="password" /><br />

              <input type="submit" value="enviar"/>
            </form>
          </div>
        </div>
        
      </header>
      
    </div>
  );
  
}

export default Login;
