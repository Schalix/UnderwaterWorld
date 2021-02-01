// import Nav from 'react-bootstrap/Nav'

// const Header = () => {

//     return (
//         <Nav variant="pills" defaultActiveKey="/home">
//             <Nav.Item>
//                 <Nav.Link href="/home">Home</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//                 <Nav.Link eventKey="link-1">Fish</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//                 <Nav.Link eventKey="disabled" disabled>
//                 Chat
//                 </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//                 <Nav.Link eventKey="disabled" disabled>
//                 Log In
//                 </Nav.Link>
//             </Nav.Item>
//         </Nav>
//     )
// }

import { slide as Menu } from 'react-burger-menu'

const Header = () => {

    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu>
    )
}

export default Header