import { supabase } from "../utils/supabase/settings";

export default async function Form() {
    return (
        <form action={handleForm} className="flex flex-col w-96 *:my-4">
            <label htmlFor="date">Date</label>
            <input type="date" name="date" id="date" />
            <label htmlFor="message">Message</label>
            <input type="text" name="message" />
            <input type="submit" value="Submit" className="border" />
        </form>
    );
}

async function handleForm(formData) {
    "use server";
    const formdata = {
        date: formData.get("date"),
        title: formData.get("message"),
    };

    const { data, error } = await supabase
        .from("notes")
        .insert([formdata])
        .select();
    if (error) {
        console.log(error);
    }
    if (data) {
        console.log(data);
    }
}
