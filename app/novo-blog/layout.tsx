import Link from "next/link";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-navier-bg flex flex-col font-sans">
      {/* Navegação exclusiva do blog */}
      <header className="w-full bg-navier-green text-white py-5 px-6 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="font-serif text-xl tracking-widest hover:text-navier-peach transition-colors"
          >
            NAVIER
          </Link>
          <Link
            href="/"
            className="text-xs font-semibold uppercase tracking-widest hover:text-navier-peach transition-colors flex items-center gap-2"
          >
            <span aria-hidden="true">&larr;</span> Voltar à Loja
          </Link>
        </div>
      </header>

      {/* Conteúdo principal: as páginas filhas NÃO devem ter outro <main> */}
      <main className="flex-grow">{children}</main>
    </div>
  );
}
