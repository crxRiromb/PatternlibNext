import type { AdditionalLinksValue } from '@liebherr/patternlib/loader';
import { PatternlibFooter } from '@liebherr/patternlib-react';

export default function Footer() {
  const lazyFooterLinks: AdditionalLinksValue[] = [
    {
      itemId: 'imprint',
      label: 'ImpressumSuperLangerTextWasZumÜberlaufFührt',
      to: 'https://go.liebherr.com/81duXN',
      target: '_blank',
    },
    {
      itemId: 'privacy-policy',
      label: 'Datenschutz',
      to: 'https://go.liebherr.com/4A6w7G',
      target: '_blank',
    },
    {
      itemId: 'terms-of-use',
      label: 'Nutzungsbedingungen',
      to: 'https://go.liebherr.com/bkr321',
      target: '_blank',
    },
  ];
  const footerFixed = false;

  const handleArrowTopClick = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleLogoClick = (): void => {};
  const handleFooterLinkClick = (e: CustomEvent<{ itemId: string | number }>): void => {
    const item = lazyFooterLinks.find(item => item.itemId === e.detail.itemId);
    if (item) window.open(item.to, '_blank', 'noopener noreferrer');
  };

  return (
    <PatternlibFooter
      additionalLinks={lazyFooterLinks}
      showArrowIcon={!footerFixed}
      showLogo={!footerFixed}
      onLhClickArrowTop={handleArrowTopClick}
      onLhClickBrandLogo={handleLogoClick}
      onLhClickLink={handleFooterLinkClick}
    />
  );
}
