import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ToolCard({ tool }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
      <p className="text-gray-600 mb-3 text-sm">{tool.description}</p>
      <p className="text-primary font-bold mb-4">{tool.price}</p>
      <button className="bg-secondary text-white px-4 py-2 rounded w-full hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2">
        <FontAwesomeIcon icon="shopping-cart" />
        Buy Now
      </button>
    </div>
  )
}
