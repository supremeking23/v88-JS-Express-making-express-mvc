module.exports = (app) => {
	const user = require("./controllers/users");

	// const user = new USERSCONTROLLER.Users();

	console.log(typeof user);

	app.get("/", user.index);

	app.post("/process_form", user.process_form);

	app.get("/result", user.result);
};
