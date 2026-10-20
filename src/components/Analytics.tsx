import Script from "next/script";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";

/**
 * Privacy-friendly analytics. Both are cookieless.
 * - Vercel Web Analytics: on by default (enable it in the Vercel dashboard).
 * - OpenPanel: loads only when NEXT_PUBLIC_OPENPANEL_CLIENT_ID is set at build time.
 * Setup steps are in docs/ANALYTICS.md.
 */
export function Analytics() {
  const clientId = process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID;
  return (
    <>
      <VercelAnalytics />
      {clientId ? (
        <>
          <Script id="openpanel-init" strategy="afterInteractive">
            {`window.op=window.op||function(){var n=[];return new Proxy(function(){arguments.length&&n.push([].slice.call(arguments))},{get:function(t,r){return"q"===r?n:function(){n.push([r].concat([].slice.call(arguments)))}},has:function(t,r){return"q"===r}})}();
window.op('init',{clientId:${JSON.stringify(clientId)},trackScreenViews:true,trackOutgoingLinks:true});`}
          </Script>
          <Script src="https://openpanel.dev/op1.js" strategy="afterInteractive" async />
        </>
      ) : null}
    </>
  );
}
