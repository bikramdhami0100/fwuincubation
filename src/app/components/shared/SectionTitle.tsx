// components/shared/SectionTitle.tsx
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, align = 'center' }) => {
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`mb-12 md:mb-16 ${alignmentClass[align]}`}>
      {subtitle && (
        <p className="text-brand-primary font-semibold text-sm md:text-base uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
        {title}
      </h2>
      <div className={`mt-4 h-1.5 w-20 ${align === 'center' ? 'mx-auto' : (align === 'right' ? 'ml-auto' : '')} bg-brand-accent rounded-full`}></div>
    </div>
  );
};

export default SectionTitle;