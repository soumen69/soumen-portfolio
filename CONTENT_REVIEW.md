# Content review before public launch

This starter is an initial implementation, not yet a fact-checked final portfolio. Review these items before deployment:

1. **Employment dates differ between the conversation and the supplied résumé.**
   - Twiplo: conversation says Jan–Jun 2023; résumé says Jan–Jul 2023.
   - Ornaware: conversation says Jan–Dec 2024; résumé says Jan–Nov 2024.
   - The résumé also lists Sleek Infosolutions (Aug–Oct 2023), which was not mentioned in the conversation. Confirm whether this was a separate internship/employment entry and how it fits the independent development period.
2. **Delostyle leadership claim:** the résumé says you led two frontend developers and one backend developer. Confirm the exact scope/title before adding this to the public profile.
3. **CuddlyDuddly:** the résumé lists Laravel 12, Admin/Seller/Customer portals, Razorpay and Shiprocket integrations. Confirm which integrations and modules you personally implemented versus designed/coordinated.
4. **Education naming:** confirm the exact official university name and campus/location to display. The conversation says Maharshi Dayanand University; the résumé says MDU Haryana.
5. **Project confidentiality:** confirm which company/client project names, screenshots, architecture details and metrics are approved for public display. Internal tools are currently labelled as internal.
6. **CMS count:** "15+ CMS applications" is based on your estimate. Keep it only if you are comfortable standing behind that count.
7. **Bulk ingestion metric:** confirm that 10,000 products is the supported/target batch size per operation and whether it is safe to describe publicly.
8. **Availability:** currently controlled by `openToOpportunities` in `src/data/portfolio.ts`. Set it to `false` when you no longer want the notice.
9. **Contact details:** the email and phone are currently included in the profile data. Remove the phone from the public site if you do not want it displayed.
10. **Domain metadata:** add the real production domain to `metadataBase` in `src/app/layout.tsx` after purchasing/choosing a domain.

The starter deliberately uses the dates from the conversation for its initial timeline and does not add the unconfirmed Sleek Infosolutions entry yet.
