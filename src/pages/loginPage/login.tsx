import Header from "../../components/Header";
import React, { useState } from "react";
import Popup from "../../components/Popup";
import usePopupStore from "../../store/popupStore";
import { useShallow } from "zustand/shallow";

//icons
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { MdOutlineArrowLeft } from "react-icons/md";

export default function Login() {
	const [authState, setAuthState] = useState("login");

	const { isPopupVisible, setIsPopupVisible } = usePopupStore(
		useShallow((state) => ({
			isPopupVisible: state.isPopupVisible,
			setIsPopupVisible: state.setIsPopupVisible,
		})),
	);

	const [authData, setAuthData] = useState({
		email: "",
		password: "",
	});

	const [authError, setAuthError] = useState({
		email: "",
		password: "",
	});

	const [popupMessage, setPopupMessage] = useState("");

	const [isPassHidden, setIsPassHidden] = useState(true);

	function handleAuthState(state: string) {
		setAuthState(state);
	}

	function handleAuth(e: React.MouseEvent) {
		e.preventDefault();
		const { email, password } = authData;
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		const passRegex = /^(?=.*[0-9])(?=.*[A-Z\W_]).{8,}$/;

		if (authState === "signup" || authState === "login") {
			if (!emailRegex.test(email)) {
				setAuthError((prev) => ({ ...prev, email: "Please enter a valid email address." }));
				return;
			}
			if (password.length < 8) {
				setAuthError((prev) => ({
					...prev,
					password: "Password is too weak. It should be at least 8 characters long.",
				}));
				return;
			} else if (!passRegex.test(password)) {
				setAuthError((prev) => ({
					...prev,
					password: "Password must content Number, Capital latter or Special symbol.",
				}));
				return;
			}

			if (authState === "signup") {
				setPopupMessage(
					"Account created! Please check your email to verify your account before logging in.",
				);
				setIsPopupVisible();
			}
		} else if (authState === "forgotPass") {
			if (!emailRegex.test(email)) {
				setAuthError((prev) => ({ ...prev, email: "Please enter a valid email address." }));
			} else {
				setPopupMessage(
					"Password Reset! A reset link has been sent to your email please check and verify.",
				);
				setIsPopupVisible();
			}
		}
	}

	return (
		<>
			{isPopupVisible && <Popup>{popupMessage}</Popup>}
			<div className="bg-background w-full h-dvh px-[min(3vw,40px)] py-[min(3vw,40px)]">
				<Header />
				<div className="w-full flex items-center justify-center max-w-250 ml-auto mr-auto mt-5 flex-col gap-10 lg:flex-row xl:mt-18 xl:gap-30">
					<div className="flex flex-col xl:w-1/2 items-center gap-3 xl:gap-4 lg:items-start lg:mb-30">
						<h1 className="font-archivo text-4xl font-extrabold lg:text-56">
							Dashboard
						</h1>
						<p className="hidden text-textMuted max-w-115.5 font-inter text-center text-14 lg:text-start lg:text-16 md:block tracking-wide">
							Welcome to <b>MDT STUDIO</b>. Sign in to your dashboard to view all your
							distributed releases, track generated revenue and active subscriptions,
							and analyze comprehensive performance data for every track.
						</p>
					</div>

					<div className="w-full sm:w-1/2">
						<div className="rounded-3xl border-boxBorder shadow-[0_0_5px_0.5px_#8b5cf633] p-8.25 lg:w-105 lg:h-auto">
							<form action="" className="flex flex-col items-center font-inter">
								<div className="w-full flex flex-col gap-1.75 mb-2">
									<label
										htmlFor="emailAddress"
										className="text-14 font-semibold text-label"
									>
										Enter your email address
									</label>
									<input
										id="emailAddress"
										type="email"
										value={authData.email}
										onChange={(e) =>
											setAuthData((prev) => ({
												...prev,
												email: e.target.value,
											}))
										}
										onClick={() => (authError.email = "")}
										placeholder="someone@gmai.com"
										className="w-full h-12 rounded-xl border-2 border-boxBorder/50 outline-boxBorder/50 px-4 py-3 text-[15px]"
									/>
									<p className="text-red-500 font-inter text-12 h-3">
										{authError.email != "" && authError.email}
									</p>
								</div>
								<div
									className={`w-full flex flex-col gap-1.75 ${authState === "forgotPass" && "hidden"}`}
								>
									<div className="flex justify-between items-center">
										<label
											htmlFor="password"
											className="text-14 font-semibold text-label"
										>
											Enter your password
										</label>
										<p
											className="text-12 text-primary font-semibold cursor-pointer active:scale-95 transition-all duration-200"
											onClick={() => handleAuthState("forgotPass")}
										>
											{authState === "login" && "Forgot password?"}
										</p>
									</div>
									<div className="flex items-center">
										<input
											id="password"
											type={isPassHidden ? "password" : "text"}
											placeholder="********"
											value={authData.password}
											onChange={(e) =>
												setAuthData((prev) => ({
													...prev,
													password: e.target.value,
												}))
											}
											onClick={() => (authError.password = "")}
											className="w-full h-12 rounded-xl border-2 border-boxBorder/50 outline-boxBorder/50 px-4 py-3 text-[15px]"
										/>
										<div
											className="h-full ml-2"
											onClick={() => setIsPassHidden((prev) => !prev)}
										>
											{isPassHidden ? (
												<FaEye className="scale-[130%] text-black/80" />
											) : (
												<IoMdEyeOff className="scale-[150%] text-black/80" />
											)}
										</div>
									</div>
									<p className="text-red-500 font-inter text-12 h-3">
										{authError.password != "" && authError.password}
									</p>
								</div>

								<button
									type="submit"
									className="w-full h-13 bg-primary rounded-2xl text-16 mt-3 font-semibold text-background shadow-[0_3px_6px_3px_#8B5CF633] cursor-pointer"
									onClick={handleAuth}
								>
									{authState === "login"
										? "Login"
										: authState === "signup"
											? "Sign up"
											: "Reset"}
								</button>
							</form>
							<p
								className="mt-5.25 text-textMuted text-14 cursor-pointer hover:text-primary active:scale-95 transition-all duration-200"
								onClick={() => handleAuthState("signup")}
							>
								{authState === "login" && "Don’t have an account? Sign up"}
							</p>

							<p
								className="mt-5.25 text-textMuted text-14 cursor-pointer hover:text-primary active:scale-95 transition-all duration-200"
								onClick={() => handleAuthState("login")}
							>
								{authState === "signup" && "Already have an account? Login"}
							</p>

							{authState === "forgotPass" && (
								<p
									className="mt-5.25 text-textMuted text-14 cursor-pointer hover:text-primary active:scale-95 transition-all duration-200 flex items-center"
									onClick={() => handleAuthState("login")}
								>
									<MdOutlineArrowLeft className="scale-200" />
									Go back to login.
								</p>
							)}

							<div className="w-full h-0.5 bg-textMuted/30 mt-9.5"></div>
							<button
								type="button"
								className="w-full h-13 border-2 border-boxBorder/20 rounded-2xl text-black/80 mt-8 font-medium text-14 cursor-pointer"
							>
								Go to MDT STUDIO
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
