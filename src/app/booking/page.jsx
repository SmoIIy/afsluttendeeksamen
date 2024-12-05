import Form from "../components/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatHappends from "../components/Whathappens";
import BookPer from "../components/Bookper";

export default async function Booking() {
	return (
		<div className="bg-[url('/bg_book.jpg')]  ">
			<Header />
			<BookPer />
			<WhatHappends className="" />

			<main>
				<section className="max-w-5xl mx-auto md:p-0 p-4">
					<div className="max-w-3xl mx-auto mb-8">
						<h2 className="">Book her</h2>
						<p className="text-xl text-cream-200">
							Fortæl mig om dit event ved at udfylde formularen
							herunder.
						</p>
					</div>
					<Form id="booking" />
				</section>
			</main>
			<Footer />
		</div>
	);
}
