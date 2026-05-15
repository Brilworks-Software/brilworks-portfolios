export default function Hero({ totalCount }: { totalCount: number }) {
  return (
    <div className="pt-16 text-center">
      <span className="inline-block text-xs font-semibold tracking-widest text-blue-600 uppercase mb-4">
        Brilworks Portfolio
      </span>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
        We Build Things That{" "}
        <span className="text-blue-600">Actually Work</span>
      </h1>
      <p className="max-w-2xl mx-auto text-gray-500 text-lg leading-relaxed mb-8">
        Explore our collection of {totalCount}+ products — web apps, browser
        extensions, and mobile applications crafted by the Brilworks team.
      </p>
    </div>
  );
}
