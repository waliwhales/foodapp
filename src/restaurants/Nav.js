const Nav = ()=> {


 return(
     <>
       <nav className="navbar navbar-expand-lg bg-danger fixed-top">
  <div className="container-fluid bg-danger">
    <a className="navbar-brand" href="index.html">
      EAT.PLAY.SLEEP
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="index.html">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="features.html">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="price.html">
            Pricing
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>

)
}
export default Nav