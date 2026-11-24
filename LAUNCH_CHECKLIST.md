# Public launch checklist

The portfolio has been updated from the project materials and the profile details already shared. Check these final items before sharing the public URL.

## Content and accuracy

- [ ] Confirm the company names, role titles and employment dates shown in the Experience section.
- [ ] Confirm that CuddlyDuddly, CrayonLyf and the internal project names may be named publicly. If not, anonymise them before launch.
- [ ] Confirm that the 10,000-products-per-run catalog ingestion figure is safe and accurate to publish.
- [ ] Review the project descriptions to ensure they reflect your individual contribution and do not disclose confidential implementation details.
- [ ] Check that your GitHub and LinkedIn URLs open the intended profiles.
- [ ] Decide whether you want to publish a phone number. It is intentionally omitted from the current public Contact section; email is shown instead.
- [ ] The site does not display an “Open to opportunities” status because current availability was not confirmed.

## Image and résumé

- [x] The uploaded photograph is included in `public/images/`.
- [x] The cropped profile version is rendered in the homepage hero using Next.js Image.
- [x] The downloadable résumé is the latest version supplied for this update, including the Currently Learning section and Java.
- [ ] Open the live résumé link after deployment and confirm that the PDF loads correctly.
- [ ] For the strongest professional presentation, consider replacing the current casual photograph with a well-lit head-and-shoulders portrait when you have one. The existing image is genuine and has been cropped for the layout, but it was not taken as a formal headshot.

## Deployment

- [ ] Run `npm run lint`, `npm run typecheck` and `npm run build` locally.
- [ ] Push the finished source to GitHub and deploy it through Vercel.
- [ ] Check the generated Vercel URL on desktop and mobile.
- [ ] Test the photo, mobile navigation, section anchors, external social links, email link and résumé download.
- [ ] Add a custom domain when ready and set `metadataBase` in `src/app/layout.tsx` to the final HTTPS URL.
