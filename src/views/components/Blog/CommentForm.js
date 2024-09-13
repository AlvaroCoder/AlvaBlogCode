import React, { useState } from 'react'

export default function CommentForm() {
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí manejarías el envío del comentario
        console.log("Comentario enviado:", comment);
        setComment(''); // Limpiar el campo después de enviar
    };
  return (
    <div className="md:w-[60%] bg-black_2   w-full mx-auto my-8 p-6 shadow-lg rounded-lg">
    <h2 className="text-2xl text-white font-semibold mb-4">Escribe un comentario</h2>
    <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <textarea
                className="w-full p-3 border bg-black_1 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Escribe tu comentario aquí..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
        </div>
        <div className="flex justify-end">
            <button
                type="submit"
                className="px-6 py-2 bg-naranja text-white rounded-lg hover:bg-naranja_200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Enviar
            </button>
        </div>
    </form>
</div>
  )
}
