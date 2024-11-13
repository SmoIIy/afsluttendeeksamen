import Example from "../components/Example";
import Form from "../components/Form";

import { supabase } from "../utils/settings";

export default async function Notes() {
    const { data } = await supabase.from("notes").select();
    console.log(data);

    return (
        <>
            <Form />
            <Example className="text-blue-500">Test</Example>
            {data.map((note, i) => (
                <div key={i}>
                    <p>{note.title}</p>
                </div>
            ))}
        </>
    );
}
