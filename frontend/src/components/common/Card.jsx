export default function Card({image, title, description, score}){
    return(
        <div className="bg white border rounded-xl shadow hover:shadow-lg transition p-4">
            <img src={image} alt={title} className="w-full h-48 object cover rounded-lg mb-3"/>
            <h3 className="text-lg font-semibold ">{title}</h3>
            <p className="text-sm text-gray-600 mb-2">{description}</p>
            {score && (
                <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">
                    Similarity: {score}%
                </span>
            )}
        </div>
    );
}