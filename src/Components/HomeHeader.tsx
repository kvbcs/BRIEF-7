import React from "react";
import LoginButton from "./Buttons/LoginButton";
import RegisterButton from "./Buttons/RegisterButton";

const HomeHeader = () => {

	return (
		<header className="bg-black w-full h-[10vh] flex flex-row items-center justify-between px-5">
			<div className="h-[90%] w-[100px]">
				<img src="Logo.png" alt="logo" className="h-full w-full" />
            </div>
            <div className="flex flex-row gap-[50px] h-[90%] items-center">
			<LoginButton />
                <RegisterButton />
                </div>
		</header>
	);
};

export default HomeHeader;
