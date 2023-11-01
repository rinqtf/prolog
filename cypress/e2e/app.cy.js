describe("Home page", () => {
  it("test code", () => {
    cy.visit("http://localhost:3000");
    cy.get("code").contains("pages/index.tsx");
  });
});
