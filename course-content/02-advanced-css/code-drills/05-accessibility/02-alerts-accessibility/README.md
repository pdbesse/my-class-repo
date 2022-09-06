# Alerts

An alert signals to the user that there is some very important information on the page. As such, any information that is labeled as an alert will be read to a screen reader immediately when they load the page, even if that alert is in the middle or at the end of the page. 

In this lesson, we are speaking about HTML alerts, rather than Javascript-generated alerts (by the browser itself). 

## How to Create Alerts

You MUST assign a role to your alerts to make sure they're read to screen readers. Assigning `role = "alert"` will achieve this.

#### Bad Alert

```HTML
<div class = "alert alert-danger">James Harden has facial hair.</div>

```

#### Good Alert

```HTML
<div class = "alert alert-danger" role = "alert">James Harden has an exquisitely thick and lusciously voluptuous beard.</div>

```

The Bad Alert will *NOT* be read by screen readers, whereas the Good Alert will.

## Aria Tags 

Aria Tags convey all sorts of information, like role, state, and property, to assistive technologies (screen readers) through your HTML elements. 

You can "hide" elements to screen readers by adding an `aria-hidden = "true"`. This way, if you have difficult text or symbols on the screen, you can save screen readers the confusion of having those read to them.

To add more assistive labels, you can add an `aria-label=""`.

## Form Validation

Alerts are useful when dealing with form validation. If a user's input fails the validations, you can dynamically generate an alert with a `role="alert"` 

## **DEMO:** Alerts.




