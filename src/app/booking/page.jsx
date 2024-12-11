import Form from "../components/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatHappends from "../components/Whathappens";
import BookPer from "../components/Bookper";
import Inkluderet from "../components/Inkluderet";
import Opsætning from "../components/Opsætning";

export default async function Booking() {
	return (
		<div className="bg-[url('/bg_book.jpg')] bg-no-repeat bg-cover">
			<main>
				<Header />
				<BookPer className="my-20" />
				<WhatHappends className="my-20" />
				<Inkluderet className="my-20" />
				<Opsætning className="my-20" />
				<section className="max-w-5xl mx-auto md:p-0 p-4 mb-20">
					<div className="max-w-3xl mx-auto mb-8">
						<h2 className="">Book her</h2>
						<p className="text-xl text-cream-200">
							Fortæl mig om dit event ved at udfylde formularen
							herunder.
						</p>
					</div>
					<span id="bookingformular" />
					<Form />
				</section>
			</main>
			<Footer />
		</div>
	);
}
