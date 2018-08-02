import React from "react";
import { Container, Footer } from "mdbreact";

class FooterPage extends React.Component {
  render() {
    return (
      <Footer color="indigo" className=" font-small pt-0" id="footer-custom">
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.vtuzone.com"> VTUZONE </a>
          </Container>
        </div>
      </Footer>
    );
  }
}

export default FooterPage;
