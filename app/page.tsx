import Link from "next/link";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<h1 className="text-4xl font-bold">Pokemon Battling</h1>
				<p className="text-xl mb-4 text-center sm:text-left">
					Welcome to the Pokemon Battling App! Choose your Pokemon, select
					moves, and battle against a randomly selected opponent.
				</p>

				<div className="flex gap-4 items-center flex-col sm:flex-row">
					<Link
						className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
						href="/pkmn-select"
					>
						Start a Battle
					</Link>
					<Link
						className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
						href="/battle?format=gen3randombattle"
					>
						Quick Random Battle
					</Link>
				</div>

				<div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
					<h2 className="text-lg font-semibold mb-2">How It Works</h2>
					<ol className="list-decimal pl-5 space-y-2">
						<li>Select your Pokemon from the Gen 1 Pokedex</li>
						<li>Get assigned 4 random moves from that Pokemon's learnset</li>
						<li>
							The app will randomly select an opponent Pokemon with its own
							random moves
						</li>
						<li>Select moves for your Pokemon during the battle</li>
						<li>Watch the battle play out with detailed mechanics</li>
					</ol>
				</div>
			</main>
			<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
				<span className="text-sm text-gray-500">
					Built with @pkmn/ps libraries
				</span>
			</footer>
		</div>
	);
}
