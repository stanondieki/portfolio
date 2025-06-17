# How to Add Your Picture to the Portfolio

## Steps to Add Your Profile Picture:

### Option 1: Add to Public Folder (Recommended)
1. **Save your picture** as `stanley-profile.jpg` (or `.png`, `.webp`)
2. **Place it in the `public` folder** of your project
3. **Update the data file** at `src/lib/data.ts`:
   ```typescript
   export const personalInfo: PersonalInfo = {
     name: "Stanley Ondieki",
     title: "Software Developer",
     bio: "...",
     avatar: "/stanley-profile.jpg", // Add this line
   };
   ```

### Option 2: Use an Online Image URL
1. **Upload your picture** to an image hosting service (like Imgur, Cloudinary, or your Google Drive)
2. **Get the direct image URL**
3. **Update the data file**:
   ```typescript
   avatar: "https://your-image-url.com/stanley-profile.jpg",
   ```

## Image Specifications:
- **Size**: 400x400 pixels (square format works best)
- **Format**: JPG, PNG, or WebP
- **File size**: Under 500KB for best performance
- **Background**: Clean background or professional headshot

## After Adding Your Picture:
The portfolio will automatically display your picture in a beautiful circular frame with a green "online" indicator dot.

## Current Status:
Right now, the portfolio shows your initials "SO" in a gradient circle as a placeholder until you add your actual picture.
