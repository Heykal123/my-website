import React from 'react'

export default function Contact() {
  return (
    <div id='Contact'>
        <section id="contact-section">
    <div className="container11">
        <h2>Contact Me</h2>
        <p>Email us keep date with our latest new</p>
        <div className="contact-form">
            {/* <!-- firs the grid section -->
           
            <!-- section grid  --> */}
            <div>
                <form>
                    <input type="text" placeholder="Your Name" required/>
                    <input type="text" placeholder="last Name" required/>
                    <input type="Email" placeholder="Email" required/>
                    <input type="text" placeholder="subject of this message" required/>
                    <textarea name="message" placeholder="message" id="" cols="" rows="5"></textarea>
                    <center><button class="submit">send message</button></center>
                    
                </form>
            </div>
        </div>
    </div>
    <footer><br />
        <center><p>@Ahmed| All right reserved.</p></center>
    </footer>

</section>
      
    </div>
  )
}