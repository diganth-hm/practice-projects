function BookCard({
  title,
  author,
  category,
  image,
  borrowed,
  onBorrow
}) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">

      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover rounded-lg"
      />

      <div className="mt-4">

        <h2 className="text-lg font-semibold">
          {title}
        </h2>

        <p className="text-gray-600 text-sm mt-1">
          {author}
        </p>

        <p className="text-gray-500 text-sm mt-1">
          {category}
        </p>

        <button
          onClick={onBorrow}
          disabled={borrowed}
          className={`w-full mt-4 py-2 rounded-lg text-white transition

          ${
            borrowed
              ? "bg-green-600"
              : "bg-blue-700 hover:bg-blue-600"
          }`}
        >

          {
            borrowed
              ? "Borrowed"
              : "Borrow"
          }

        </button>

      </div>

    </div>
  );
}

export default BookCard;