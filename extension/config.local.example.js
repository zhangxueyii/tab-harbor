'use strict';

// Copy this file to extension/config.local.js and adjust it for your own sites.

globalThis.LOCAL_LANDING_PAGE_PATTERNS = [
  // { hostname: 'calendar.google.com', pathExact: ['/calendar/u/0/r'] },
];

globalThis.LOCAL_CUSTOM_GROUPS = [
  {
    hostname: 'platform.deepseek.com',
    groupKey: 'deepseek-platform',
    groupLabel: 'DeepSeek Platform',
    iconMode: 'label',
    iconLabel: 'DP',
  },
  {
    hostname: 'api-docs.deepseek.com',
    groupKey: 'deepseek-api-docs',
    groupLabel: 'DeepSeek API Docs',
    iconMode: 'label',
    iconLabel: 'API',
  },
  // You can also group by suffix or path:
  // {
  //   hostname: 'github.com',
  //   pathPrefix: '/orgs/',
  //   groupKey: 'github-orgs',
  //   groupLabel: 'GitHub Orgs',
  //   iconMode: 'label',
  //   iconLabel: 'GH',
  // },
];
