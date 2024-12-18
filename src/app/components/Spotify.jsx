import cn from "classnames";

export default async function Spotify({ className }) {
	return (
		<section
			className={cn(
				className,
				"dark-bg mx-auto px-6 md:px-32 py-16 lg:py-32 gap-20 grid grid-cols-1 lg:grid-cols-2",
			)}
		>
			<div>
				<iframe
					src="https://open.spotify.com/embed/playlist/7dNu5ec4U9TQ7F9w1V7bLr?utm_source=generatort&theme=0"
					width="100%"
					height="352"
					frameBorder="0"
					allowFullScreen=""
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"
				/>
			</div>
			<div className="order-first lg:order-2">
				<h3 className="text-cream-400">Hør mine festfavoritter</h3>
				<p>
					Lyt til min Spotify-playliste og få et indblik i de sange,
					der sætter gang i dansegulvet. Perfekt som forsmag på din
					næste fest!
				</p>
			</div>
		</section>
	);
}
