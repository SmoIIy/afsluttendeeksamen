import Link from "next/link";

export default function Nav() {
    return (
        <div className="flex justify-center items-center ">
            <ul>
                <li>
                    <Link href="/login">Login</Link>
                </li>
                <li>
                    <Link href="/notes">Notes</Link>
                </li>
                <li>
                    <Link href=""></Link>
                </li>
            </ul>
        </div>
    );
}
