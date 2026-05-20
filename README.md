# Portfolio Template for Students

This project is a ready-made portfolio website.

You do not need to install anything.
You do not need to open coding software.
You do not need to work on your own computer files.

You will do everything on:

- GitHub
- Vercel

If you can edit text on a website, you can use this project.

## How this will work

You will follow this simple path (detailed instructions are below):

1. Open the project on GitHub
2. Make your own copy by using **Fork**
3. Edit the files directly on GitHub in your browser
4. Upload your photo on GitHub
5. Connect the project to Vercel
6. Click deploy
7. Get your live website link

## What this website is for

Use this template to make your own portfolio website.

You can use it to show:

- your name
- your photo
- your introduction
- your skills
- your education
- your projects
- your internship or work experience
- your contact details

## The 3 files in very simple words

### `index.html`

This is the main file.

This is where you will change almost everything, such as:

- your name
- your title
- your about section
- your skills
- your experience
- your projects
- your education
- your contact details

If you only want to change words and information, this is the main file you will edit.

### `assets/css/style.css`

This file controls how the website looks.

This is where you can change:

- colors
- fonts
- spacing

If you do not want to change the design, you can leave this file alone.

### `assets/js/main.js`

This file helps small parts of the website work properly.

Most students should not change this file.

Leave it as it is.

## Very important rule

Anything inside square brackets is sample text.

Example:

```html
[Your Name]
```

This means you should replace it with your real information.

This includes placeholders like `[Your Name]`, `[YN]`, and `[yourname@email.com]`.

## How to make your own copy on GitHub

### What "Fork" means

Fork means:

"Make my own copy of this project in my own GitHub account."

### Steps to fork the project

1. Open the project page on GitHub
2. Sign in to your GitHub account
3. Click the `Fork` button near the top-right
4. Wait a few seconds
5. GitHub will create your own copy
6. Open your copied version

Now you will edit **your own copy**, not the original project.

### What the GitHub Fork button looks like

Reference screenshot from GitHub Docs:

![GitHub Fork button screenshot](https://docs.github.com/assets/cb-34352/images/help/repository/fork-button.png)

If GitHub changes its design later, the button may look a little different, but it will still usually say `Fork`.

## How to edit the website on GitHub only

You do not need to download anything.

You will edit the files directly inside GitHub.

### How to edit text

1. Open your project on GitHub
2. Click `index.html`
3. Click the pencil icon
4. Find the placeholder text
5. Replace it with your own information
6. Scroll down
7. In the message box, write something simple like:
   `Updated my portfolio text`
8. Click `Commit changes`

That saves your change.

### What to change first in `index.html`

Replace these things first:

1. your name
2. your title
3. your browser tab title (`<title>[Your Name]</title>`)
4. your initials in the logo/photo fallback (`[YN]`)
5. your short introduction
6. your skills
7. your projects
8. your work or internship experience
9. your education
10. your phone number
11. your email
12. your LinkedIn link
13. your GitHub link

### How the Send Message button works

The `Send a Message` button is set to open Gmail in the browser.

So it should not open Microsoft Outlook.

Important:

- It works best if you are already signed in to Gmail
- Replace `[yourname@email.com]` in `index.html` with your own email address
- Update **both** Gmail links (the `Send a Message` button and the Email contact row) so they send to your email

## How to upload your photo on GitHub

Your photo should go in this folder:

`assets/images/`

### Easiest method

1. Open your project on GitHub
2. Open the `assets` folder
3. Open the `images` folder
4. Click `Add file`
5. Click `Upload files`
6. Select your photo
7. Rename the photo to `profile-photo.jpg`
8. Click `Commit changes`

This is the easiest method because the template is already looking for this exact file name.

### If your photo has another name

That is still okay.

But then you must also change the image path in `index.html`.

Find this line:

```html
src="assets/images/profile-photo.jpg"
```

If your file is called `myphoto.png`, change it to:

```html
src="assets/images/myphoto.png"
```

### If you do not upload a photo

The website will still work.

It will show initials instead of a real image.

## How to upload your resume on GitHub

The template includes a `Download Resume` button.

Your resume should go in this folder:

`assets/docs/`

### Easiest method

1. Open your project on GitHub
2. Open the `assets` folder
3. Open the `docs` folder
4. Click `Add file`
5. Click `Upload files`
6. Select your resume PDF
7. Rename the file to `resume.pdf`
8. Click `Commit changes`

This is the easiest method because the template is already looking for this exact file name:

`assets/docs/resume.pdf`

### If your resume has another name

That is still okay.

But then you must also open `index.html` and change:

`assets/docs/resume.pdf`

to your real file name.

Example:

`assets/docs/riya-sharma-resume.pdf`

## How to change colors on GitHub

If you want to change the design colors:

1. Open `assets/css/style.css`
2. Click the pencil icon
3. Look near the top for color values like `#bf9b5a`
4. Change one color at a time
5. Click `Commit changes`

If you are unsure, only change the colors and do not change anything else.

## Safest way to edit this project

If you want the simplest possible method, only change:

- text in `index.html`
- your photo in `assets/images/`
- a few colors at the top of `assets/css/style.css`

Do not change:

- folder names
- file names
- anything inside `assets/js/main.js`

## How to deploy this website on Vercel

Vercel is the website that will put your portfolio live on the internet.

This means people will be able to open your portfolio using a web link.

## Before deploying

Make sure:

- your project is in your GitHub account
- your edits are saved on GitHub
- your photo is uploaded

## Step-by-step Vercel guide

1. Go to [https://vercel.com](https://vercel.com)
2. Click `Sign Up` or `Log In`
3. Choose `Continue with GitHub`
4. Sign in with the same GitHub account where your project is saved
5. Allow Vercel to access your GitHub account if it asks
6. After logging in, click `Add New...`
7. Click `Project`
8. Find your portfolio project name in the list
9. Click `Import`
10. Leave the settings as they are
11. Click `Deploy`

Then wait a little.

Vercel will create a live website link for you.

That link is your portfolio website.

### What the Vercel project import area looks like

Reference screenshot from Vercel Docs:

![Vercel new project screenshot](https://7nyt0uhk7sse4zvn.public.blob.vercel-storage.com/docs-assets/static/docs/concepts/projects/add-new-project-light.png)

If Vercel changes its design later, do not worry. You are still looking for:

- `Add New...`
- `Project`
- `Import`
- `Deploy`

## How to update your website later

This is the easy part.

After your project is connected to Vercel:

1. Go back to GitHub
2. Edit the file you want
3. Click `Commit changes`
4. Wait a short time

Vercel will usually update the live website automatically.

So if you fix your text later, your live website also gets updated.

## Very important things to remember

- Keep `index.html` in the main project area
- Keep `style.css` inside `assets/css/`
- Keep `main.js` inside `assets/js/`
- Keep your photo inside `assets/images/`
- Do not rename folders unless you know exactly what you are doing

If you move files to the wrong place, the website may stop working properly.

## Final checklist before you deploy

Before clicking deploy, make sure:

- your real name is added
- your title is added
- your initials (`[YN]`) are replaced
- your email is correct
- both Gmail links use your real email address
- your LinkedIn link is correct
- your GitHub link is correct
- your photo is uploaded
- the placeholder text is removed
- your projects are added
- your experience is added
- your education is added

## If something looks wrong

If your website does not look right, check these things first:

- Make sure you did not delete any folders
- Make sure your photo is inside `assets/images/`
- Make sure the photo name matches the name written in `index.html`
- Make sure your GitHub, LinkedIn, email, and phone links are correct
- Make sure you clicked `Commit changes` after editing on GitHub
- Make sure Vercel finished deploying

## Very small example

Change this:

```html
[Your Name]
```

To this:

```html
Riya Sharma
```

Change this:

```html
[Project Title]
```

To this:

```html
Student Attendance Dashboard
```

That is how the whole template works.

## In one simple sentence

Fork the project on GitHub, edit your details on GitHub, upload your photo on GitHub, and deploy the project on Vercel.
