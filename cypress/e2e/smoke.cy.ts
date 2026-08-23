import { faker } from "@faker-js/faker";

describe("smoke tests", () => {
  afterEach(() => {
    cy.cleanupUser();
  });

  it("should allow you to register and login", () => {
    const loginForm = {
      email: `${faker.internet.userName()}@example.com`,
      password: faker.internet.password(),
    };

    cy.then(() => ({ email: loginForm.email })).as("user");

    cy.visitAndCheck("/");

    cy.findByRole("link", { name: /sign up/i }).click();

    cy.findByRole("textbox", { name: /email/i }).type(loginForm.email);
    cy.findByLabelText(/password/i).type(loginForm.password);
    cy.findByRole("button", { name: /create account/i }).click();

    cy.findByRole("link", { name: /notes/i }).click();
    cy.findByRole("button", { name: /logout/i }).click();
    cy.findByRole("link", { name: /log in/i });
  });

  it("should allow you to make a note", () => {
    const testNote = {
      title: faker.lorem.words(1),
      body: faker.lorem.sentences(1),
    };
    cy.login();

    cy.visitAndCheck("/");

    cy.findByRole("link", { name: /notes/i }).click();
    cy.findByText("No notes yet");

    cy.findByRole("link", { name: /\+ new note/i }).click();

    cy.findByRole("textbox", { name: /title/i }).type(testNote.title);
    cy.findByRole("textbox", { name: /body/i }).type(testNote.body);
    cy.findByRole("button", { name: /save/i }).click();

    cy.findByRole("button", { name: /delete/i }).click();

    cy.findByText("No notes yet");
  });

  it("should allow you to edit a note", () => {
    const testNote = {
      title: faker.lorem.words(1),
      body: faker.lorem.sentences(1),
    };
    const editedNote = {
      title: faker.lorem.words(1),
      body: faker.lorem.sentences(1),
    };
    cy.login();

    cy.visitAndCheck("/");

    cy.findByRole("link", { name: /notes/i }).click();
    cy.findByText("No notes yet");

    cy.findByRole("link", { name: /\+ new note/i }).click();

    cy.findByRole("textbox", { name: /title/i }).type(testNote.title);
    cy.findByRole("textbox", { name: /body/i }).type(testNote.body);
    cy.findByRole("button", { name: /save/i }).click();

    // The saved note should now be editable via pre-filled fields.
    cy.findByRole("textbox", { name: /title/i }).should(
      "have.value",
      testNote.title,
    );
    cy.findByRole("textbox", { name: /body/i }).should(
      "have.value",
      testNote.body,
    );

    cy.findByRole("textbox", { name: /title/i }).clear();
    cy.findByRole("textbox", { name: /title/i }).type(editedNote.title);
    cy.findByRole("textbox", { name: /body/i }).clear();
    cy.findByRole("textbox", { name: /body/i }).type(editedNote.body);
    cy.findByRole("button", { name: /save/i }).click();

    // The edited values should persist after saving.
    cy.findByRole("textbox", { name: /title/i }).should(
      "have.value",
      editedNote.title,
    );
    cy.findByRole("textbox", { name: /body/i }).should(
      "have.value",
      editedNote.body,
    );

    cy.findByRole("button", { name: /delete/i }).click();

    cy.findByText("No notes yet");
  });
});
