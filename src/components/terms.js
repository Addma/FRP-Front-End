

const Terms = ({closeTerms, acceptTerms}) => {
    return (
        <div id="terms-modal">
            <div className="terms-container">
                <div className="terms-exit"> <button onClick={() => closeTerms(false)}>X</button></div>
                <h1>Terms of Conditions</h1>
                <p>You need to accept this.</p>
                <div>
                    <button onClick={() => {acceptTerms(true); closeTerms(false)}}>Accept</button><button>Cancel</button>
                </div>
            </div>
        </div>
    )
}
export default Terms;