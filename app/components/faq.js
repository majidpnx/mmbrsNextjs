export const FAQ = ({ question, answer }) => (
  <details className="border rounded-lg p-4 mb-2">
    <summary className="font-medium cursor-pointer">{question}</summary>
    <p className="mt-2 text-gray-600">{answer}</p>
  </details>
);
