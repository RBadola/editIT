import { Link } from "react-router-dom"
// import New from "../assets/New.gif"

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo">EDIT<i>IT</i></div>
        <div className="linkBtns">
              <Link to="/">
            <button className="editBtn">
              Edit
              </button>
              </Link>
              <Link to="/cropper" >
            <button className="cropBtn">
              Crop
              {/* <image src={New} className="gif" alt="gif" /> */}
              </button>
              </Link>
        </div>
    </nav>
  )
}

export default Navbar