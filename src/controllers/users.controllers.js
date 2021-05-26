// exports.index = (req, res) => {
// 	res.render("index");
// 	// res.send("sdsds");
// };

class Users {
	constructor() {}

	index(req, res) {
		res.render("index");
	}

	process_form(req, res) {
		console.log(req.body);
		req.session.survey_information = req.body;
		res.redirect("/result");
	}

	result(req, res) {
		if (req.session.survey_information === undefined) res.redirect("/");
		res.render("result", { user: req.session.survey_information });
	}
}

module.exports = { Users };
