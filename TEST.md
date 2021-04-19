## Encountered Issues
- The buttons(anchor elements) in the hero container of the home page wouldn't take top margin;
    - **FIXED** by adding a display value to the element, as per this [article](https://css-tricks.com/forums/topic/anchor-tag-not-registering-margin-top/)

- The slideshow gallery wouldn't loop continously through the images and would stop on the last one;
    - **FIXED** by adding the statement of ```loop: true```

## Testing User Stories
- ## As a user I need:
    - to navigate through your website quickly and efficiently
    >:heavy_check_mark: The navigation bar is visible at all times and various CTAs are available across the page.
    - to easily understand the purpose of your website
    >:heavy_check_mark: The hero container displays a very big heading describing the website's purpose and two CTAs.
    - to search for recipes through a wide variety of keywords
    >:heavy_check_mark: The Recipe Book page allows the user to search for recipes by a wide variety of keywords(e. g. recipe name, ingredients, meal type, diet label, etc.)
    - to follow your social media accounts in order to join the community
    >:heavy_check_mark: Social media icons are displayed in the footer of the Home page and in the submitted version of the form on the Contact page.
    - to be able to get in touch via contact form input
    >:heavy_check_mark: The Contact page offers a contact form which allows the user to submit every sort of query.
    - to be able to access your website across a range of devices
    >:heavy_check_mark: The website was built with a mobile-first approach and is fully responsive.

## Testing Responsiveness and Functionality

- ## Responsiveness

> Responsiveness was explored and tested using DevTools and on a wide variety of devices of different sizes, in both portrait and landscape, in order to detect any issue. No issues were found; elements align correctly in space, none being obstructed. In conclusion, the website is fully responsive.

- ## Functionality

- Links and buttons
    - Navigation bar is fully functional, logo image included.
    - Links are fully functional across the page.
    - Social media icon buttons work as external links and open the pages in new tabs as expected.

- Slideshow Gallery
    - Images slide horizontally as expected with the active indicator showing which image is being shown at any given time.

- Form Validation
    - The contact form was tested for validation by trying to submit firstly with no input data and then by filling in the fields one by one. Results as expected, error messages withdrawn upon insertion of expected input. The email field asks for email format with @, the full name field ask do not allow special characters and any word should be longer than three letters, and the message input also doesn't allow special characters and needs to be longer than 20 characters.

## Testing Compatibility
 
### Operating System test
- Desktop
> Testing was done on Windows 7 and Windows 10. Features appear to be functional from top to bottom. Buttons, links, slideshow gallery and contact form, all working correctly. No overflow, overlay or error messages encountered. Everything falls into place in space. In conclusion, the website is desktop system-cross compatible.

- Mobile
> Testing was done on Android 9, Android 10, iOS 12, iOS 13 and iOS 14. Features appear to be functional from top to bottom. Buttons, links, slideshow gallery and contact form, all work correctly. No overflow, overlay or error messages encountered. Everything falls into place in space. In conclusion, the website is mobile system-cross compatible.

- Tablet
> Testing was done on Galaxy Tab 4 and iPad Pro. Features appear to be functional from top to bottom. Buttons, links, slideshow gallery and contact form, all work correctly. No overflow, overlay or error messages encountered. Everything falls into place in space. In conclusion, the website is tablet system-cross compatible.

### Devices test

 > Testing was done on HP Notebook, Galaxy S20, iPhone 7/8/11/12/12 Pro, Galaxy Tab 4 and iPad Pro 12.9 2020. Features appear to be functional from top to bottom. Buttons, links, slideshow gallery and contact form, all work correctly. No overflow, overlay or error messages encountered. Everything falls into place in space. In conclusion, the website is platform-cross compatible.

 ### Browser test

 > The website was tested on Google Chrome, Firefox, Safari and Microsoft Edge. Browser versions were all up to date. Further testing was done using [BrowserLing](https://www.browserling.com/). Features appear to be functional from top to bottom. Buttons, links, slideshow gallery and contact form, all work correctly. No overflow, overlay or error messages encountered. Everything falls into place in space. In conclusion, the website is browser-cross compatible.

## Testing Performance
 > Performance tests were run for both Desktop and Mobile using Lighthouse in Google Chrome. The results are slightly different every time due to device performance and value estimation. The results are satisfying. See further details below...

- Desktop
> ![Desktop Performance Report](https://github.com/alexandruvalentin/Spice-Check/blob/master/readme-images/lighthouse-desktop.jpg)

- Mobile
> ![Mobile Performance Report](https://github.com/alexandruvalentin/Spice-Check/blob/master/readme-images/lighthouse-mobile.jpg)

## Testing Accessibility

- The website's accessibility was also tested using Lighthouse, scoring a satisfying result. In addition, good contrast color-pairs resulted from using the [Color Contrast Accessibility Validator](https://color.a11y.com/Contrast/)

## Code Validation

 - HTML
> Tested and validated using W3C Validator. Issues were adjusted and the only warning is received is for the lack of heading in the section elements which is not conclusive since the validator doesn't get the dynamically loaded content (which has headings for each page). The content for each page was separately tested with the same validator by direct input. No other errors or warnings.

 - CSS
> Tested and validated with W3C CSS Validator. Only errors displayed are URI related (https://unpkg.com/swiper@6.5.7/swiper-bundle.min.css) to the swiper and warnings concerning the vendor prefixes, which can be ignored.

 - JavaScript
> Javascript methods and functions were tested for the expected outcome in the console using the console.log() command.

## Further Testing

 - Overflow and Spelling
> The website was tested for overflow using [Unicorn Revealer](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln?hl=en-GB) Chrome extension. No faults were found. Spelling was checked thoroughly using W3C [Spell Checker](https://www.w3.org/2002/01/spellchecker). Only spelling errors found were in my full name, displayed in the copyrights section in the footer.





