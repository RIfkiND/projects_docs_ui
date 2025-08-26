import Link from "next/link";

export default function QuickstartPreview({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow"
    >
      <h2 className="text-xl font-bold mb-4">5 min Quickstart</h2>
      <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
        <li>
          <span className="font-semibold">Install:</span>{" "}
          <code>npm install your-package</code>
        </li>
        <li>
          <span className="font-semibold">Import:</span>{" "}
          <code>import {"{ Something }"} from 'your-package'</code>
        </li>
        <li>
          <span className="font-semibold">Run:</span>{" "}
          <code>your-command-here</code>
        </li>
      </ol>
      <Link
        href="/docs/quickstart"
        className="inline-block mt-2 text-blue-600 hover:underline font-medium"
      >
        Read Full Quickstart &rarr;
      </Link>
    </section>
  );
}
