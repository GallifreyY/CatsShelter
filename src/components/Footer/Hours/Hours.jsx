import React from "react";

import "./Hours.css";

const Hours = props => {
    return (
        <div className="Hours">
            <h4>Adoption Hours</h4>
            <section>
                Thursday 3 - 6pm
            </section>
            <section>
                Friday 3 - 6pm
            </section>
            <section>
                Saturday 1 - 5pm
            </section>
            <section className="Hours-adnotation">
                Other times by appointment
            </section>
        </div>
    );
}

export default Hours;