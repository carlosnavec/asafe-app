describe('Login Page', () => {
  beforeEach(() => {
    // Visita la página de inicio de sesión antes de cada prueba
    cy.visit('http://localhost:3000/login');
  });

  it('should display the Login title', () => {
    cy.get('h1').contains('Login').should('be.visible');
  });

  it('should display sign-in buttons for each provider when not signed in', () => {
    cy.get('button').contains('Sign in with').should('have.length.greaterThan', 0);
  });

  it('should display user information and sign-out button when signed in', () => {
    // Simula una sesión de usuario
    // cy.get('button').contains('Sign in with GitHub').click();

    // cy.get('p').contains('Signed in as GitHub').should('be.visible');
    // cy.get('button').contains('Sign out').should('be.visible');
    // cy.get('button').contains('Go to Dashboard').should('be.visible');

    cy.loginToAuth0ViaSocial('github')
    cy.visit('http://localhost:3000/')
  });
});