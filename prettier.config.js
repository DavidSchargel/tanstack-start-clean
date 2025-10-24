//  @ts-check

/** @type {import('prettier').Config} */
const config = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: ['**/*.css'],
      options: {
        // Use double quotes in CSS and allow wider lines for long font-family lists
        singleQuote: false,
        printWidth: 120,
      },
    },
  ],
}

export default config
