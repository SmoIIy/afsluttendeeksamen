"use client";

import { useEffect, useState } from "react";
import { supabase } from "src/app/utils/supabase/settings";
import { formatDate } from "src/app/utils/actions/formatdate";
import Confirmeddate from "./Confirmeddate";

const ItemList = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const { data, error } = await supabase
				.from("confirmed")
				.select("*");
			if (error) console.error(error);
			else setItems(data);
		};

		fetchData();

		// Set up real-time subscription
		const subscription = supabase
			.channel("public:confirmed")
			.on(
				"postgres_changes",
				{ event: "*", schema: "public", table: "confirmed" },
				(payload) => {
					if (payload.eventType === "INSERT") {
						setItems((prevItems) => [...prevItems, payload.new]);
					} else if (payload.eventType === "DELETE") {
						setItems((prevItems) =>
							prevItems.filter(
								(item) => item.id !== payload.old.id,
							),
						);
					} else if (payload.eventType === "UPDATE") {
						setItems((prevItems) =>
							prevItems.map((item) =>
								item.id === payload.new.id ? payload.new : item,
							),
						);
					}
				},
			)
			.subscribe();

		return () => {
			subscription.unsubscribe();
		};
	}, []);

	return (
		<div>
			<h2 className="text-green-400 text-5xl my-8">
				Bekræftede henvendelser
			</h2>
			<div className="flex gap-4 max-w-7xl flex-wrap">
				{items &&
					items.map((item) => {
						const formattedItem = {
							...item,
							date: formatDate(item.date),
						};
						return (
							<Confirmeddate data={formattedItem} key={item.id} />
						);
					})}
			</div>
		</div>
	);
};

export default ItemList;
