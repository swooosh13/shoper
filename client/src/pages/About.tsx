const About = () => {
  return (
    <>
      <div className="about-block">
        <h1>Hi!</h1>
        <h2>This is about page</h2>
        <p>
          this page is a description of this online store, you can 
          view store items, add them to your cart and make purchases
        </p>
        <p>
          P.S. All of the above, of course, has not yet 
          been implemented and the whole site is so far 
          only an excuse to train my skills in programming 
          on React.js and design in figma. Of course, 
          the design is very similar to the Supreme website,
           I can't help but note that I was inspired by it 
           taking the reference
        </p>
        <p>
          BUT. Yet the design is very different, 
          although there is a similarity. I tried 
          to make it as simple and effective as 
          possible.
        </p>
        <p> You can follow me on <a href="https://www.instagram.com/artem.black/" target="_blank" rel="noreferrer" className="social-link">
          Instagram</a> or <a href="https://www.google.com/" className="social-link" target="_blank" rel="noreferrer">
            Telegram</a></p>

        <p className="about-block__created">created by @artyom.black</p>
      </div>

    </>
  )
}

export {
  About
};