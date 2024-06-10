import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PyroButton } from "@/components/ui/PyroButton";

export const metadata: Metadata = {
	title: "Pyro - Pyrodactyl",
	description:
		"Pyrodactyl is Pyro's open, secure, and scalable server management platform. It's the world's best Pterodactyl panel with incredible performance and unmatched features.",
	openGraph: {
		title: "Pyro - Pyrodactyl",
		description:
			"Pyrodactyl is Pyro's open, secure, and scalable server management platform. It's the world's best Pterodactyl panel with incredible performance and unmatched features.",
		images: [
			{
				url: "./og_pyrodactyl.png",
			},
		],
	},
};

const Page = () => {
	return (
		<>
			<div className="relative z-10 h-full max-h-[800px] w-full overflow-clip rounded-3xl bg-brand text-white">
				<div className="relative mx-auto flex h-full w-full container flex-col items-center px-6">
					{" "}
					<div className="z-10 mx-auto mt-12 flex h-full w-full flex-col items-center justify-between gap-8 lg:flex-row lg:gap-0">
						<h1 className="w-full font-extrabold text-[max(30px,min(5vw,42px))] leading-[1.2] tracking-[-0.14rem] drop-shadow-xl lg:w-1/2">
							Pyrodactyl is Pyro&apos;s open, secure, and scalable servers platform
						</h1>
						<div className="flex w-full flex-col gap-8 lg:w-1/3 lg:gap-4">
							<p className="text-[#ffffffbb] text-[20px] leading-[155%]">
								It&apos;s the world&apos;s best Pterodacyl panel. Unmatched performance and features.
							</p>
							<PyroButton variant="secondary" href="https://github.com/pyrohost/panel">
								Star on GitHub
							</PyroButton>
						</div>
					</div>
					<div className="relative mt-8 min-h-[750px] w-full scale-[1.08]">
						<Image src="/img/panelhero_2x.png" width={4144} height={2464} className="w-full" alt="" quality={100} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
