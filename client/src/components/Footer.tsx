import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="body__footer footer clear">
      <Link to="/" >
        <div className="footer__shop">
          <span>shop</span>
        </div>
      </Link>

      <Link to="/about">
        <div className="footer__about">
          <span>about</span>
        </div>
      </Link>

    </div>
  )
}

export {
  Footer
};
