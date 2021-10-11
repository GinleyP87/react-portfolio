import React from 'react';
// import mypic  from '../../assets/images/mypic';


function About() {
    return (
        <div className='about-container'>
            <div className='row'>

                <div className='col-6'>
                    {/* <img src={mypic} height='450px' width='300px' alt='This is me, standing against a wall, taking a selfie, pretending this is a professional photo.' /> */}
                </div>

                <div className='col-4'>
                    <p className='bio'>Going through life, I never really found something I wanted to do. My first major at Tri-C was IT Networking, and i was interested in it...
                        unfortunately I don't think I had the attention span for college back then. I changed majors one or two more times before I stopped going.
                        Working in nursing homes, getting into the pipefitters union, I never really felt a passion for any of that, I am on my computer a lot though.
                        Someone got to talking to me about them changing careers and they mentioned this bootcamp that they did. The more I read into the program, and coding itself,
                        the more videos I started watching on youtube, the more interested I became. Why wouldn't I be interested in how these things I use everyday get made and maintained. </p>
                </div>

            </div>
        </div>
    )
}

export default About;