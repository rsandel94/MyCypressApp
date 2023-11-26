describe('The Registration Form', () => {
  it('loading passes', () => {
    cy.visit('http://localhost:3000');
  });
});

describe('The Name Field', () => {
  it("Doesn't have a name", () => {
    cy.visit('http://localhost:3000');
    cy.get('input[name="name"]').clear();
    cy.get('.details > p').should('contain',"You need a name!!!");
  });


  // it('Has a name', () => {
  //   cy.visit('http://localhost:3000');
  //   cy.get('input[name="name"]')
  //   .clear().type('Jane');
  //   cy.get('.details').should('contain', 'June');
  // });
  it('Has a name', () => {
    cy.visit('http://localhost:3000');
    cy.get('input[name="name"]')
    .clear().type('Jane');
    cy.get('.details').should('contain', 'Jane');
  });
});

describe('The food field', () => {
  it('Has Pasta', () => {
    cy.visit('http://localhost:3000');
    cy.get('input[name="name"]')
    .clear().type('Jane');
    cy.get('select').select("Pasta");
    cy.get('.details > p').should('contain',"🍝");
  });

  it('Has Cake', () => {
    cy.visit('http://localhost:3000');
    cy.get('input[name="name"]')
    .clear().type('Jane');
    cy.get('select').select("Cake");
    cy.get('.details > p').should('contain',"🎂");
  });

  it('Has Pizza', () => {
    cy.visit('http://localhost:3000');
    cy.get('input[name="name"]')
    .clear().type('Jane');
    cy.get('select').select("Pizza");
    cy.get('.details > p').should('not.contain',"🎂");
  });
});

describe('The Gender field', () => {
  it('Has Female value', () => {
    cy.visit('http://localhost:3000');
    cy.get('input[name="name"]')
    .clear().type('Jane');
    cy.get('select').select("Pizza");
    cy.get('[type="radio"]').check('F');
  });
});

describe('Overall Snapshot', () => {
  it('takes a screenshot', () => {
    cy.visit('http://localhost:3000');
    cy.get('input[name="name"]')
    .clear().type('Jane');
    cy.get('select').select("Pizza");
    cy.get('[type="radio"]').check('F');
    cy.screenshot()
  })
})