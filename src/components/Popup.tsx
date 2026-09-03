import usePopupStore from "../store/popupStore";

export default function Popup({ children }: { children: React.ReactNode }) {
	const setIsPopupVisible = usePopupStore((state) => state.setIsPopupVisible);

	return (
		<div
			className="w-screen h-dvh absolute bg-black/30 flex items-center justify-center backdrop-blur-[5px]"
			onClick={() => setIsPopupVisible()}
		>
			<div
				className="rounded-3xl border-boxBorder shadow-[0_0_5px_0.5px_#8b5cf633] p-8.25 lg:w-105 lg:h-auto bg-white font-inter text-16"
				onClick={(e) => e.stopPropagation()}
			>
				<p className="text-textMuted">{children}</p>
				<button
					className="w-full h-13 bg-primary rounded-2xl text-16 mt-8 font-semibold text-background shadow-[0_3px_6px_3px_#8B5CF633] cursor-pointer"
					onClick={() => setIsPopupVisible()}
				>
					OK
				</button>
			</div>
		</div>
	);
}
