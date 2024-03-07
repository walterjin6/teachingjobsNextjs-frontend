import Image from 'next/image';

type Props = {
  width?: number;
  height?: number;
  dimensions?: number;
  forceClass?: string;
};

const Logo = ({ width = 32, height = 32, dimensions, forceClass }: Props) => (
  <Image
    src="/teaching-jobs-logo.png"
    alt="Teaching Jobs Logo"
    width={dimensions ? dimensions : width}
    height={dimensions ? dimensions : height}
    className={forceClass}
  />
);

export default Logo;
