// components/common/Logo.tsx
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image src="/logo.png" alt="FWU Incubation Center Logo" width={40} height={40} className="h-10 w-auto" />
      <span className="text-xl font-bold text-brand-primary hover:text-brand-accent transition-colors">
        FWU Incubation
      </span>
    </Link>
  );
};

export default Logo;