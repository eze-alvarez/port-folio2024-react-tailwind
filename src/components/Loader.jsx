export default function Loader({ text = 'cargando ...', height = '80', width = '80' }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 ">
      <div
        className={`border-gray-300 animate-spin rounded-full border-8 border-t-indigo-500`}
        style={{ height: `${height}px`, width: `${width}px` }}
      ></div>
      {text && <p className="text-center ">{text}</p>}
    </div>
  );
}
