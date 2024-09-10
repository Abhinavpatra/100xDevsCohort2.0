export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log(request.body);
		console.log(request.headers);
		console.log(request.method);		
		
		if (request.method === "GET") {
			return Response.json({
				message: "Yo dumbass passing the exams or failing them?"
			});
		} else {
			return Response.json({
				message: "you did not send a get request"
			});
		}
	},
};