import React from 'react'
import instaprofile1 from '../Images/leftimg.png'
import profile from '../Images/login.jpg'


class Conditionform extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
         
         isloggedin: true   
        }

    }

    login = () => {
        this.setState({ isloggedin: false })
    }

    logout = () => {
        this.setState({ isloggedin: true})
    }

    render() {
       let { isloggedin } = this.state
if (isloggedin) {
    return(

        <>
        <div className='form-outer'>
            <div className='form-left-inner'>
                <img src={instaprofile1} alt='profile1'/>
            </div>
            <div className='form-right-inner'>
                <div className='login-page'>
                    <h1>Instagram</h1>
                    <form className='form-tag'>
                        <input type="text" placeholder="Phone number, username, or email" className="input"/>
                        <input type="password" placeholder="Password" className="input"/>
                    </form>
                    <button onClick={this.login}>Log in</button>
                </div>
            </div>
        </div>
           {/* <div className="from-outer">
            <h2 className='lo'>Login</h2>
            
            <input type="text" placeholder="Full Name" className="input"/>
            
            <input type="phone" placeholder="phone" className="input"/>
            <input type="password" placeholder="password" className="input"/>
        </div>
        
        <h1>Hello my name is pooja- go to <button onClick={this.login}>Login</button></h1> */}
        
        </>
    )
} else {
    return(

        <>
        <div className='form-outer'>
            <div className='form-left-inner'>
                <img src={instaprofile1} alt='profile1'/>
            </div>
            <div className='form-right-inner'>
                <div className='login-page'>
                    <h1>Instagram</h1>
                    <div className='pf-img'>
                        <div className='login-img'>
                            <img src={profile} alt='login profile'/>
                        </div>
                    </div>
                    <div className='continue'>Continue as <span className='id-color'>the-wcyx-wankers</span></div>
                    <button onClick={this.logout}>Log out</button>
                </div>
            </div>
        </div>


        {/* <div className="from-outer">
            <h2 className='lo'>Login</h2>
            
            <input type="text" placeholder="Pooja" className="input"/>
            
            <input type="password" placeholder="pooja@123" className="input"/>
        </div>
        <h1>Login pooja passowrd- button <button onClick={this.logout}>Logout</button></h1> */}
        
        </>
    )
    }
            
}

}


export default Conditionform