import React from 'react'
import {Row,Col} from "reactstrap"
import Categories from "../Categories/Categories"
import Products from "../Products/Products";
const Dashboard = props => {

        return (
            <div>
                <Row>
                <Col xs="3">
                    <Categories/>
                </Col>
                <Col xs="9">
                    <Products/>
                </Col>
                </Row>
            </div>
        )

}
 export default Dashboard;