export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log(request.body);
		console.log(request.headers);
		console.log(request.method);
		
		
		if (request.method === "GET") {
			return Response.json({
				message: "you are most welcome."
			});
		} else {
			return Response.json({
				message: "you did not send a get request"
			});
		}
	},
};