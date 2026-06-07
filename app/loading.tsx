export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center text-[#14213D]">
      <div className="h-1.5 w-32 overflow-hidden rounded-full bg-[#F8F9FB]">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-[#FFD98A] via-[#F5B041] to-[#C4842A]" />
      </div>
      <p className="mt-6 text-[10px] font-bold tracking-[0.3em] text-[#F5B041]">PARA SONHO</p>
      <p className="mt-2 text-sm text-[#111111]/60">読み込み中...</p>
    </div>
  );
}
