import React from 'react'
import './MainPage.css'
import { MDBBtn } from 'mdb-react-ui-kit';
function MainPage() {
    return (
        <div className='container'>
            <div className="container my-3">
                <h2 className='heading my-3'>Epic Games : An American Video Game And Sofware Developer <br /> And Publisher Based in Cary,North Carolina</h2>
                <div className='container my-4'>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <img className='img1' src="https://thegamerhq.com/wp-content/uploads/2021/02/14br-consoles-1920x1080-wlogo-1920x1080-432974386.jpg" alt="" />
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
                <div className="sub-heading">
                    <h6>Create,play, and battle with friends for free Fortbite.Be the last player standingin the Battle Royale and Zero Build,Experiance a concert or
                        live event, or discover over a million creator made games.including racing,parkour, zombie survival and more.Each Fortnite island has
                        an individual age rating so you could find the one that's right to you and your friends. Find it all in Fortnite...Drop in </h6>
                </div>
                <div className="btn">

                    <button className='btn1' >View Website</button>
                </div>

                <div className="container my-4">
                    <div className="row">
                        <div className="col-4">
                       <img className='img2' src="https://th.bing.com/th/id/R.8ae3cf96bd23cbc4ad394041009817b8?rik=Su68MY%2fkenhrjQ&riu=http%3a%2f%2fcdn.escapistmagazine.com%2fmedia%2fglobal%2fimages%2flibrary%2fderiv%2f1412%2f1412476.jpg&ehk=s4PEYlmy9WX7v9q0ZC7DXZ7zpAKFoAyqoK3QB116jkY%3d&risl=&pid=ImgRaw&r=0" alt="" />
                       <div className="sub-heading2 my-3">
                       <p> Explore Large,Destructible <br /> Environments Where No Two Games <br /> Are Ever The Same</p>
                       </div>
                        </div>
                        <div className="col-4">
                        <img className='img2' src="https://cdn2.unrealengine.com/Fortnite/home-v2/ASPOT_Image-3840x2308-35330d4be45373960682e7ef88da5b4c2d8e790f.jpg" alt="" />
                        <div className="sub-heading2" my-3>
                            <p>Team Up With Friends By Spriting, <br />Climbing And Smashing Your Way To <br />Earn Your Victory Royale</p>
                        </div>
                        </div>
                        <div className="col-4">
                         <img className='img2' src="https://content.assets.pressassociation.io/2019/01/29162016/9a5b2cef-c092-40ea-ae57-b064da2801ba.jpg" alt="" />
                         <div className="sub-heading2" my-3>
                            <p>Discover Even More Ways To Play <br /> Across Thousnads of Creators-Made <br />Game Geners</p>
                         </div>
                        </div>
                    </div>
                </div>

                <div className="sub-hading-3">
                    <h3>Our Contribution</h3>
                    <p>Our core offerings extend sbeyond mere profit generation, We emphasize the growth and active involvement of our user <br />
                    community, Collaborating with us representsan investment , rather than amere expenditure. our dedication to providing <br />
                    distinctive digital interactions guranteesunparalleled benefits for our clientele</p>
                </div>

                <div className="container my-4">
                    <div className="row my-5">
                        <di className="col-4">
                            <div className='sub-heading4'>
                            <h1 >5M</h1>
                            <p>Digital User <br /> Engagements</p>
                            </div>
                        
                        </di>
                        <di className="col-4">
                            <div className='sub-heading4'>
                            <h1>$500K</h1>
                            <p>Revenue Surge for an <br /> Platform</p>

                            </div>
                            
                        </di>
                        <di className="col-4">
                            <div className='sub-heading4'>
                            <h1>10X</h1>
                            <p>ROAS on all our <br />marketing campagins</p>
                            </div>
                            
                        </di>
                    </div>
                </div>

                <div className="subheading-5">
                    <h3>Interested in Delving Deeper Into The Project?</h3>
                    <div>
                        <p>if you'd like to explore further details about our intiatives or any of our <br />
                        affilited brands ,don't hesutate to connect .You can reach out to our via <br />
                        email at <span style={{fontWeight:'1000'}}> hello@abc.com</span> or give us a call at <span style={{fontWeight:'1000'}}>+91 480 20802730</span> </p>
                    </div>
                    <div>
                        <button className='btn-2 mx-3'> Ring us on Skype</button>
                        <button className='btn-3'>Contact Us</button>
                    </div>
                </div>
                <div className='footer'>
                    <p className='footer-heading'> © 2019-2023 abc Technology Solutions Pvt Ltd All Rights Reserved</p>
                </div>


            </div>
        </div>
    )
}

export default MainPage