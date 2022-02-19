describe('Blog app', function() {
  const newUser = {
    blogs: [],
    username: "sep",
    password: "123",
    name: "sep"
  }

  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    cy.request('POST', 'http://localhost:3003/api/users/', newUser)
    cy.visit('http://localhost:3000')
  })

  it('Login form is shown', function() {
    cy.contains('blogs')
    cy.get('#loginForm').should('be.visible')
  })

  describe('Login',function() {
    it('succeeds with correct credentials', function() {
      cy.contains('login').click()
      cy.get('#username').type('sep')
      cy.get('#password').type('123')
      cy.get('#loginButton').click()
      cy.contains(newUser.name + ` is logged in`)
    })

    it('fails with wrong credentials', function() {
      cy.contains('login').click()
      cy.get('#username').type('sep')
      cy.get('#password').type('12')
      cy.get('#loginButton').click()
      cy.contains('Wrong credentials')
    })
  })
})
