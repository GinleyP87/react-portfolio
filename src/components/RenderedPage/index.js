import React, { useState } from 'react';
import About from '../About';
import Contact from '../Contact';
import Nav from '../NavBar';
import Portfolio from '../Portfolio';
import Resume from '../Resume';

function RenderedPage () {

    const [thisPage, setThisPage] = useState('About');

    const displayPage = () => {
        switch (thisPage) {
            case 'About':
                return <About />;
            case 'Contact':
                return <Contact />;
            case 'Portfolio':
                return <Portfolio />
            case 'Resume':
                return <Resume />
            default:
                return <About />
        }
    }

    return (
        <div>
            <Nav thisPage={thisPage}  setThisPage={setThisPage} />
            <div>{displayPage(thisPage)}</div>
        </div>
    )
}

export default RenderedPage;