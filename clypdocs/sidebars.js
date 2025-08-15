// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  docs: [
    'README',
    {
      type: 'category',
      label: 'Welcome',
      items: ['welcome/welcome'],
    },
    {
      type: 'category',
      label: 'Syntax',
      items: ['syntax/syntax'],
    },
    {
      type: 'category',
      label: 'Types',
      items: ['types/types'],
    },
    {
      type: 'category',
      label: 'Standard Library',
      items: [
        'stdlib/stdlib',
        'stdlib/stdlib-overview',
        {
          type: 'category',
          label: 'Helpers',
          items: [
            'stdlib/response',
            'stdlib/fetch',
            'stdlib/read_file',
            'stdlib/write_file',
            'stdlib/memoize',
            'stdlib/time_it',
            'stdlib/is_empty',
            'stdlib/slugify',
            'stdlib/tostring',
            'stdlib/is_prime',
            'stdlib/to_roman_numerals',
            'stdlib/chance',
            'stdlib/duration',
            'stdlib/retry_with_cooldown',
            'stdlib/throttle',
            'stdlib/flatten',
            'stdlib/chunk',
            'stdlib/benchmark',
            'stdlib/cache',
            'stdlib/trace',
            'stdlib/ping',
            'stdlib/random_choice_weighted',
          ],
        },
        {
          type: 'category',
          label: 'std modules',
          items: [
            'stdlib/modules/stdlib-modules',
            'stdlib/modules/stdlib-modules-fs',
            'stdlib/modules/stdlib-modules-json',
            'stdlib/modules/stdlib-modules-math',
            'stdlib/modules/stdlib-modules-random',
            'stdlib/modules/stdlib-modules-time',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      items: ['examples/examples'],
    },
    {
      type: 'category',
      label: 'Tooling',
      items: ['tooling/tooling'],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: ['api/api'],
    },
    {
      type: 'category',
      label: 'Reference',
      items: ['reference/reference'],
    },
    'faq/faq',
    'contributing/contributing',
  ],
};

export default sidebars;
