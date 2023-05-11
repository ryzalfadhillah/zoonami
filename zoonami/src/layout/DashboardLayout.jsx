import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from '../components/Sidebar/Sidebar'
import { PropTypes } from 'prop-types';

const DashboardLayout = ({children}) => {
    return (
        <Container fluid>
            <Row>
                <Col xs={12} lg={3} className="p-0 vh-lg-100" style={{ backgroundColor: '#3C6255' }}>
                    <Sidebar />
                </Col>
                <Col xs={12} lg={9} className='vh-100' style={{ maxHeight: '100vh', overflowY: 'scroll'}}>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

DashboardLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DashboardLayout
