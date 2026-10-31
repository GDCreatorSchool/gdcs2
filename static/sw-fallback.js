
/*
 * GDCS Netlify Fallback
 *
 * Tries the main website first.
 * If a page navigation fails, times out, or receives
 * certain server or blocking errors, and redirects to Netlify.
*/

const BACKUP_ORIGIN = "https://gdcreatorschool.netlify.app";
const TIMEOUT_MS = 8000;
const TEST_PARAMETER = "__sw_test_fallback";

// 1. Install the Service Worker.
self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

// 2. Activate it and take control of eligible pages.
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// 3. Intercept network requests.
self.addEventListener("fetch", (event) => {
  const request = event.request;

  // Only handle page navigations using GET.
  if (request.mode !== "navigate" || request.method !== "GET") {
    return;
  }

  const original = new URL(request.url);

  // Ignore requests to other origins.
  if (original.origin !== self.location.origin) {
    return;
  }

  // Do not redirect the CMS administration interface.
  if (
    original.pathname === "/admin" ||
    original.pathname.startsWith("/admin/")
  ) {
    return;
  }

  // 4. Build the corresponding Netlify URL.
  const backup = new URL(BACKUP_ORIGIN);

  backup.pathname = original.pathname;
  backup.search = original.search;

  // Remove the testing parameter before redirecting.
  backup.searchParams.delete(TEST_PARAMETER);

  // 5. Decide which response to give the browser.
  event.respondWith((async () => {

    // Allow a redirect to be tested without an outage.
    if (original.searchParams.has(TEST_PARAMETER)) {
      return Response.redirect(backup.href, 302);
    }

    // Set up an 8-second timeout.
    const controller = new AbortController();

    const timeoutId = setTimeout(() => {
      controller.abort();
    }, TIMEOUT_MS);

    try {
      // Attempt the original website.
      const response = await fetch(request, {
        signal: controller.signal,
        cache: "no-store"
      });

      // Fallback on server errors or common blocking codes.
      const shouldFallback =
        response.status >= 500 ||
        response.status === 403 ||
        response.status === 451;

      // Otherwise, show the original response.
      if (!shouldFallback) {
        return response;
      }

    } catch (error) {
      // A connection failure or timeout occurred.
      // Continue to the fallback below.
    } finally {
      // Clean up the timer whether fetch succeeded or failed.
      clearTimeout(timeoutId);
    }

    // 6. Redirect the browser to Netlify.
    return Response.redirect(backup.href, 302);

  })());
});
