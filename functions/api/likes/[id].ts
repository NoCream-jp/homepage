interface Env {
  DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async ({ params, env }) => {
  const id = params.id;

  if (!id) {
    return Response.json({ error: "Article ID is required" }, { status: 400 });
  }

  const row = await env.DB.prepare(
    "SELECT count FROM likes WHERE article_id = ?"
  )
    .bind(id)
    .first<{ count: number }>();

  return Response.json({
    id,
    count: row?.count ?? 0,
  });
};

export const onRequestPost: PagesFunction<Env> = async ({ params, env }) => {
  const id = params.id;

  if (!id) {
    return Response.json({ error: "Article ID is required" }, { status: 400 });
  }

  await env.DB.prepare(
    `
      INSERT INTO likes (article_id, count)
      VALUES (?, 1)
      ON CONFLICT(article_id)
      DO UPDATE SET count = count + 1
      `
  )
    .bind(id)
    .run();

  const row = await env.DB.prepare(
    "SELECT count FROM likes WHERE article_id = ?"
  )
    .bind(id)
    .first<{ count: number }>();

  return Response.json({
    id,
    count: row?.count ?? 0,
  });
};
