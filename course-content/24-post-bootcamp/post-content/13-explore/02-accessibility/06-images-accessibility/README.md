# Images

When building web pages and applications, there are times when users cannot view important images or videos. In these cases, developers should ensure that there is alternate text for assistive technologies to read.

## Adding an Alt Attribute

Any `<img>` tag in HTML has a built in property of `alt` which allows the developer to set alternate text that is read when a user is screen reading.



Here are three different examples:

**1**
```HTML

<img src = "https://pixel.nymag.com/imgs/fashion/daily/2018/06/29/29-drake.w700.h700.jpg">

```
*Without an alt tag, many screen readers will read the entire URL link*

**2**
```HTML

<img src = "https://pixel.nymag.com/imgs/fashion/daily/2018/06/29/29-drake.w700.h700.jpg" alt="Rapper Drake looking sad">

```
*The screen reader will read the entire alt description*

**3**
```HTML

<img src = "https://pixel.nymag.com/imgs/fashion/daily/2018/06/29/29-drake.w700.h700.jpg" alt="">

```
*The screen reader can highlight the image, but it will not read anything*



**Bottom Line:** NEVER exclude the `alt` attribute UNLESS you plan to add a specific role to the image, discussed below.

## Adding Role Attributes to Images

We can also note that an image is an image that requires no additional explanation by adding a `role="presentation"`. This is common for background images or basic static design images.

```HTML
<img src = ",/background.png" `role="presentation"`>

```
# Instructions

Open `images.html` and create a web page with the following requirements.

1. Dedicated `header`, `main`, and `footer` landmarks. Make sure the main tag has a role.

2. One alert anywhere on the page with the correct role.

3. Four images on the page:
    - One without any `alt` tag
    - One with an `alt` tag with a brief description
    - One with a blank `alt` tag
    - One with a presentation role


#### BONUS!

1. Style your page to your heart's desire!