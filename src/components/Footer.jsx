import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container-footer">
				<div className="redes">
					<a href="https://www.linkedin.com/in/matias-chanquia/" target="_blank" rel="noreferrer">
						<img src="/assets/linkedin.png" alt="logo linkedin"/>
					</a>
					<a href="https://github.com/matiaschanquia" target="_blank" rel="noreferrer">
						<img src="/assets/github.png" alt="logo github"/>
					</a>
				</div>
				<p>&copy; Copyright Todo App Simple - Matias Chanquia Dev</p>
			</div>
		</footer>
	);
};

export default Footer;