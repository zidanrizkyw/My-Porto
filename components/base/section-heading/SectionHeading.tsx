interface SectionHeadingProps {
  children: React.ReactNode;
}

// Sticky label on small screens; the left-column nav takes over on large ones.
const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => {
  return (
    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      <h2 className="text-sm font-bold uppercase tracking-widest text-heading">
        {children}
      </h2>
    </div>
  );
};

export default SectionHeading;
