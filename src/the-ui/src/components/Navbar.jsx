const Navbar = () => {
  return (
    <nav style={{ marginBottom: "64px" }} className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Label</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link active" href="/users">Users</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/products">Products</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;