import MDTLogo from "../assets/logo.png";

export default function Header() {
	return (
		<header className="font-archivo flex items-center gap-2">
			<div>
				<img src={MDTLogo} alt="logo" className="w-15 brightness-75" />
			</div>
			<div>
				<p className="font-extrabold text-18">MDT STUDIO</p>
				<p className="font-medium text-14 text-textMuted font-inter">
					Your music everywhere.
				</p>
			</div>
		</header>
	);
}
