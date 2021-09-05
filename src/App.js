import { useEffect, useState } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/App.css";
import fetchToServer from "./api/album-api";
import Pagination from "./components/Pagination";

function App() {
  const [list, setList] = useState([]);
  const [perPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await fetchToServer();
      setList(response);
    })();
  }, []);

  const lastAlbumIndex = currentPage * perPage;
  const firstAlbumIndex = lastAlbumIndex - perPage;
  const currentAlbums = list.slice(firstAlbumIndex, lastAlbumIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <Container>
        <Row className="mt-4 mb-4">
          <Col lg="5">
            <ListGroup>
              {currentAlbums.map((item) => (
                <ListGroup.Item key={item.id}>{item.title}</ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
        <Pagination
          perPage={perPage}
          listLength={list.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </Container>
    </div>
  );
}

export default App;
