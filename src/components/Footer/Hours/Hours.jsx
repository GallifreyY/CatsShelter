import React from "react";

import "./Hours.css";

const Hours = props => {
    return (
        <div className="Hours">
            <h4>Adoption Hours</h4>
            <section>
                Monday to Friday 3 - 9pm
            </section>
            <section>
                Saturday 3 - 5pm
            </section>
            <section className="Hours-adnotation">
                Other times by appointment
            </section>
        </div>
    );
}

export default Hours;