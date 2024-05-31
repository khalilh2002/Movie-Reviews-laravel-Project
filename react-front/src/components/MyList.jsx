import Header from './Header';
import { Nav } from 'react-bootstrap';

function MyList(urlVar){
  let CmpList = urlVar.Cmp ;
  return (
    <>
      <Header />
      <Nav className="navbar navbar-expand-lg navbar-dark bg-dark m-0">
        <div className="container-fluid justify-content-around">
          <ul className="navbar-nav">
            <Nav.Item className="nav-item mx-3">
              <Nav.Link href="/User/List/Favorite" active>Favorite</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item mx-3">
              <Nav.Link href="/User/List/PlanToWatch" >Plan to watch</Nav.Link>
            </Nav.Item>
          </ul>
        </div>
      </Nav>
      <CmpList/>
    </>
  );
}

export default MyList;
