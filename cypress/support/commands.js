Cypress.Commands.overwrite('type', (originalFn, subject, string, options) => {
  return originalFn(subject, string, { ...options, delay: 300 });
});
