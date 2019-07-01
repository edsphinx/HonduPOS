import React, { Component } from "react";
import { Row, Col, Table } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
class Listar extends Component {
  constructor(props) {
    super(props);
    this.props = { AllProducts: [], AllCategories: [], AllPayments: [] };
  }

  render() {
    return (
      <Row>
        <Col md={12}>
          <Card
            title="Listar Productos"
            ctTableFullWidth
            ctTableResponsive
            content={
              <Table striped hover>
                <thead>
                  {this.props.AllProducts.length > 0 ? (
                    <tr>
                      {Object.keys(this.props.AllProducts[0]).map((prop, key) => {
                        return <th key={key}>{prop.replace("_", " ")}</th>;
                      })}
                    </tr>
                  ) : null}
                </thead>
                <tbody>
                  {this.props.AllProducts.map((prop, key) => {
                    return (
                      <tr key={key}>
                        {Object.keys(prop).map((props, keys) => {
                          return <td key={keys}>{prop[props]}</td>;
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            }
          />
          <Card
            title="Listar Categorias"
            ctTableFullWidth
            ctTableResponsive
            content={
              <Table striped hover>
                <thead>
                  {this.props.AllCategories.length > 0 ? (
                    <tr>
                      {Object.keys(this.props.AllCategories[0]).map((prop, key) => {
                        return <th key={key}>{prop.replace("_", " ")}</th>;
                      })}
                    </tr>
                  ) : null}
                </thead>
                <tbody>
                  {this.props.AllCategories.map((prop, key) => {
                    return (
                      <tr key={key}>
                        {Object.keys(prop).map((props, keys) => {
                          return <td key={keys}>{prop[props]}</td>;
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            }
          />
          <Card
            title="Listar Modos de pago"
            ctTableFullWidth
            ctTableResponsive
            content={
              <Table striped hover>
                <thead>
                  {this.props.AllPayments.length > 0 ? (
                    <tr>
                      {Object.keys(this.props.AllPayments[0]).map((prop, key) => {
                        return <th key={key}>{prop.replace("_", " ")}</th>;
                      })}
                    </tr>
                  ) : null}
                </thead>
                <tbody>
                  {this.props.AllPayments.map((prop, key) => {
                    return (
                      <tr key={key}>
                        {Object.keys(prop).map((props, keys) => {
                          return <td key={keys}>{prop[props]}</td>;
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            }
          />
        </Col>
      </Row>
    );
  }
}

export default Listar;