export default async function WhatHappends() {
	return (
		<section className="bg-dark-400 max-w-7xl mx-auto md:px-32 py-16 md:py-36 md:rounded-br-3xl md:rounded-tl-3xl">
			<h3 className="md:text-6xl text-center mb-16">
				Hvad skal der ske?
			</h3>
			<div className="flex justify-between items-center md:items-start flex-col gap-12 md:gap-0 md:flex-row *:mx-auto">
				<div className="w-64 text-center flex flex-col gap-4 items-center">
					<img src="/text.svg" alt="" />
					<h5>Udfyld bookingformular</h5>
					<p>
						Udfyld den mega varme bookingformular nedenfor og bliv
						kontaktet
					</p>
				</div>
				<img
					className="my-6 rotate-90 md:rotate-0 h-4 md:h-auto"
					src="/dots.svg"
					alt=""
				/>
				<div className="w-64 text-center flex flex-col gap-4 items-center">
					<img src="/phone.svg" alt="" />
					<h5 className="">Party-møde med DjPer</h5>
					<p>
						Samtale med DjPer, hvor vi sammen finder værktøjerne til
						din perfekte fest
					</p>
				</div>
				<img
					className="my-6 rotate-90 md:rotate-0 h-4 md:h-auto"
					src="/dots.svg"
					alt=""
				/>
				<div className="w-64 text-center flex flex-col gap-4 items-center">
					<img src="/dance.svg" alt="" />
					<h5>
						Party time med <br /> DjPer
					</h5>
					<p>
						Party time med DjPer der altid finder den rette stemning
						til din party
					</p>
				</div>
			</div>
		</section>
	);
}
