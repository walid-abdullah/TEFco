const COPIES = 4;

export default function LogoMarquee({ logos = [] }) {
  if (logos.length === 0) return null;

  // The track rolls by half its width, so an even number of copies loops cleanly.
  const copies = Array.from({ length: COPIES }, (_, copy) => copy);

  return (
    <div className="sg-logos">
      <div className="sg-logos-track">
        {copies.flatMap((copy) => logos.map((logo) => {
          const decorative = copy > 0;
          if (logo.text) {
            return <span className="sg-logo-word" key={`${logo.name}-${copy}`} aria-hidden={decorative || undefined}>{logo.name}</span>;
          }
          return (
            <img
              className={logo.raw ? "is-raw" : undefined}
              key={`${logo.name}-${copy}`}
              src={logo.src}
              alt={decorative ? "" : logo.name}
              style={logo.h ? { height: logo.h } : undefined}
              loading="lazy"
            />
          );
        }))}
      </div>
    </div>
  );
}
