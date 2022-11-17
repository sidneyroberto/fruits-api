"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = process.env.PORT || 3001;
const server = app_1.app.listen(port, () => console.log(`App running on port ${port}`));
process.on('SIGINT', () => {
    server.close();
    console.log('App finished');
});
//# sourceMappingURL=server.js.map