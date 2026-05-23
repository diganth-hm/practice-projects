import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";

function MyBooks() {

  const borrowedBooks = [
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      borrowDate: "12 May 2026",
      dueDate: "26 May 2026",
      status: "Borrowed"
    },

    {
      title: "Atomic Habits",
      author: "James Clear",
      borrowDate: "10 May 2026",
      dueDate: "24 May 2026",
      status: "Borrowed"
    },

    {
      title: "The Midnight Library",
      author: "Matt Haig",
      borrowDate: "08 May 2026",
      dueDate: "22 May 2026",
      status: "Borrowed"
    }
  ];

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">

        <Navbar />

        <div className="p-8">

          <h1 className="text-3xl font-bold mb-2">
            My Books
          </h1>

          <p className="text-gray-600 mb-8">
            Books you have borrowed
          </p>

          <div className="bg-white rounded-xl shadow p-6">

            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="text-left p-4">
                    Book
                  </th>

                  <th className="text-left p-4">
                    Borrow Date
                  </th>

                  <th className="text-left p-4">
                    Due Date
                  </th>

                  <th className="text-left p-4">
                    Status
                  </th>

                  <th className="text-left p-4">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {borrowedBooks.map(
                  (
                    book,
                    index
                  ) => (

                    <tr
                      key={index}
                      className="border-b"
                    >

                      <td className="p-4">

                        <div>

                       <p className="font-semibold">
                        {book.title}                          </p>
                          <p className="text-sm text-gray-500">
                        {book.author}
                          </p>

                        </div>

             </td>
 
                      <td className="p-4">
                        {book.borrowDate}
                      </td>

                      <td className="p-4">
                        {book.dueDate}
                      </td>

                      <td className="p-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg">
                          {book.status}
                  </span>

                      </td>

                      <td className="p-4">

                        <button className="bg-blue-700 text-white px-4 py-2 rounded-lg">

                          Return

                        </button>

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default MyBooks;