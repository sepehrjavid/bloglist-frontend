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

  describe('When logged in', function() {
    beforeEach(function() {
      cy.visit('http://localhost:3000')
      cy.get('#username').type('sep')
      cy.get('#password').type('123')
      cy.get('#loginButton').click()
    })

    it('a blog can be created', function() {
      cy.contains('Create New Blog').click()
      cy.get('#titleInput').type('Blog Title')
      cy.get('#authorInput').type('Author Name')
      cy.get('#urlInput').type('www.blog.com')
      cy.get('#submitInput').click()
      cy.contains('Blog Title was created!')
    })
  })

    describe('When logged in', function() {
      beforeEach(function () {
        cy.visit('http://localhost:3000')
        cy.get('#username').type('sep')
        cy.get('#password').type('123')
        cy.get('#loginButton').click()
        cy.contains('Create New Blog').click()
        cy.get('#titleInput').type('Blog Title')
        cy.get('#authorInput').type('Author Name')
        cy.get('#urlInput').type('www.blog.com')
        cy.get('#submitInput').click()
        cy.contains('Blog Title was created!')
      })

      it('users can like blogs', function () {
        cy.get('#viewButton').click()
        //const likes = cy.get('#likes')
        cy.contains('Blog Title').get('#likeButton').click()
        cy.get('#likes').contains('1')
      })
    })
})
