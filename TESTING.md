# Testing

> [!NOTE]  
> Return back to the [README.md](README.md) file.

## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Directory | File | URL | Screenshot | Notes |
| --- | --- | --- | --- | --- |
|  | [404.html](https://github.com/geraldine-mor/charmed-arcana/blob/main/404.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://geraldine-mor.github.io/charmed-arcana/404.html) | ![screenshot](documentation/validation/html--404.png) | ⚠️ Notes (if applicable) |
|  | [index.html](https://github.com/geraldine-mor/charmed-arcana/blob/main/index.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://geraldine-mor.github.io/charmed-arcana/index.html) | ![screenshot of index.html validation](documentation/code-validation/home.png) | |
|  | [services.html](https://github.com/geraldine-mor/charmed-arcana/blob/main/services.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://geraldine-mor.github.io/charmed-arcana/services.html) | ![screenshot](documentation/validation/html--services.png) | ⚠️ Notes (if applicable) |
|  | [tarot.html](https://github.com/geraldine-mor/charmed-arcana/blob/main/tarot.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://geraldine-mor.github.io/charmed-arcana/tarot.html) | ![screenshot of tarot.html validation](documentation/code-validation/tarot.png) | |


### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| Directory | File | URL | Screenshot | Notes |
| --- | --- | --- | --- | --- |
| assets | [style.css](https://github.com/geraldine-mor/charmed-arcana/blob/main/assets/css/style.css) |  | ![screenshot of css validator errors](documentation/code-validation/css-errors.png) | Checked at the end of the tarot page build, sytax errors found |
| assets | [style.css](https://github.com/geraldine-mor/charmed-arcana/blob/main/assets/css/style.css) | [CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https://geraldine-mor.github.io/charmed-arcana) | ![screenshot of css validator no errors](documentation/code-validation/css-no-errors.png) | Keyframes syntax errors corrected |
| assets | [style.css](https://github.com/geraldine-mor/charmed-arcana/blob/main/assets/css/style.css) | [CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https://geraldine-mor.github.io/charmed-arcana) | ![screenshot of css validator warnings](documentation/code-validation/bootstrap-warnings.png) | There were many warnings related to the Bootstrap library, this is beyond my control and is acceptable |


### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

| Directory | File | URL | Screenshot | Notes |
| --- | --- | --- | --- | --- |
| assets | [script.js](https://github.com/geraldine-mor/charmed-arcana/blob/main/assets/js/script.js) |  | ![screenshot](documentation/code-validation/js-semicolon-errors.png) | Code check run at the end of tarot game build showed 7 missed semicolons |
| assets | [script.js](https://github.com/geraldine-mor/charmed-arcana/blob/main/assets/js/script.js) |  | ![screenshot](documentation/code-validation/js-warnings.png) | After fixing the missing semicolons, there are atill 15 warnings related to the ES6 syntax in use |
| assets | [script.js](https://github.com/geraldine-mor/charmed-arcana/blob/main/assets/js/script.js) |  | ![screenshot](documentation/code-validation/js-eversion-6-warnings.png) | I attempted to correct the warnings by stating eversion: 6 but it had no effect |



## Responsiveness

⚠️ INSTRUCTIONS ⚠️

Use this space to discuss testing the live/deployed site on various device sizes.

The minimum requirement is to test the following 3 sizes:

- Mobile
- Tablet
- Desktop

**IMPORTANT**: You must provide screenshots of your results, to "prove" that you've actually tested them.

Using the [amiresponsive](http://ami.responsivedesign.is) mockup images (*or similar*) does not meet the requirements. Consider using some of the built-in device sizes from the Developer Tools.

If you have tested the project on your actual mobile phone or tablet, consider also including screenshots of these as well. It showcases a higher level of manual tests, and can be seen as a positive inclusion!

⚠️ --- END --- ⚠️

I've tested my deployed project to check for responsiveness issues.

| Page | Mobile | Tablet | Desktop | Notes |
| --- | --- | --- | --- | --- |
| Home | ![screenshot](documentation/responsiveness/mobile-home.png) | ![screenshot](documentation/responsiveness/tablet-home.png) | ![screenshot](documentation/responsiveness/desktop-home.png) | Works as expected |
| Game | ![screenshot](documentation/responsiveness/mobile-game.png) | ![screenshot](documentation/responsiveness/tablet-game.png) | ![screenshot](documentation/responsiveness/desktop-game.png) | Works as expected |
| 404 | ![screenshot](documentation/responsiveness/mobile-404.png) | ![screenshot](documentation/responsiveness/tablet-404.png) | ![screenshot](documentation/responsiveness/desktop-404.png) | Works as expected |

## Browser Compatibility

⚠️ INSTRUCTIONS ⚠️

Use this space to discuss testing the live/deployed site on various browsers. Consider testing at least 3 different browsers, if available on your system. You DO NOT need to use all of the browsers below, just pick any 3 (minimum).

Recommended browsers to consider:
- [Chrome](https://www.google.com/chrome)
- [Firefox (Developer Edition)](https://www.mozilla.org/firefox/developer)
- [Edge](https://www.microsoft.com/edge)
- [Safari](https://support.apple.com/downloads/safari)
- [Brave](https://brave.com/download)
- [Opera](https://www.opera.com/download)

**IMPORTANT**: You must provide screenshots of the browsers you've tested, to "prove" that you've actually tested them.

Please note, there are services out there that can test multiple browser compatibilities at the same time. Some of these are paid services, but some are free. If you use these, you must provide a link to the source used for attribution, and multiple screenshots of the results.

⚠️ --- END --- ⚠️

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Page | Chrome | Firefox | Safari | Notes |
| --- | --- | --- | --- | --- |
| Home | ![screenshot](documentation/browsers/chrome-home.png) | ![screenshot](documentation/browsers/firefox-home.png) | ![screenshot](documentation/browsers/safari-home.png) | Works as expected |
| Game | ![screenshot](documentation/browsers/chrome-game.png) | ![screenshot](documentation/browsers/firefox-game.png) | ![screenshot](documentation/browsers/safari-game.png) | Works as expected |
| 404 | ![screenshot](documentation/browsers/chrome-404.png) | ![screenshot](documentation/browsers/firefox-404.png) | ![screenshot](documentation/browsers/safari-404.png) | Works as expected |

## Lighthouse Audit

I tested my deployed project using the Lighthouse Audit tool to check for any major issues. Some warnings are outside of my control, and mobile results tend to be lower than desktop.

| Page | Mobile | Desktop |
| --- | --- | --- |
| Home | ![screenshot of homepage lighthouse audit](documentation/lighthouse/home-mobile.png) | ![screenshot of homepage lighthouse audit](documentation/lighthouse/home-desktop.png) |
| Tarot | ![screenshot of tarot page lighthouse audit](documentation/lighthouse/tarot-mobile.png) | ![screenshot of tarot page lighthouse audit](documentation/lighthouse/tarot-desktop.png) |
| Services | ![screenshot](documentation/lighthouse/) | ![screenshot](documentation/lighthouse/) |
| 404 | ![screenshot](documentation/lighthouse/mobile-404.png) | ![screenshot](documentation/lighthouse/desktop-404.png) |

## Defensive Programming

⚠️ INSTRUCTIONS ⚠️

Defensive programming (defensive design) is extremely important! When building projects that accept user inputs or forms, you should always test the level of security for each form field. Examples of this could include (but not limited to):

All Projects:

- Users cannot submit an empty form (add the `required` attribute)
- Users must enter valid field types (ensure the correct input `type=""` is used)
- Users cannot brute-force a URL to navigate to a restricted pages

Python Projects:

- Users cannot perform CRUD functionality if not authenticated (if login functionality exists)
- User-A should not be able to manipulate data belonging to User-B, or vice versa
- Non-Authenticated users should not be able to access pages that require authentication
- Standard users should not be able to access pages intended for superusers/admins

You'll want to test all functionality on your application, whether it's a standard form, or CRUD functionality, for data manipulation on a database. Try to access various pages on your site as different user types (User-A, User-B, guest user, admin, superuser). You should include any manual tests performed, and the expected results/outcome.

Testing should be replicable (can someone else replicate the same outcome?). Ideally, tests cases should focus on each individual section of every page on the website. Each test case should be specific, objective, and step-wise replicable.

Instead of adding a general overview saying that everything works fine, consider documenting tests on each element of the page (eg. button clicks, input box validation, navigation links, etc.) by testing them in their "happy flow", their "bad/exception flow", mentioning the expected and observed results, and drawing a parallel between them where applicable.

Consider using the following format for manual test cases:

- Expected Outcome / Test Performed / Result Received / Fixes Implemented

- **Expected**: "Feature is expected to do X when the user does Y."
- **Testing**: "Tested the feature by doing Y."
- (either) **Result**: "The feature behaved as expected, and it did Y."
- (or) **Result**: "The feature did not respond to A, B, or C."
- **Fix**: "I did Z to the code because something was missing."

Use the table below as a basic start, and expand on it using the logic above.

⚠️ --- END --- ⚠️

Defensive programming was manually tested with the below user acceptance testing:

| Page/Feature | Expectation | Test | Result | Screenshot |
| --- | --- | --- | --- | --- |
| Calculator UI | Feature is expected to allow the user to input two numbers and select an operator (`+`, `-`, `*`, `/`). | Entered two numbers and selected each operator to perform calculations. | Calculations for all operators worked as expected. | ![screenshot](documentation/defensive/input-output.png) |
| | Feature is expected to show an error message if inputs are empty (`NaN`). | Tried submitting calculations with empty input fields. | Error message displayed as expected. | ![screenshot](documentation/defensive/empty-inputs.png) |
| | Feature is expected to display buttons that are clear, large, and easy to select on all devices. | Verified button sizes and usability across multiple devices (mobile, tablet, desktop). | Buttons were accessible and easy to use on all tested devices. | ![screenshot](documentation/defensive/responsive.png) |
| | Feature is expected to use high-contrast colors and accessible fonts. | Checked contrast ratios using accessibility tools (e.g., Lighthouse, Wave). | Colors and fonts met accessibility standards. | ![screenshot](documentation/defensive/accessibility.png) |
| | Feature is expected to have clear labels and instructions for user guidance. | Reviewed labels and instructions for clarity and ease of use. | Labels and instructions were clear and intuitive. | ![screenshot](documentation/defensive/labels-instructions.png) |
| Instant Calculation | Feature is expected to calculate and display results instantly after selecting an operator. | Selected operators after entering two numbers. | Results were displayed instantly. | ![screenshot](documentation/defensive/calc-speed.png) |
| Error Handling | Feature is expected to display correct results even if an equation was input incorrectly. | Entered various incorrect equations and verified the results. | Correct results were displayed for all tested cases. | ![screenshot](documentation/defensive/error-handling.png) |
| Score Tracker | Feature is expected to track the number of correct and incorrect equations. | Performed multiple calculations (correct and incorrect) and checked the score tracker. | Score tracker updated correctly for all tested scenarios. | ![screenshot](documentation/defensive/score-tracker.png) |
| 404 Error Page | Feature is expected to display a 404 error page for non-existent pages. | Navigated to an invalid URL (e.g., `/test`) to test error handling. | A custom 404 error page was displayed as expected. | ![screenshot](documentation/defensive/404.png) |

## User Story Testing

⚠️ INSTRUCTIONS ⚠️

Testing User Stories is actually quite simple, once you've already got the stories defined on your README.

Most of your project's **Features** should already align with the **User Stories**, so this should be as simple as creating a table with the User Story, matching with the re-used screenshot from the respective Feature.

⚠️ --- END --- ⚠️

| Target | Expectation | Outcome | Screenshot |
| --- | --- | --- | --- |
| As a visitor | I want to easily navigate the site | to find all the information I need quickly and easily | ![screenshot of navbar](documentation/features/navbar-expand.png) |
| As a visitor | I want to view the overall mission and purpose of the site | so that I feel connected to its purpose | ![screenshot of landing page](documentation/features/landing-page.png) |
| As a visitor | I want to understand what the website offers | so that I know whether is fits my spiritual interests | ![screenshot of about section](documentation/features/about-section.png) |
| As a potential customer | I want to see information about the services provided | so that I can see if they fit my needs  | ![screenshot](documentation/features) <br>⚠️ --- Services Page --- ⚠️ |
| As a potential customer | I want to complete an enquiry form | so that I can ask questions about the services | ![screenshot](documentation/features) <br>⚠️ --- Enquiry Form --- ⚠️ |
| As a user | I would like clear labels and instructions | so that I understand how to use the app without confusion. | ![screenshot of game button instruction](documentation/features/button1.png) ![screenshot of game button instruction](documentation/features/button2.png) |
|As a customer | I want to receive confirmation of booking/enquiry | so that I know my message was sent | ![screenshot](documentation/features) <br>⚠️ --- Form Confirmation  --- ⚠️ |
| As a potential customer | I want to view pricing clearly | so that I understand the costs before I book | ![screenshot](documentation/features) <br>⚠️ --- Pricing --- ⚠️ |
| As a visitor | I want to play a simple tarot reading game | so that I can engage with tarot in a fun way | ![screenshot of tarot game](documentation/features/tarot-game.png) |
| As a visitor | I want the game to give me a brief interpretation of the chosen card | so that I gain insight or reflection | ![screenshot of tarot game with text](documentation/features/tarot-agme-played.png) |
| As a visitor | I want to sign up for regular emails | so that I can receive updates, readings or wellness tips | ![screenshot](documentation/features) <br>⚠️ --- Email Subscribe --- ⚠️ |
| As a user | I want confirmation that I signed up successfully | so that I know I'm on the mailing list | ![screenshot](documentation/features) <br>⚠️ --- Success Message--- ⚠️ |
| As a user | I want to access the tarot reader’s social media accounts directly from the website | so that I can follow for updates and content | ![screenshot of footer](documentation/features/footer.png) |
| As a user | I want social links to be visible and accessible | so that I can find them quickly and easily | ![screenshot of footer](documentation/features/footer.png) |
| As a visitor | I want the website to load quickly | so that I have a smooth experience | ![screenshot of performance test](documentation/lighthouse/home-desktop.png) |
| As a visitor | I want the website to feel calm, magical, and welcoming | so that it aligns with the spiritual theme | ![screenshot of homepage](documentation/features/landing-page.png) |
| As a potential customer | I want to view the tarot reader's contact information | so that I can contact them for information or bookings | ![screenshot](documentation/features) <br>⚠️ --- Contact Details --- ⚠️ |
| As a user | I would like to see a 404 error page if I get lost | so that it's obvious that I've stumbled upon a page that doesn't exist. | ![screenshot](documentation/features) <br>⚠️ --- 404 page --- ⚠️ |

## Bugs

⚠️ INSTRUCTIONS ⚠️

Nobody likes bugs,... except the assessors! Projects seem more suspicious if a student doesn't properly track their bugs. If you're about to submit your project without any bugs listed below, you should ask yourself why you're doing this course in the first place, if you're able to build this entire application without running into any bugs. The best thing you can do for any project is to document your bugs! Not only does it show the true stages of development, but think of it as breadcrumbs for yourself in the future, should you encounter the same/similar bug again, it acts as a gentle reminder on what you did to fix the bug.

If/when you encounter bugs during the development stages of your project, you should document them here, ideally with a screenshot explaining what the issue was, and what you did to fix the bug.

Alternatively, an improved way to manage bugs is to use the built-in **[Issues](https://www.github.com/geraldine-mor/charmed-arcana/issues)** tracker on your GitHub repository. This can be found at the top of your repository, the tab called "Issues".

If using the Issues tracker for bug management, you can simplify the documentation process for testing. Issues allow you to directly paste screenshots into the issue page without having to first save the screenshot locally. You can add labels to your issues (e.g. `bug`), assign yourself as the owner, and add comments/updates as you progress with fixing the issue(s). Once you've solved the issue/bug, you should then "Close" it.

When showcasing your bug tracking for assessment, you can use the following examples below.

⚠️ --- END --- ⚠️

### Fixed Bugs

[![GitHub issue custom search](https://img.shields.io/github/issues-search/geraldine-mor/charmed-arcana?query=is%3Aissue%20is%3Aclosed%20label%3Abug&label=Fixed%20Bugs&color=green)](https://www.github.com/geraldine-mor/charmed-arcana/issues?q=is%3Aissue+is%3Aclosed+label%3Abug)

I've used [GitHub Issues](https://www.github.com/geraldine-mor/charmed-arcana/issues) to track and manage bugs and issues during the development stages of my project.

All previously closed/fixed bugs can be tracked [here](https://www.github.com/geraldine-mor/charmed-arcana/issues?q=is%3Aissue+is%3Aclosed+label%3Abug).

![screenshot](documentation/bugs/gh-issues-closed.png)

### Unfixed Bugs

⚠️ INSTRUCTIONS ⚠️

You will need to mention any unfixed bugs and why they are not fixed upon submission of your project. This section should include shortcomings of the frameworks or technologies used. Although time can be a big variable to consider, paucity of time and difficulty understanding implementation is not a valid reason to leave bugs unfixed. Where possible, you must fix all outstanding bugs, unless outside of your control.

If you've identified any unfixed bugs, no matter how small, be sure to list them here! It's better to be honest and list them, because if it's not documented and an assessor finds the issue, they need to know whether or not you're aware of them as well, and why you've not corrected/fixed them.

⚠️ --- END --- ⚠️

[![GitHub issue custom search](https://img.shields.io/github/issues-search/geraldine-mor/charmed-arcana?query=is%3Aissue%2Bis%3Aopen%2Blabel%3Abug&label=Unfixed%20Bugs&color=red)](https://www.github.com/geraldine-mor/charmed-arcana/issues?q=is%3Aissue+is%3Aopen+label%3Abug)

Any remaining open issues can be tracked [here](https://www.github.com/geraldine-mor/charmed-arcana/issues?q=is%3Aissue+is%3Aopen+label%3Abug).

![screenshot](documentation/bugs/gh-issues-open.png)

### Known Issues

| Issue | Screenshot |
| --- | --- |
| The project is designed to be responsive from `375px` and upwards, in line with the material taught on the course LMS. Minor layout inconsistencies may occur on extra-wide (e.g. 4k/8k monitors), or smart-display devices (e.g. Nest Hub, Smart Watches, Gameboy Color, etc.), as these resolutions are outside the project’s scope, as taught by Code Institute. | ![screenshot](documentation/issues/poor-responsiveness.png) |


> [!IMPORTANT]  
> There are no remaining bugs that I am aware of, though, even after thorough testing, I cannot rule out the possibility.

