import { Elysia } from "elysia";

const app = new Elysia()
	.get("/", () => "SW - Hopital da Visão")
	.get("/locations", () => [
		{
			id: "1",
			name: "Clinia + Hospital da Visao",
			address: "Av. Plinio Brasil Milano, 123",
			city: "Porto Alegre",
			state: "RS",
			cep: "12345-678",
			lat: 34.0522,
			long: -118.2437,
		},
	])
	.listen(3333);

console.log(`API is running at ${app.server?.hostname}:${app.server?.port}`);
