import * as commonCommands from './commands/common';
import * as profileCommands from './commands/profile';
import * as artcileCommands from './commands/artcile';
import * as commentCommands from './commands/comment';
import * as ratingCommands from './commands/rating';

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(artcileCommands);
Cypress.Commands.addAll(commentCommands);
Cypress.Commands.addAll(ratingCommands);

export {};
