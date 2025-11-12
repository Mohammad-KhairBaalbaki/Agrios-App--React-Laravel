

const Dropdown = ({btnTitle,listItem}) => {
  return (
    <div>
        <div className="dropdown  drpdwn">
          <button className=" btn dropdown-toggle drobtn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {btnTitle}
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">{listItem}</a></li>
          </ul>
        </div>
    </div>
  )
}

export default Dropdown








