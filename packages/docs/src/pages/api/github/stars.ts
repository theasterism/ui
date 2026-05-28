export const prerender = false;

export async function GET() {
  const res = await fetch("https://api.github.com/repos/theasterism/ui", {
    method: "GET",
  });

  if (res.status !== 200) {
    return Response.json(
      {},
      {
        status: res.status,
        statusText: res.statusText,
      }
    );
  }

  const data = (await res.json()) as {
    stargazers_count: number;
  };

  const formattedCount =
    data.stargazers_count >= 1000
      ? `${Math.round(data.stargazers_count / 1000)}k`
      : data.stargazers_count?.toLocaleString();

  return Response.json({
    count: formattedCount ?? 0,
  });
}
