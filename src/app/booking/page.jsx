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
				<BookPer className="lg:mb-60 mb-20 mt-10" />
				<WhatHappends className="lg:my-60 my-20" />
				<Inkluderet className="lg:my-60 my-20" />
				<Opsætning className="lg:my-60 my-20" />
				<section className="max-w-5xl mx-auto md:p-0 p-4 mb-40">
					<div className="max-w-3xl mx-auto mb-8">
						<span id="bookingformular" />
						<h2 className="">Book her</h2>
					</div>
					<Form />
				</section>
			</main>
			<Footer />
		</div>
	);
}
