import Link from 'next/link';

export const metadata = {
  title: "The Editly Foundry | Booking",
};

export default function BookingPage() {
  return (
    <>
  {/* Booking Section */}
  <main style={{"flex": "1", "display": "flex", "alignItems": "center", "justifyContent": "center", "padding": "60px 20px"}}>
    <div className="glass-card" style={{"maxWidth": "900px", "width": "100%", "display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "40px", "padding": "40px", "background": "var(--bg-secondary)"}}>
      
      {/* Founder Info */}
      <div style={{"display": "flex", "flexDirection": "column", "justifyContent": "center"}}>
        <div style={{"width": "150px", "height": "150px", "borderRadius": "50%", "overflow": "hidden", "marginBottom": "20px", "boxShadow": "0 10px 30px rgba(0,0,0,0.1)"}}>
          <img src="Picture/square.png" alt="Walid Abdullah" style={{"width": "100%", "height": "100%", "objectFit": "cover"}} />
        </div>
        <h1 style={{"fontSize": "2.5rem", "marginBottom": "5px"}}>Walid Abdullah</h1>
        <p style={{"color": "var(--text-muted)", "fontSize": "1.1rem", "marginBottom": "20px"}}>Founder & CEO, The Editly Foundry Co.</p>
        <p style={{"lineHeight": "1.6", "color": "var(--text-secondary)", "marginBottom": "30px"}}>
          Ready to scale your content? Book a 30-minute discovery call with me. We'll discuss your current bottlenecks, content goals, and how our studio-grade pipeline can help you dominate the algorithm.
        </p>
        <div style={{"display": "flex", "gap": "15px"}}>
          <a href="https://wa.me/8801885655888" target="_blank" className="btn btn-primary" style={{"background": "#25D366", "color": "#fff", "border": "none"}}><i className="fa-brands fa-whatsapp"></i> WhatsApp</a>
          <a href="mailto:w.abdullah5588@gmail.com" className="btn btn-outline"><i className="fa-solid fa-envelope"></i> Email Me</a>
        </div>
      </div>

      {/* Booking Form (Placeholder for Calendly) */}
      <div style={{"background": "var(--bg-primary)", "borderRadius": "var(--radius-lg)", "padding": "30px", "boxShadow": "var(--shadow-sm)"}}>
        <h3 style={{"marginBottom": "20px", "fontSize": "1.3rem"}}>Select a Date & Time</h3>
        <p style={{"color": "var(--text-muted)", "fontSize": "0.9rem", "marginBottom": "20px"}}>(Calendly Embed Placeholder - you can replace this section with your actual calendly embed code later)</p>
        
        <form style={{"display": "flex", "flexDirection": "column", "gap": "15px"}}>
          <div>
            <label style={{"display": "block", "fontWeight": "600", "marginBottom": "8px"}}>Date</label>
            <input type="date" style={{"width": "100%", "padding": "12px", "border": "1px solid var(--glass-border)", "borderRadius": "8px", "background": "transparent", "color": "var(--text-primary)"}} />
          </div>
          <div>
            <label style={{"display": "block", "fontWeight": "600", "marginBottom": "8px"}}>Time</label>
            <input type="time" style={{"width": "100%", "padding": "12px", "border": "1px solid var(--glass-border)", "borderRadius": "8px", "background": "transparent", "color": "var(--text-primary)"}} />
          </div>
          <div>
            <label style={{"display": "block", "fontWeight": "600", "marginBottom": "8px"}}>Name</label>
            <input type="text" placeholder="Your Name" style={{"width": "100%", "padding": "12px", "border": "1px solid var(--glass-border)", "borderRadius": "8px", "background": "transparent", "color": "var(--text-primary)"}} />
          </div>
          <div>
            <label style={{"display": "block", "fontWeight": "600", "marginBottom": "8px"}}>Email</label>
            <input type="email" placeholder="Your Email" style={{"width": "100%", "padding": "12px", "border": "1px solid var(--glass-border)", "borderRadius": "8px", "background": "transparent", "color": "var(--text-primary)"}} />
          </div>
          <button type="button" className="btn btn-primary pulse-anim" style={{"width": "100%", "justifyContent": "center", "marginTop": "10px"}}>Confirm Booking</button>
        </form>
      </div>

    </div>
  </main>

  
    </>
  );
}
