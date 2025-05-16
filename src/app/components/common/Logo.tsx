// components/common/Logo.tsx
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ variant = 'light' }) => {
  const isLight = variant === 'light';

  return (
    <Link href="/" className="flex items-center space-x-2 group">
      <div className="relative h-10 w-10 overflow-hidden">
        <Image
          src="/logo.png"
          alt="Far Western University Logo"
          width={40}
          height={40}
          className="object-contain transform group-hover:scale-110 transition-transform duration-300 rounded-lg"
        />
      </div>
      <div className="flex flex-col">
        {isLight ? (
          <>
            <span className="text-lg font-bold text-blue-900 group-hover:text-blue-700 transition-colors leading-tight">
              Far Western University
            </span>
            <span className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors">
              Excellence • Innovation • Leadership
            </span>
          </>
        ) : (
          <>
            <span className="text-lg font-bold text-white group-hover:text-yellow-300 transition-colors leading-tight">
              Far Western University
            </span>
            <span className="text-xs text-gray-300 group-hover:text-white transition-colors">
              Excellence • Innovation • Leadership
            </span>
          </>
        )}
      </div>
    </Link>
  );
};

export default Logo;