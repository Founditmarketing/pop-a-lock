import React, { useEffect } from 'react';
import { SITE_URL } from '../constants';

interface PageSEOProps {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  jsonLd?: object | object[];
  ogImage?: string;
}

const upsertMeta = (attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
  return el;
};

const upsertCanonical = (href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
  return el;
};

const SEO_MANAGED_ATTR = 'data-seo-managed';

export const PageSEO: React.FC<PageSEOProps> = ({ title, description, path, noIndex, jsonLd, ogImage }) => {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path}`;
    const previousTitle = document.title;
    document.title = title;

    const managedTags: HTMLElement[] = [];
    const track = (el: HTMLElement) => {
      el.setAttribute(SEO_MANAGED_ATTR, 'true');
      managedTags.push(el);
      return el;
    };

    track(upsertMeta('name', 'description', description));
    track(upsertMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow'));
    track(upsertCanonical(canonicalUrl));

    track(upsertMeta('property', 'og:title', title));
    track(upsertMeta('property', 'og:description', description));
    track(upsertMeta('property', 'og:url', canonicalUrl));
    track(upsertMeta('property', 'og:type', 'website'));
    track(upsertMeta('property', 'og:image', ogImage ? `${SITE_URL}${ogImage}` : `${SITE_URL}/logo.png`));

    const scripts: HTMLScriptElement[] = [];
    if (jsonLd) {
      const entries = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      entries.forEach((entry) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(entry);
        script.setAttribute(SEO_MANAGED_ATTR, 'true');
        document.head.appendChild(script);
        scripts.push(script);
      });
    }

    return () => {
      document.title = previousTitle;
      scripts.forEach((s) => s.remove());
    };
  }, [title, description, path, noIndex, jsonLd, ogImage]);

  return null;
};
