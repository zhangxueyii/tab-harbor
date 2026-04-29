'use strict';

// Checked-in defaults. Private overrides can extend these via config.local.js.
//
// Example:
// globalThis.LOCAL_CUSTOM_GROUPS = [
//   {
//     hostname: 'platform.deepseek.com',
//     groupKey: 'deepseek-platform',
//     groupLabel: 'DeepSeek Platform',
//     iconMode: 'label',
//     iconLabel: 'DP',
//   },
//   {
//     hostname: 'api-docs.deepseek.com',
//     groupKey: 'deepseek-api-docs',
//     groupLabel: 'DeepSeek API Docs',
//     iconMode: 'label',
//     iconLabel: 'API',
//   },
// ];
globalThis.LOCAL_LANDING_PAGE_PATTERNS = Array.isArray(globalThis.LOCAL_LANDING_PAGE_PATTERNS)
  ? globalThis.LOCAL_LANDING_PAGE_PATTERNS
  : [];
globalThis.LOCAL_CUSTOM_GROUPS = Array.isArray(globalThis.LOCAL_CUSTOM_GROUPS)
  ? globalThis.LOCAL_CUSTOM_GROUPS
  : [];
