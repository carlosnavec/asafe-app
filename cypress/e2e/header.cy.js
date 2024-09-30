describe('Header Component', () => {
  beforeEach(() => {
    // Visita la página principal antes de cada prueba
    cy.visit('/login');
  });

  it('should display the Dashboard title', () => {
    cy.get('span').contains('Dashboard').should('be.visible');
  });

  it('should have a Home link', () => {
    cy.get('a[href="/dasboard"]').contains('Home').should('be.visible');
  });

  it('should have a Photos link', () => {
    cy.get('a[href="/dashboard/photo"]').contains('Photos').should('be.visible');
  });

  it('should navigate to Home when Home link is clicked', () => {
    cy.get('a[href="/dasboard"]').click();
    cy.url().should('include', '/dasboard');
  });

  it('should navigate to Photos when Photos link is clicked', () => {
    cy.get('a[href="/dashboard/photo"]').click();
    cy.url().should('include', '/dashboard/photo');
  });
});