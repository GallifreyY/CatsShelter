import React from "react";

import "./Address.css";

const Address = props => {
    const catAngelsGoogleMaps = "https://www.google.com/maps/place/Cat+Angels+Pet+Adoptions+Inc/@35.8014009,-78.7868544,17z/data=!3m1!4b1!4m5!3m4!1s0x89acf2be379cba99:0x25f02e6fce1d6be5!8m2!3d35.8013966!4d-78.7846657";

    return (
        <div className="Address">
            <h4>Cat Angels Pet Adoptions</h4>
            <section>
                <a href={catAngelsGoogleMaps}>959 N. Harrison Avenue</a>
            </section>
            <section>
              <a href={catAngelsGoogleMaps}>27513 Cary, NC</a>
            </section>
            <section>
              Phone: 919-463-9586
            </section>
            <section>
              Fax: 800-715-2998
            </section>
            <section>
              Email: catangels@gmail.com
            </section>
            <section className="Address-adnotation">
              Please note that we do not have office staff so calls and emails may take some time to be replied to. Please be patient with us.
            </section>
            {/* <Paragraph paragraphBlue>959 N. Harrison Avenue</Paragraph>
            <Paragraph paragraphBlue>27513 Cary, NC</Paragraph>
            <Paragraph paragraphBlue>Phone: 919-463-9586</Paragraph>
            <Paragraph paragraphBlue>Fax: 800-715-2998</Paragraph>
            <Paragraph paragraphBlue>Email: catangels@gmail.com</Paragraph> */}
        </div>
    );
};

export default Address;