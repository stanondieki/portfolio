# Professional Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## ✨ Features

- **Modern Design**: Clean, professional, and responsive design
- **Interactive Animations**: Smooth animations with Framer Motion
- **Sections**: Hero, About, Experience, Projects, and Contact
- **TypeScript**: Full type safety throughout the application
- **Responsive**: Optimized for all device sizes
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Performance**: Built with Next.js 15 for optimal performance

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Code Quality**: ESLint

## 📋 Prerequisites

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun

## 🛠️ Installation & Setup

1. **Clone or use this repository**

2. **Install dependencies**:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Start the development server**:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information

Edit `src/lib/data.ts` to update your personal information:

- **Personal Info**: Name, title, bio, avatar, resume URL
- **Experience**: Work history, positions, descriptions
- **Projects**: Portfolio projects with descriptions and links
- **Skills**: Technical skills organized by category
- **Contact**: Email, phone, location, social links

### Resume Integration

To add your resume:

1. **PDF Method**: Place your resume PDF in the `public` folder
2. **Update data**: Set `resumeUrl: "/your-resume.pdf"` in `src/lib/data.ts`
3. **External Link**: Use a direct link to Google Drive, Dropbox, etc.

### Styling

- **Colors**: Modify Tailwind config or use CSS custom properties
- **Fonts**: Update font imports in `src/app/layout.tsx`
- **Layout**: Customize components in `src/components/`

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Other Platforms
```bash
npm run build
npm run start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Need help customizing your portfolio?** Feel free to reach out or check the documentation!

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
