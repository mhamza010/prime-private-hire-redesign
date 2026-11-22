PRIME PRIVATE HIRE — HOMEPAGE REDESIGN STARTER
================================================

FILES
- index.html   Homepage structure and content
- styles.css  All styling, design tokens and responsive layouts
- script.js   Mobile menu and front-end quote-form demonstration

HOW TO PREVIEW
1. Keep all three files in the same folder.
2. Open index.html in a browser.
3. For best testing, use Chrome DevTools responsive mode and check mobile, tablet, laptop and wide desktop sizes.

IMPORTANT BEFORE GOING LIVE
1. The quote form is a front-end demo. It does NOT calculate a fare, send an enquiry, or create a booking.
2. Connect the form to Prime Private Hire's existing booking engine/plugin/API or a secure WordPress form handler.
3. Replace the placeholder phone number (+44 (0)000 000 0000) and email address in index.html.
4. Confirm the actual service area, vehicle classes, payment methods, licensing, customer ratings, cancellation policy, flight tracking, meet-and-greet and operating hours with the business. Do not publish claims until verified.
5. Replace the sample Unsplash photographs with licensed company/stock photographs. The current image URLs require an internet connection.
6. Add real Privacy Policy, Terms and Conditions, and service-specific pages.

WORDPRESS IMPLEMENTATION
Option A — Simple page builder:
- Create a new page and set the template to Full Width / No Sidebar.
- Add the sections as separate Custom HTML blocks (header, hero/booking, services, about, steps, fleet, FAQ, CTA, footer).
- Put the CSS into Appearance > Customize > Additional CSS (or the theme's custom CSS area).
- Put the JavaScript into a child theme or a trusted snippets/plugin solution. Avoid pasting script tags into every block.
- Remove the static header/footer from this HTML if the WordPress theme already supplies them, to prevent duplicates.

Option B — Developer handoff:
- Convert each major section into a reusable WordPress template part or block pattern.
- Enqueue styles.css and script.js from a child theme.
- Replace the demo quote form with the actual booking integration.
- Make phone/email, navigation, service cards and FAQs editable through WordPress fields/blocks.

DESIGN NOTES
- Navy + warm gold + soft ivory palette; easy to change in :root at the top of styles.css.
- No CSS framework or build step required.
- Mobile navigation collapses into a menu button.
- Layouts adapt for mobile, tablet, laptop and wide desktop.
- The content is intentionally written without invented company-specific guarantees or ratings.
