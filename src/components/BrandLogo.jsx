// The supplied logo files. Pick by background:
// color-on-white on white, color-on-dark on black, color-on-violet on the brand colour.
export default function BrandLogo({ variant = "color-on-white", alt = "The Editly Foundry Co.", className }) {
  return (
    <img
      src={`/Logo/the-editly-foundry-co-horizontal-${variant}.svg`}
      alt={alt}
      width="1019"
      height="381"
      className={className}
    />
  );
}

// The D with the play shape, taken from the logo. Takes its colour from the surrounding text.
export function BrandMark() {
  return (
    <svg viewBox="21.06 18 18.8 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M21.06 18H29.86A10 10 0 0 1 29.86 38H21.06ZM26.23 22.6V33.4L35.47 28Z" />
    </svg>
  );
}
