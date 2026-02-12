# 📸 How to Add Your Crush's Photo (Easter Egg Feature)

## 🎁 Secret Easter Egg
Click the ❤️ heart **10 times** to reveal a secret photo of your crush!

## 📝 How to Add Your Photo:

### Option 1: Simple (Recommended)
1. Save your crush's photo in the same folder as `index.html`
2. Rename the photo to: `your-crush-photo.jpg`
3. That's it! The photo will automatically appear when you click the heart 10 times

### Option 2: Custom Filename
If you want to use a different filename:

1. Open `index.html` in a text editor
2. Find this line (around line 37):
   ```html
   <img src="your-crush-photo.jpg" alt="💕" id="crushPhoto"
   ```
3. Replace `your-crush-photo.jpg` with your actual filename
   - Examples: `crush.png`, `photo.jpeg`, `her-pic.jpg`

### Option 3: Online Photo URL
Use a photo from the internet:

1. Find the direct image URL (should end with .jpg, .png, etc.)
2. Replace `your-crush-photo.jpg` with the full URL
   ```html
   <img src="https://example.com/photo.jpg" alt="💕"
   ```

## ✨ Easter Egg Milestones:
- **5 heart clicks** → Shows "Chirkut" text
- **10 heart clicks** → Reveals photo with romantic message + floating hearts animation

## 💡 Tips:
- Use a square or portrait photo for best results
- Recommended size: 400x400px or larger
- Supported formats: JPG, PNG, GIF, WebP
- If no photo is added, a placeholder camera icon will show

## 🎨 Want to Customize the Message?
Edit these lines in `index.html`:
```html
<h3>The reason I smile everyday ✨</h3>
<p>Every moment with you is my favorite memory 💕</p>
```

Enjoy! 💖
