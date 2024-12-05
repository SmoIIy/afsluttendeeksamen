"use client";

import { useEffect, useState } from "react";
import { supabase } from "src/app/utils/supabase/settings";
import NewDate from "./Newdate";

const ItemList = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const { data, error } = await supabase.from("deleted").select("*");
			if (error) console.error(error);
			else setItems(data);
		};

		fetchData();

		// Set up real-time subscription
		const subscription = supabase
			.channel("public:deleted")
			.on(
				"postgres_changes",
				{ event: "*", schema: "public", table: "deleted" },
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
			<h2>Bekræftede henvendelser</h2>
			<div className="bg-green-200">
				{items &&
					items.map((item) => <NewDate data={item} key={item.id} />)}
			</div>
		</div>
	);
};

export default ItemList;
