# Accessibility

**Accessibility** is an often-overlooked part of building and designing web pages. It ensures that all different types of users, especially those with disabilities, have an equal experience when visiting any web page.

## How to Use Assistive Technologies

Accessibility allows those who use assistive technologies, like screen readers, to experience the application as best as possible. Most computers have built-in readers.

#### For Windows Users:

Narrator 
- https://support.microsoft.com/en-us/help/22798/windows-10-complete-guide-to-narrator

#### For Mac Users:

VoiceOver
- https://www.apple.com/accessibility/mac/vision/
    - Check the VoiceOver user guide

## Principles of Accessibility

The principles of accessibility, based on the International standards from W3C Web Accessibility Initiative (WAI), generally dictate that user interfaces (UIs) should be perceivable, operable, and understandable. 

```
That is, any type of user should be able to see, use, and understand the interface easily.
```
<hr>

*The following principles should be loosely understood! Do not memorize or spend too much time on these - just proceed to the code drills.*

#### 1. Perceivable information and user interface
- Text alternatives for non-text content 
    - Alternate text for images, icons, and graphics
    - Descriptions of data on charts, diagrams, and illustrations
    - Brief descriptions of non-text content like videos and audio
    - Labels for form inputs

- Captions and other alternatives for multimedia

- Content can be presented in different ways. For users to be able to change the presentation of content, it is necessary that:
    - Headings, lists, tables and other structures in the content are marked-up properly
    - Browsers and assistive technologies provide settings to customize the presentation.

- Content is easier to see and hear
    - Color is not used as the only way of conveying information or identifying content;
    - Default foreground and background color combinations provide sufficient contrast;
    - Text is resizable up to 200% without losing information, using a standard browser;
    - Images of text are resizable, replaced with actual text, or avoided where possible;
    - Users can pause, stop, or adjust the volume of audio that is played on a website;
    - Background audio is low or can be turned off, to avoid interference or distraction.

#### 2. Operable user interface and navigation
- Functionality is available on the keyboard
    - All functionality that is available by mouse is also available by keyboard;
    - Keyboard focus does not get trapped in any part of the content;
    - Web browsers, authoring tools, and other tools provide keyboard support.

- Users have enough time to read and use the content
    - Stop, extend, or adjust time limits, except where necessary; Pause, stop, or hide moving, blinking, or scrolling content; 
    - Postpone or suppress interruptions, except where necessary;
    - Re-authenticate when a session expires without losing data.

- Content does not cause seizures
    - Content that flashes at certain rates or patterns can cause photosensitive reactions, including seizures. Flashing content is ideally avoided entirely or only used in a way that does not cause known risks.

- Users can easily navigate, find content, and determine where they are. Well organized content helps users to orient themselves and to navigate effectively. Such content includes:

    - Pages have clear titles and are organized using descriptive section headings;
    - There is more than one way to find relevant pages within a set of web pages;
    - Users are informed about their current location within a set of related pages;

#### 3. Understandable user interface 
- Text is readable and understandable
    - Content authors need to ensure that text content is readable and understandable to the broadest audience possible, including when it is read aloud by text-to-speech. Such content includes:
        - Identifying the primary language of a web page, such as Arabic, Dutch, or Korean
        - Identifying the language of text passages, phrases, or other parts of a web page
        - Providing definitions for any unusual words, phrases, idioms, and abbreviations
        - Using the clearest and simplest language possible, or providing simplified versions

- Users are helped to avoid and correct mistakes
    - Forms and other interaction can be confusing or difficult to use for many people, and, as a result, they may be more likely to make mistakes. Examples of helping users to avoid and correct mistakes include:
        - Descriptive instructions, error messages, and suggestions for correction
        - Context-sensitive help for more complex functionality and interaction
        - Opportunity to review, correct, or reverse submissions if necessary

#### 4. Robust and reliable Interpretation
- Content is compatible with current and future user tools  
    - Robust content is compatible with different browsers, assistive technologies, and other user agents. Examples of how this can be achieved include:
        - Ensuring markup can be reliably interpreted, for instance by ensuring it is valid;
        - Providing a name, role, and value for non-standard user interface components.

## Student Activities 

1. Semantic Tags
2. Alerts
3. Images 


### References 

 - *W3 Web Accessibility Initiative*
