import { Container, Row, Col, Image } from "react-bootstrap"
import ImageURLs from "./ImageURLs"


function StoreListing() {
    const h2Style = {
        fontSize: '36px',
        lineHeight: '50px',
        marginTop: '20px',
        textAlign: 'center',
        fontWeight: 'normal'
    }
    const imgStyle = {
        height: '50px',
        width: '50px',
        border: '1px solid #E8E9EB'
    }
    const rowStyle = {
        borderBottom: '1px solid #E8E9EB',
        display: 'flex',
        justifyContent: 'space-evenly',
        textAlign: 'center'
    }

    return (
        <div>
            <h2 style={h2Style}>Browse stores in Four Oaks</h2>
            <Container>
                <Row style={rowStyle}>
                    <Col sm='.5' md='2' lg='4'>
                        <Image style={imgStyle} src={ImageURLs.Publix} roundedCircle />
                        <h5>Publix</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                    <Col sm='.5' md='2' lg='4'>
                        <Image style={imgStyle} src={ImageURLs.SproutsFarmersMarket} roundedCircle />
                        <h5>Sprout's Farmers Market</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                    <Col sm='.5' md='2' lg='4'>
                        <Image style={imgStyle} src={ImageURLs.HarrisTeeter} roundedCircle />
                        <h5>Harris Teeter</h5>
                        <p>Delivery</p>
                    </Col>
                </Row>
                <Row style={rowStyle}>
                    <Col sm='.5' md='2' lg='4'>
                        <Image style={imgStyle} src={ImageURLs.CarlieCsIGA} roundedCircle />
                        <h5>Carlie C's IGA</h5>
                        <p>Delivery</p>
                    </Col>
                    <Col sm='.5' md='2' lg='4'>
                        <Image style={imgStyle} src={ImageURLs.FamilyDollar} roundedCircle />
                        <h5>Family Dollar</h5>
                        <p>Delivery</p>
                    </Col>
                    <Col sm='.5' md='2' lg='4'>
                        <Image style={imgStyle} src={ImageURLs.Walgreens} roundedCircle />
                        <h5>Walgreen's</h5>
                        <p>Delivery</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default StoreListing