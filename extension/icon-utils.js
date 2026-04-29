'use strict';

(function attachIconUtils(globalScope) {
  function getHostname(url) {
    if (!url) return '';
    try {
      return new URL(url).hostname;
    } catch {
      return '';
    }
  }

  function getGoogleFaviconUrl(hostname, size = 16) {
    if (!hostname) return '';
    return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(hostname)}&sz=${size}`;
  }

  function escapeHtml(value = '') {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function escapeHtmlAttribute(value = '') {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function getFallbackLabel(label, hostname = '') {
    const cleanLabel = (label || '').trim();
    if (cleanLabel) {
      const tokens = cleanLabel
        .split(/[\s./:_-]+/)
        .filter(Boolean)
        .slice(0, 2)
        .map(token => token[0]?.toUpperCase() || '');
      const joined = tokens.join('');
      if (joined) return joined;
    }

    const cleanHost = hostname.replace(/^www\./, '');
    return (cleanHost.slice(0, 2) || '?').toUpperCase();
  }

  function getIconSources({ favIconUrl = '', url = '' } = {}, size = 16) {
    const hostname = getHostname(url);
    const sources = [];

    if (favIconUrl) sources.push(favIconUrl);
    if (hostname) sources.push(getGoogleFaviconUrl(hostname, size));

    return {
      hostname,
      sources,
    };
  }

  function getGroupIcon(group, label, size = 32) {
    const tabs = group?.tabs || [];
    const preferredTab = tabs.find(tab => tab?.favIconUrl) || tabs[0] || {};
    const { hostname, sources } = getIconSources(preferredTab, size);
    const customIconUrl = typeof group?.iconUrl === 'string' ? group.iconUrl.trim() : '';
    const preferTextIcon = group?.iconMode === 'label' || group?.preferTextIcon === true;
    const fallbackLabel = getFallbackLabel(group?.iconLabel || label, hostname);

    if (preferTextIcon) {
      return {
        hostname,
        src: '',
        fallbackSrc: '',
        fallbackLabel,
      };
    }

    return {
      hostname,
      src: customIconUrl || sources[0] || '',
      fallbackSrc: customIconUrl ? '' : (sources[1] || ''),
      fallbackLabel,
    };
  }

  const api = {
    escapeHtml,
    escapeHtmlAttribute,
    getFallbackLabel,
    getGoogleFaviconUrl,
    getGroupIcon,
    getHostname,
    getIconSources,
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }

  globalScope.TabOutIconUtils = api;
})(typeof globalThis !== 'undefined' ? globalThis : window);
