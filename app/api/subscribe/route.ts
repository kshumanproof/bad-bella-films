export async function POST(req: Request) {
  const body = await req.json();

  try {
    const params = new URLSearchParams();
    params.append("api_key", "MYrvRtvMu5cPIOmutX8msg");
    params.append("email", body.email);

    const res = await fetch(
      "https://api.convertkit.com/v3/forms/9370003/subscribe",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params,
      }
    );

    const text = await res.text(); // 👈 IMPORTANT

    console.log("RAW Kit response:", text);

    return new Response(text, {
      status: res.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("SERVER ERROR:", err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}