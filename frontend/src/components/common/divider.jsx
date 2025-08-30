export default function Divider({label}){
    return (
        <div className="flex items-center gap-2 my-6">
            <div className="flex-grow h-px bg-gray-300" ></div>
            {label && <span className="text-gray-500 text-sm">{label}</span>}
            <div className="flex-grow h-px bg-gray-300" ></div>
        </div>
    );
}