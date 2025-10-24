export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-card/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Votre Nom. Tous droits réservés.
          </p>
          <p className="text-muted-foreground text-sm">
            Fait avec <span className="text-primary">♥</span> en utilisant{" "}
            <span className="text-primary font-semibold">Next.js</span> &{" "}
            <span className="text-primary font-semibold">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
