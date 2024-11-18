import { cn } from "/src/utils/minor";

export default function Example({ className, children }) {
    return <p className={cn("text-2xl font-bold", className)}>{children}</p>;
}
