import http from "http";

http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("content-type", "application/json; charset=utf-8");
    res.end(JSON.stringify({ ok: true }));
  })
  .listen(process.env.PORT ?? 3000);
