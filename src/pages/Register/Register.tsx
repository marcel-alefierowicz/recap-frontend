import './register.css';

export const Register = () => {
    return(
        <div className='page'>
            <div className="container">
                <div className="boxtop">
                    <p>create an account</p>
                </div>
                <div className='formdiv'>
                   <form action={''} method="post">
                        <div className='segment'>
                            <div className="inputcontainer">
                                <div className="icon"></div>
                                <div className="input"></div>
                            </div>
                        </div>
                        <div className="segment"></div>
                        <div className="segment"></div>
                        <div className="segment"></div>
                    </form> 
                </div>
                <div className="footer">
                    <p>hello bro</p>
                </div>
            </div>
        </div>
    )
}