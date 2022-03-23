import React from "react";

import "./Address.css";

const Address = props => {
    const catAngelsGoogleMaps = "https://www.google.com/maps/place/National+University+of+Singapore/@1.2937413,103.7747931,17.5z/data=!4m9!1m2!2m1!1sNUS!3m5!1s0x31da1a56784202d9:0x488d08d6c1f88d6b!8m2!3d1.2966426!4d103.7763939!15sCgNOVVMiA4gBAVoFIgNudXOSAQp1bml2ZXJzaXR5"
    return (
        <div className="Address">
            <h4>Cat Shelters</h4>
            <section>
                <a href={catAngelsGoogleMaps}>National University of Singapore</a>
            </section>
            <section>
              <a href={catAngelsGoogleMaps}>21 Lower Kent Ridge Road</a>
            </section>
            <section>
            <a href={catAngelsGoogleMaps}>Singapore 119077</a>
            </section>
            <section>
              Phone: +6582254456
            </section>
            <section>
              Email: catshelters@gmail.com
            </section>
            <section className="Address-adnotation">
              Please note that we do not have office staff so calls and emails may take some time to be replied to. Please be patient with us.
            </section>
        </div>
    );
};

export default Address;