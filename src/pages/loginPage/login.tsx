import Header from "../../components/Header";

export default function Login() {
	return (
		<div className="bg-background w-full h-dvh px-[min(3vw,40px)] py-[min(3vw,40px)]">
			<Header />
			<div className="w-full flex items-center justify-center max-w-250 ml-auto mr-auto mt-5 flex-col gap-10 lg:flex-row xl:mt-18 xl:gap-30">
				<div className="flex flex-col xl:w-1/2 items-center gap-3 xl:gap-6 lg:items-start lg:mb-30">
					<h1 className="font-archivo text-4xl font-extrabold lg:text-56">Dashboard</h1>
					<p className="hidden text-textMuted max-w-115.5 font-inter text-center text-14 lg:text-start lg:text-18 md:block">
						Nisi do sunt veniam esse quis ex labore Lorem et. Excepteur labore minim ea
						ea officia labore duis duis Lorem est tempor labore sint sint. Ipsum nostrud
						velit et qu
					</p>
				</div>

				<div className="w-full sm:w-1/2">
					<div className="rounded-3xl border-boxBorder shadow-[0_0_5px_0.5px_#8b5cf633] p-8.25 lg:w-105 lg:h-120">
						<form action="" className="flex flex-col items-center font-inter">
							<div className="w-full flex flex-col gap-1.75">
								<label
									htmlFor="emailAddress"
									className="text-14 font-semibold text-label"
								>
									Enter your email address
								</label>
								<input
									id="emailAddress"
									type="email"
									placeholder="someone@gmai.com"
									className="w-full h-12 rounded-xl border-2 border-boxBorder/50 outline-boxBorder/50 px-4 py-3 text-[15px]"
								/>
							</div>
							<div className="w-full flex flex-col gap-1.75 mt-5.25">
								<div className="flex justify-between items-center">
									<label
										htmlFor="emailAddress"
										className="text-14 font-semibold text-label"
									>
										Enter your password
									</label>
									<p className="text-12 text-primary font-semibold cursor-pointer">
										Forgot password?
									</p>
								</div>
								<input
									id="emailAddress"
									type="password"
									placeholder="********"
									className="w-full h-12 rounded-xl border-2 border-boxBorder/50 outline-boxBorder/50 px-4 py-3 text-[15px]"
								/>
							</div>

							<button
								type="submit"
								className="w-full h-13 bg-primary rounded-2xl text-16 mt-8 font-semibold text-background shadow-[0_3px_6px_3px_#8B5CF633] cursor-pointer"
							>
								Login
							</button>
							<p className="mt-5.25 text-textMuted text-14 cursor-pointer">
								Don’t have an account? Sign up
							</p>
							<div className="w-full h-0.5 bg-textMuted/30 mt-9.5"></div>
							<button
								type="button"
								className="w-full h-13 border-2 border-boxBorder/20 rounded-2xl text-black/80 mt-8 font-medium text-14 cursor-pointer"
							>
								Go to MDT STUDIO
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
