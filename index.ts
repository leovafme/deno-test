import { serve } from 'https://deno.land/std/http/server.ts'

const PORT = Number(Deno.env.get("PORT")) || 9090;

const s = serve({ port: PORT })
console.log('http://localhost:' + PORT)

for await (const req of s) {
  req.respond({ body: 'Hello World Update2\n' })
}
