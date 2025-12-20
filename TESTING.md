# Testing

> [!NOTE]  
> Return back to the [README.md](README.md) file.

## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Directory | File | URL | Screenshot | Notes |
| --- | --- | --- | --- | --- |
|  | [404.html](https://github.com/geraldine-mor/charmed-arcana/blob/main/404.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://geraldine-mor.github.io/charmed-arcana/404.html) | ![screenshot of 404.html validation](documentation/code-validation/404.png) | |
|  | [index.html](https://github.com/geraldine-mor/charmed-arcana/blob/main/index.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://geraldine-mor.github.io/charmed-arcana/index.html) | ![screenshot of index.html validation](documentation/code-validation/home.png) | |
|  | [services.html](https://github.com/geraldine-mor/charmed-arcana/blob/main/services.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://geraldine-mor.github.io/charmed-arcana/services.html) | ![screenshot of services.html with warnings](documentation/code-validation/services-validation-warnings.png) ![screenshot of services.html validation](documentation/code-validation/services.png) ![screenshot of services.html with warnings](documentation/code-validation/services-id-error.png) | First check revealed warnings regarding unfinished sections - tese were removed as I decided to create a separate page for them. Page passed on 2nd check. A final check run after site completion showed an error on a duplicated id. As this id was not targeted anywhere, it was removed from both divs. Validation passed. |
|  | [tarot.html](https://github.com/geraldine-mor/charmed-arcana/blob/main/tarot.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://geraldine-mor.github.io/charmed-arcana/tarot.html) | ![screenshot of tarot.html validation](documentation/code-validation/tarot.png) | |
|  | [contact.html](https://github.com/geraldine-mor/charmed-arcana/blob/main/contact.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://geraldine-mor.github.io/charmed-arcana/contact.html) | ![screenshot of contact.html with warning](documentation/code-validation/contact-date-error.png) ![screenshot of contact.html validation](documentation/code-validation/contact.png) | I had initially left the `min` attribute value empty since JavaScript is handling this but that caused a validation error.  I entered today's date as a placeholder and that fixed the issue.


### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| Directory | File | URL | Screenshot | Notes |
| --- | --- | --- | --- | --- |
| assets | [style.css](https://github.com/geraldine-mor/charmed-arcana/blob/main/assets/css/style.css) |  | ![screenshot of css validator errors](documentation/code-validation/css-errors.png) | When checked at the end of the tarot page build, sytax errors found |
| assets | [style.css](https://github.com/geraldine-mor/charmed-arcana/blob/main/assets/css/style.css) | [CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https://geraldine-mor.github.io/charmed-arcana) | ![screenshot of css validator no errors](documentation/code-validation/css-no-errors.png) | Keyframes syntax errors corrected |
| assets | [style.css](https://github.com/geraldine-mor/charmed-arcana/blob/main/assets/css/style.css) | [CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https://geraldine-mor.github.io/charmed-arcana) | ![screenshot of css validator warnings](documentation/code-validation/bootstrap-warnings.png) | There were many warnings related to the Bootstrap library, this is beyond my control and is acceptable |


### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

| Directory | File | URL | Screenshot | Notes |
| --- | --- | --- | --- | --- |
| assets | [script.js](https://github.com/geraldine-mor/charmed-arcana/blob/main/assets/js/script.js) |  | ![screenshot of jshint response](documentation/code-validation/js-semicolon-errors.png) | Code check run at the end of tarot game build showed 7 missed semicolons and some esversion warnings|
| assets | [script.js](https://github.com/geraldine-mor/charmed-arcana/blob/main/assets/js/script.js) |  | ![screenshot of jshint response](documentation/code-validation/js-validation.png) | When I checked it again at the end of the build, I had resolved the syntax error that was causing the esversion warnings. There was 1 warning regarding functions declared within loops but this is as taught in the code institute Love Maths run through and is acceptable |

## Responsiveness

I tested my deployed project to check for responsiveness issues.

| Page | Mobile | Tablet | Desktop | Notes |
| --- | --- | --- | --- | --- |
| Home | ![screenshot of homepage mobile view](documentation/responsiveness/mobile-home.png) | ![screenshot of homepage tablet view](documentation/responsiveness/tablet-home.png) | ![screenshot of homepage desktop view](documentation/responsiveness/desktop-home.png) | Works as expected |
| Tarot  | ![screenshot of tarot game mobile view](documentation/responsiveness/mobile-tarot.png) | ![screenshot of tarot game tablet view](documentation/responsiveness/tablet-tarot.png) | ![screenshot of tarot game desktop view](documentation/responsiveness/desktop-tarot.png) | Works as expected |
| Services | ![screenshot of services page mobile view](documentation/responsiveness/mobile-services.png) | ![screenshot of services page tablet view](documentation/responsiveness/tablet-services.png) | ![screenshot of services page desktop view](documentation/responsiveness/desktop-services.png) | Works as expected |
| Contact | ![screenshot of contact page mobile view](documentation/responsiveness/mobile-contact.png) | ![screenshot of contact page tablet view](documentation/responsiveness/tablet-contact.png) | ![screenshot of contact page desktop view](documentation/responsiveness/desktop-contact.png) | Works as expected |
| 404 | ![screenshot of 404 page mobile view](documentation/responsiveness/mobile-404.png) | ![screenshot of 404 page tablet view](documentation/responsiveness/tablet-404.png) | ![screenshot of 404 page desktop view](documentation/responsiveness/desktop-404.png) | Works as expected |

## Device Testing

I tested my deployed site on 3 different devices to check for full responsiveness and real-world testing. Viewport sizes were taken from [Viewport Sizer](https://viewportsizer.com/).

⚠️ TBC ⚠️

| Page | Mobile | Tablet <br> iPad <br> 768x898| Desktop <br> Dell 22" <br> 1665x929| Notes |
| --- | --- | --- | --- | --- |
| Home | ![screenshot of homepage on mobile](documentation/device-testing/) | ![screenshot of homepage on tablet](documentation/device-testing/ipad-home.png) | ![screenshot of homepage on desktop](documentation/device-testing/dell-home.png) | Works as expected |
| Tarot | ![screenshot of tarot page on mobile](documentation/device-testing/) | ![screenshot of tarot on tablet](documentation/device-testing/ipad-tarot-3.png) | ![screenshot of tarot page on desktop](documentation/device-testing/dell-tarot.png) | Works as expected |
| Services | ![screenshot of services page on mobile](documentation/device-testing/) | ![screenshot of services page on tablet](documentation/device-testing/ipad-services.png) | ![screenshot of services page on desktop](documentation/device-testing/dell-services.png) | Works as expected |
| Contact | ![screenshot of contact page on mobile](documentation/device-testing/) | ![screenshot of contact page on tablet](documentation/device-testing/ipad-contact.png) | ![screenshot of contact page on desktop](documentation/device-testing/dell-contact.png) | Works as expected |
| 404 | ![screenshot of 404 page on mobile](documentation/device-testing/) | ![screenshot of 404 page on tablet](documentation/device-testing/ipad-404.png) | ![screenshot of 404 page on desktop](documentation/device-testing/dell-404.png) | Works as expected |


## Browser Compatibility

I tested my deployed project on multiple browsers to check for compatibility issues.

| Page | Chrome | Firefox | Safari | Opera | Notes |
| --- | --- | --- | --- | --- | --- |
| Home | ![screenshot of homepage on chrome](documentation/browser-testing/chrome-home.png) | ![screenshot of homepage on firefox](documentation/browser-testing/firefox-home.png) | ![screenshot of homepage on safari](documentation/browser-testing/ipad-home.png) | ![screenshot of homepage on opera](documentation/browser-testing/opera-home.png) | Works as expected |
| Tarot | ![screenshot of tarot page on chrome](documentation/browser-testing/chrome-tarot.png) | ![screenshot of tarot page on firefox](documentation/browser-testing/firefox-tarot.png) | ![screenshot of tarot page on safari](documentation/browser-testing/ipad-tarot.png) | ![screenshot of tarot page on opera](documentation/browser-testing/opera-tarot.png) | Works as expected |
| Services | ![screenshot of services page on chrome](documentation/browser-testing/chrome-services.png) | ![screenshot of services page on firefox](documentation/browser-testing/firefox-services.png) | ![screenshot of services page on safari](documentation/browser-testing/ipad-services.png) | ![screenshot of services page on opera](documentation/browser-testing/opera-services.png) | There was an issue with how the arrow list icons displayed on Safari ![screenshot of display issue](documentation/browser-testing/services-list-issue.png) I changed the styles to correct |
| Contact | ![screenshot of contact page on chrome](documentation/browser-testing/chrome-contact.png) | ![screenshot of contact page on firefox](documentation/browser-testing/firefox-contact.png) | ![screenshot of contact page on safari](documentation/browser-testing/ipad-contact.png) | ![screenshot of contact page on opera](documentation/browser-testing/opera-contact.png) | Works as expected |
| 404 | ![screenshot of 404 page on chrome](documentation/browser-testing/chrome-404.png) | ![screenshot of 404 page on firefox](documentation/browser-testing/firefox-404.png) | ![screenshot of 404 page on safari](documentation/browser-testing/ipad-404.png) | ![screenshot of 404 page on opera](documentation/browser-testing/opera-404.png) | Works as expected |

## Lighthouse Audit

I tested my deployed project using the Lighthouse Audit tool to check for any major issues. Some warnings are outside of my control, and mobile results tend to be lower than desktop.

| Page | Mobile | Desktop |
| --- | --- | --- |
| Home | ![screenshot of homepage lighthouse audit](documentation/lighthouse/home-mobile.png) | ![screenshot of homepage lighthouse audit](documentation/lighthouse/home-desktop.png) |
| Tarot | ![screenshot of tarot page lighthouse audit](documentation/lighthouse/tarot-mobile.png) | ![screenshot of tarot page lighthouse audit](documentation/lighthouse/tarot-desktop.png) |
| Services | ![screenshot of services page lighthouse audit](documentation/lighthouse/services-mobile.png) | ![screenshot of services page lighthouse audit](documentation/lighthouse/services-desktop.png) |
| Contact | ![screenshot of contact page lighthouse audit](documentation/lighthouse/contact-mobile.png) | ![screenshot of contact page lighthouse audit](documentation/lighthouse/contact-desktop.png) |
| 404 | ![screenshot of 404 page lighthouse audit](documentation/lighthouse/404-mobile.png) | ![screenshot of 404 page lighthouse audit](documentation/lighthouse/404-desktop.png) |

## Defensive Programming

Defensive programming was manually tested with the below user acceptance testing:

| Page/Feature | Expectation | Test | Result | Screenshot |
| --- | --- | --- | --- | --- |
| Navbar Links | Feature is expected to allow the user to navigate easily between pages | Tested all links on each page | Link changed to inform user it's clickable and navigated to correct page | ![screenshot of navbar link hover effect](documentation/defensive-testing/nav-link.png) |
| Newsletter Signup Button | Feature is expected to allow the user to signup to the newsletter | Clicked the newsletter signup button | Email signup modal appeared as expected | ![screenshot of email signup modal](documentation/defensive-testing/newsletter-signup.png) |
| Newsletter Modal Form | Feature is expected to require all fields be completed | Attempted to signup without filling in fields or with errors | Form did not send and an alert informed me of the mistake | ![screenshot of email form validation](documentation/defensive-testing/newsletter-name-validation.png) ![screenshot of email form validation](documentation/defensive-testing/newsletter-email-validation.png) ![screenshot of email form validation](documentation/defensive-testing/newsletter-email-type-validation.png) |
| Navigation Buttons | Feature is expected to allow the user to navigate between pages | Clicked navigation buttons | The correct page opened | ![screenshot of navigation button hover](documentation/defensive-testing/navigation-button-hover.png) |
| Footer Links | Feature is expected to open links in a new tab | Clicked all links  | All links opened the correct page in a new tab | ![screenshot of new tab opened](documentation/defensive-testing/new-tab.png) |
| Tarot Game Instructions | Feature is expected to provide clear instruction as to how the game should be played | Clicked through all the stages of the game | Button label changed to provide clear feedback as to the next step | ![screenshot of game button text](documentation/defensive-testing/game-first-card.png) ![screenshot of game button text](documentation/defensive-testing/game-second-card.png) ![screenshot of game button text](documentation/defensive-testing/game-reset.png) |
| Expand/Collapse Card Button | Feature is expected to hide/show the details section of the card when clicked | Clicked the more/less button | Card expanded and collapsed as expected | ![screenshot of expanded card](documentation/defensive-testing/card-expand.png) |
| Contact Form | Feature is expected to validate all form fields before sending | Attempted to send the form without required fields | Form validation alerts appeared | ![screenshot of form validation alert](documentation/defensive-testing/contact-validation.png) |
| Form Confirmation | Feature is expected to inform the user that their enquiry has been sent | Completed the required fields and clicked "send" | Success message was displayed | ![screenshot of contact form success message](documentation/defensive-testing/contact-success.png) |
| 404 Error Page | Feature is expected to display a 404 error page for non-existent pages. | Navigated to an invalid URL (e.g., `/test`) to test error handling. | A custom 404 error page was displayed as expected. | ![screenshot of 404 page](documentation/defensive-testing/404-test.png) |

## User Story Testing

| Target | Expectation | Outcome | Screenshot |
| --- | --- | --- | --- |
| As a visitor | I want to easily navigate the site | to find all the information I need quickly and easily | ![screenshot of navbar](documentation/features/navbar-expand.png) |
| As a visitor | I want to view the overall mission and purpose of the site | so that I feel connected to its purpose | ![screenshot of landing page](documentation/features/landing-page.png) |
| As a visitor | I want to understand what the website offers | so that I know whether is fits my spiritual interests | ![screenshot of about section](documentation/features/about-section.png) |
| As a potential customer | I want to see information about the services provided | so that I can see if they fit my needs  | ![screenshot of services page](documentation/features/services.png) |
| As a potential customer | I want to complete an enquiry form | so that I can ask questions about the services | ![screenshot of enquiry form](documentation/features/enquiry-form.png) |
| As a user | I would like clear labels and instructions | so that I understand how to use the app without confusion. | ![screenshot of game button instruction](documentation/features/button1.png) ![screenshot of game button instruction](documentation/features/button2.png) |
|As a customer | I want to receive confirmation of booking/enquiry | so that I know my message was sent | ![screenshot of form success message](documentation/features/form-success.png) |
| As a potential customer | I want to view pricing clearly | so that I understand the costs before I book | ![screenshot of pricing](documentation/features/pricing.png) |
| As a visitor | I want to play a simple tarot reading game | so that I can engage with tarot in a fun way | ![screenshot of tarot game](documentation/features/tarot-game.png) |
| As a visitor | I want the game to give me a brief interpretation of the chosen card | so that I gain insight or reflection | ![screenshot of tarot game with text](documentation/features/tarot-game-played.png) |
| As a visitor | I want to sign up for regular emails | so that I can receive updates, readings or wellness tips | ![screenshot of email signup modal](documentation/features/newsletter-modal.png) |
| As a user | I want confirmation that I signed up successfully | so that I know I'm on the mailing list | ![screenshot of email signup success message](documentation/features/newsletter-success.png) |
| As a user | I want to access the tarot reader’s social media accounts directly from the website | so that I can follow for updates and content | ![screenshot of footer](documentation/features/footer.png) |
| As a user | I want social links to be visible and accessible | so that I can find them quickly and easily | ![screenshot of footer](documentation/features/footer.png) |
| As a visitor | I want the website to load quickly | so that I have a smooth experience | ![screenshot of performance test](documentation/lighthouse/home-desktop.png) |
| As a visitor | I want the website to feel calm, magical, and welcoming | so that it aligns with the spiritual theme | ![screenshot of homepage](documentation/features/landing-page.png) |
| As a potential customer | I want to view the tarot reader's contact information | so that I can contact them for information or bookings | ![screenshot](documentation/features/contact-details.png) |
| As a user | I would like to see a 404 error page if I get lost | so that it's obvious that I've stumbled upon a page that doesn't exist. | ![screenshot](documentation/features/404.png) |

## Bugs

### Fixed Bugs

[![GitHub issue custom search](https://img.shields.io/github/issues-search/geraldine-mor/charmed-arcana?query=is%3Aissue%20is%3Aclosed%20label%3Abug&label=Fixed%20Bugs&color=green)](https://www.github.com/geraldine-mor/charmed-arcana/issues?q=is%3Aissue+is%3Aclosed+label%3Abug)

I  used [GitHub Issues](https://www.github.com/geraldine-mor/charmed-arcana/issues) to track and manage bugs and issues during the development stages of my project.

All previously closed/fixed bugs can be tracked [here](https://www.github.com/geraldine-mor/charmed-arcana/issues?q=is%3Aissue+is%3Aclosed+label%3Abug).

![screenshot of closed bugs](documentation/readme-images/bugs.png)

### Unfixed Bugs

[![GitHub issue custom search](https://img.shields.io/github/issues-search/geraldine-mor/charmed-arcana?query=is%3Aissue%2Bis%3Aopen%2Blabel%3Abug&label=Unfixed%20Bugs&color=red)](https://www.github.com/geraldine-mor/charmed-arcana/issues?q=is%3Aissue+is%3Aopen+label%3Abug)

Any remaining open issues can be tracked [here](https://www.github.com/geraldine-mor/charmed-arcana/issues?q=is%3Aissue+is%3Aopen+label%3Abug).

### Known Issues

| Issue | Screenshot |
| --- | --- |
| The project is designed to be responsive from `320px` and upwards, in line with the material taught on the course LMS. Minor layout inconsistencies may occur on extra-wide (e.g. 4k/8k monitors), or smart-display devices (e.g. Nest Hub, Smart Watches, Gameboy Color, etc.), as these resolutions are outside the project’s scope, as taught by Code Institute. | ![screenshot](documentation/readme-images/smartwatch-screen.png) |


> [!IMPORTANT]  
> There are no remaining bugs that I am aware of, though, even after thorough testing, I cannot rule out the possibility.

