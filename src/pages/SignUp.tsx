export const SignUp = () => {
    return (
        <div>
            <section className="probootstrap-cover overflow-hidden relative" style={{backgroundImage: 'url("assets/images/bg_1.jpg")'}} data-stellar-background-ratio="0.5" id="section-home">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-md">
                            <h2 className="heading mb-2 display-4 font-light probootstrap-animate">Welcom to the hotel</h2>
                            <p className="lead mb-5 probootstrap-animate">By creating new account, we will be able to provide better service </p>
                            <p className="lead mb-5 probootstrap-animate">Already have an account?<br />Log In here</p>
                            <p className="probootstrap-animate">
                                <a href="log-in.jsp" role="button" className="btn btn-primary p-3 mr-3 pl-5 pr-5 text-uppercase d-lg-inline d-md-inline d-sm-block d-block mb-3">Log In</a>
                            </p>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}