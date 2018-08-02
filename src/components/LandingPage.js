import React from "react";
import TabsPage from "./TabsPage";
import { Row, Col } from "mdbreact";

const LandingPage = () => {
  return (
    <div className="row fill-margin">
      <div className="col-md-6 landing-left-column align-text-bottom">
        <Row>
          <Col md="12">
            <div className="mb-5 flex-center">
              <a className="fb-ic">
                <i className="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a>
              <a className="tw-ic">
                <i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a>
              <a className="gplus-ic">
                <i className="fa fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a>
              <a className="li-ic">
                <i className="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a>
              <a className="ins-ic">
                <i className="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a>
              <a className="pin-ic">
                <i className="fa fa-pinterest fa-lg white-text fa-2x"> </i>
              </a>
            </div>
          </Col>
        </Row>
      </div>
      <div className="col-md-6">
        <TabsPage />
      </div>
    </div>
  );
};

export default LandingPage;
