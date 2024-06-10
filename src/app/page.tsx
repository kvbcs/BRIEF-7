"use client";
import { useRouter } from "next/navigation";

export default function Home() {
	const { push } = useRouter();
	return (
		<div className="p-12 flex justify-center">
			<button
				className="bg-sky-500 p-3 rounded-full"
				onClick={() => {
					push("/register");
				}}
			>
				register
			</button>
			<button
				className="bg-sky-500 p-3 rounded-full"
				onClick={() => {
					push("/login");
				}}
			>
				login
			</button>
		</div>
	);
}
