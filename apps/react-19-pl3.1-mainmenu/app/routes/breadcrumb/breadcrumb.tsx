import { PatternlibBreadcrumbItemV1, PatternlibBreadcrumbV1, PatternlibLink } from '@liebherr/patternlib-react';
import React from 'react';

export default function Breadcrumb() {
  const clickHandler = (evt: React.MouseEvent<HTMLPatternlibBreadcrumbItemV1Element>, key: string) => {
    evt.stopPropagation();
    console.log('clickHandler Item:', key);
  };
  return (
    <PatternlibBreadcrumbV1 aria-label="Breadcrumb">
      <PatternlibBreadcrumbItemV1 onClick={evt => clickHandler(evt, 'home')}>
        <PatternlibLink type={'prominent'} hideIcon={true} href={'#'} label={'Home'} target={'_self'}></PatternlibLink>
      </PatternlibBreadcrumbItemV1>
      <PatternlibBreadcrumbItemV1 onClick={evt => clickHandler(evt, 'productGroup')}>
        <PatternlibLink
          type={'prominent'}
          hideIcon={true}
          href={'#'}
          label={'Product Group'}
          target={'_self'}
        ></PatternlibLink>
      </PatternlibBreadcrumbItemV1>
      <PatternlibBreadcrumbItemV1 onClick={evt => clickHandler(evt, 'product')}>
        <PatternlibLink
          type={'prominent'}
          hideIcon={true}
          href={'#'}
          label={'Product'}
          target={'_self'}
        ></PatternlibLink>
      </PatternlibBreadcrumbItemV1>
      <PatternlibBreadcrumbItemV1 onClick={evt => clickHandler(evt, 'product')}>
        <PatternlibLink
          active={true}
          type={'prominent'}
          hideIcon={true}
          href={'#'}
          label={'Product Detail'}
          target={'_self'}
        ></PatternlibLink>
      </PatternlibBreadcrumbItemV1>
    </PatternlibBreadcrumbV1>
  );
}
