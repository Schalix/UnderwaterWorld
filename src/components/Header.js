import Nav from 'react-bootstrap/Nav'

const Header = () => {

    return (
        <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Fish</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Log In
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Header