import React from 'react'
import './style.css'

function Weddindsite() {
  return (
    <>
<body>
<section>
    <div class="parent">
        <div class="child">
            <b><span>GET IN TOUCH</span></b> 
                <form action="">
                <label for="name">Name*</label>
                <br/>
                <input required id="name"/>
                <br/>
                <label for="phone">Mobile No.*</label>
                <br/>
                <input type="number" required id="phone"/>
                <br/>
                <label for="email">Email Address</label>
                <br/>
                <input type="email" required id="email"/>
                <br/>
                <label for="pre-wed">Pre wedding</label>
                <br/>
                <input id="pre-wed"/>
                <br/>
                <label for="message">Your Message</label>
                <br/>
                <input id="message"/>
                <br/>
                <br/>
                <button>Submit</button>
            </form>
                
        </div>
    </div>
</section>
{/* <audio  loop autoplay controls >
    <source src="Untitled video - Made with Clipchamp-[AudioTrimmer.com]-[AudioTrimmer.com].mp3" type="audio/mp3"/>
</audio> */}
</body>    


</>
  )
}

export default Weddindsite;

