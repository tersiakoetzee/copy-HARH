import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../img/harh-logo.png";
import "./MenuBar.css";

export const MenuBar = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container className="menu-bar" fluid>
				<Navbar.Brand href="/">
					<img
						src={logo}
						width="153"
						height="47"
						className="d-inline-block align-top"
						alt="React Bootstrap logo"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse className="text-center" id="basic-navbar-nav">
					<Nav className="me-auto justify-content-end flex-grow-1">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/about">About</Nav.Link>
						{/* Program dropdown */}
						<NavDropdown title="Program" id="basic-nav-dropdown">
							<NavDropdown.Item href="/program">
								Program Outlay
							</NavDropdown.Item>
							<NavDropdown.Item href="/familydays">
								Family Days
							</NavDropdown.Item>
						</NavDropdown>
						{/* Projects dropdown */}
						<NavDropdown title="Projects" id="basic-nav-dropdown">
							<NavDropdown.Item href="/projects">Land</NavDropdown.Item>

							<NavDropdown.Item href="/futureplans">
								Future Plans
							</NavDropdown.Item>
						</NavDropdown>
						{/* Screening dropdown */}

						<NavDropdown title="Screening" id="basic-nav-dropdown">
							<NavDropdown.Item href="/admission">
								How Admission Works
							</NavDropdown.Item>
							<NavDropdown.Item href="/booking">
								Book a Screening
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="/testimonials">Testimonials</Nav.Link>
						{/* Fundings dropdown */}
						<NavDropdown title="Funding" id="basic-nav-dropdown">
							<NavDropdown.Item href="/fundingpartners">
								Funding Partners
							</NavDropdown.Item>
							<NavDropdown.Item href="/becomeafunder">
								Become a Funder
							</NavDropdown.Item>
						</NavDropdown>

						<Nav.Link className="btn text-dark donateColor" href="/donate">
							Donate Now
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
