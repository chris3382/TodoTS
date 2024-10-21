interface HeaderProps {
    title: string
    content: string
}
export default function ({ title, content }: HeaderProps) {
    return (
        <div className="flex gap-2 justify-center m-3 rounded-xl shadow-lg p-4 bg-slate-300">
            <h1>{title}</h1>
            <p className="pt-2 text-lg font-semibold italic text-slate-500">{`{ ${content} }`}</p>
        </div>
    )
}
