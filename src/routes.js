module.exports = (APP) => {
	const USERSCONTROLLER = require("./controllers/users.controllers");
	const user = new USERSCONTROLLER.Users();

	APP.get("/", user.index);

	APP.post("/process_form", user.process_form);

	APP.get("/result", user.result);
};
