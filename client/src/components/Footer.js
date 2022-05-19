import React from "react"


export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col-2">
                        <h3>Contact</h3>
                        <p>Questions? Go ahead.</p>
                        <form action="/action_page.php" target="_blank">

                            <div className="w3-section"><p><input className="w3-input w3-border" type="text" placeholder="Name" name="Name" required /></p></div>
                            <div className="w3-section"><p><input className="w3-input w3-borde" type="text" placeholder="Email" name="Email" required /></p></div>
                            <div className="w3-section"><p><input className="w3-input w3-border" type="text" placeholder="Subject" name="Subject" required /></p></div>
                            <div className="w3-section"><p><input className="w3-input w3-border" type="text" placeholder="Message" name="Message" required /></p></div>
                            <button type="submit" class="w3-button w3-block w3-gray">Send</button>
                        </form>
                    </div>
                    <div className="footer-col-2">
                        <img src="/images/EbookStore-Logo-footer.png" />
                        <p>
                            “Your time is limited, so don't waste it living someone else's life.”
                        </p> <br />
                        <p>--Steve Jobs--</p>
                    </div>

                    <div className="footer-col-4">
                        <h3>Follow us</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Youtube</li>
                            <li>Instagram</li>
                            <li>Twitterr</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="copyright">The best Management website</p>
            </div>
        </div>

    );
}