export const dynamic = "force-static";

export function GET() {
  return new Response("google-site-verification: google2ed8cd7711f3042e.html", {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
