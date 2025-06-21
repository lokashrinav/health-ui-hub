# Health UI Hub - MediCore AI Platform

A modern, responsive healthcare AI platform built with React, TypeScript, and shadcn/ui components.

![Health UI Hub](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.1-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.11-38B2AC?logo=tailwind-css)

## 🚀 Features

- **AI-Powered Diagnosis**: Advanced machine learning algorithms for accurate preliminary diagnoses
- **Cardiovascular Analysis**: Specialized models for heart health assessment and ECG analysis
- **Lab Result Interpretation**: Intelligent analysis of laboratory results with detailed explanations
- **Drug Interaction Checker**: Comprehensive medication analysis to prevent dangerous interactions
- **Clinical Decision Support**: Evidence-based recommendations for healthcare providers
- **Patient Management**: Streamlined patient data management with AI-driven insights
- **HIPAA Compliant**: Enterprise-grade security and privacy protection
- **Responsive Design**: Optimized for all devices and screen sizes

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1, TypeScript 5.5.3
- **Build Tool**: Vite 5.4.1
- **Styling**: Tailwind CSS 3.4.11
- **UI Components**: shadcn/ui with Radix UI primitives
- **State Management**: TanStack Query for server state
- **Routing**: React Router DOM 6.26.2
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts for data visualization

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/lokashrinav/health-ui-hub.git
   cd health-ui-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

## 🏗️ Project Structure

```
health-ui-hub/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Landing page hero section
│   │   ├── Features.tsx    # Features showcase
│   │   ├── Testimonials.tsx # Customer testimonials
│   │   └── Footer.tsx      # Site footer
│   ├── pages/              # Page components
│   │   ├── Index.tsx       # Home page
│   │   └── NotFound.tsx    # 404 page
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── App.tsx             # Main app component
│   └── main.tsx            # App entry point
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
└── package.json            # Dependencies and scripts
```

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding New Components

1. Create your component in `src/components/`
2. Import and use shadcn/ui components from `src/components/ui/`
3. Follow the existing component patterns for consistency

### Styling

- Use Tailwind CSS classes for styling
- Follow the existing color scheme (blue primary, gray secondary)
- Use the design system defined in `tailwind.config.ts`

### Adding New Pages

1. Create your page component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url_here
VITE_APP_NAME=MediCore AI
```

### Tailwind Configuration

The project uses a custom Tailwind configuration with:
- Custom color palette
- Extended spacing and typography
- Animation utilities
- shadcn/ui integration

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🔒 Security Features

- HIPAA compliance ready
- Secure data handling
- Input validation with Zod
- XSS protection
- CSRF protection

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with one click

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### Other Platforms

The project can be deployed to any static hosting platform:
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Surge.sh

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/lokashrinav/health-ui-hub/issues) page
2. Create a new issue with detailed information
3. Contact the maintainers

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the fast build tool
- [React](https://reactjs.org/) for the amazing UI library

---

**Built with ❤️ for better healthcare** 