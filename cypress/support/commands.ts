import { domain as Auth0Domain } from '../../src/auth_config.json'

function logIntoGithub(username: string, password: string, name: string) {
  cy.visit('http://localhost:3000')
  cy.get('button').contains('Sign in with Github').click();

  cy.origin(Auth0Domain, () => {
    cy.scrollTo('bottom')
    cy.get('form[data-provider="github"]').submit()
  })

  cy.origin(
    'https://github.com',
    {
      args: {
        username,
        password,
      },
    },
    ({ username, password }) => {
      cy.get('[id="login_field"]').type(username)
      cy.get('[id="password"]').type(password, {
        log: true,
      })
      cy.get('[class="btn btn-primary btn-block js-sign-in-button"]').click();
    }
  )

  cy.get('h6.dropdown-header').should('contain', name)
}

Cypress.Commands.add(
  'loginToAuth0ViaSocial',
  (SOCIAL_PROVIDER: 'github') => {
    const log = Cypress.log({
      displayName: 'Social LOGIN',
      message: [`🔐 Authenticating | ${SOCIAL_PROVIDER}`],
      // @ts-ignore
      autoEnd: false,
    })
    log.snapshot('before')

    switch (SOCIAL_PROVIDER) {
      case 'github':
        logIntoGithub(
          Cypress.env('GITHUB_USERNAME'),
          Cypress.env('GITHUB_PASSWORD'),
          Cypress.env('GITHUB_NAME')
        )
        break
      default:
        throw new Error('no social provider configured!')
    }

    log.snapshot('after')
    log.end()
  }
)

declare global {
  namespace Cypress {
    interface Chainable {
      loginToAuth0ViaSocial(SOCIAL_PROVIDER: 'github'): Chainable<void>
    }
  }
}