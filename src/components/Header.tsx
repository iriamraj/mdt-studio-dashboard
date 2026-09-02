import MDTLogo from "../assets/logo.png";

export default function Header() {
	return (
		<header className="font-archivo flex items-center gap-2">
			<div>
				<img src={MDTLogo} alt="logo" className="w-14 xl:w-15 brightness-75" />
			</div>
			<div>
				<p className="font-extrabold  text-[min(3.5vw,18px)]">MDT STUDIO</p>
				<p className="font-medium text-textMuted font-inter text-[min(3vw,14px)]">
					Your music everywhere.
				</p>
			</div>
		</header>
	);
}
