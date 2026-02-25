# Portfolio Website

## Overview

This is a comprehensive, modern portfolio website for 고경석 (Ko Kyung Seok), a specialized office software developer with 5 years of experience (2019.08 - 2024.12). The website showcases detailed career progression, 9 core modules developed, and technical expertise in Node.js, React, Tibero ODBC, Docker, and advanced office software architecture. The application is built as a full-stack TypeScript application using React on the frontend and Express.js on the backend, with a PostgreSQL database setup using Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (January 2025)

### Portfolio Content Enhancement
- **Date**: January 11, 2025
- **Major Update**: Integrated comprehensive 5-year career summary with detailed technical context
- **Core Modules Added**: 9 modules (Annotation/Ruby, Bookmarks, Form Objects, Find/Replace, Composition Symbols, Caption, Cross-reference, Page Thumbnail, Theme/ClrMap)
- **Tech Stack Detailed**: Node.js + Tibero ODBC, Docker, React, pdf.js, html-to-image, Liquibase, TestLink QA, Jest, IMS issue management
- **Key Achievements**: Color accuracy 0% error rate, 100+ IMS issues resolved, 95% test coverage, performance optimizations
- **Contact Updates**: Email to kugll9606@gmail.com, Phone 010-4162-9606 added
- **Navigation**: Removed emojis, kept professional icon-based design
- **Timeline**: Reorganized chronologically 2019-2024 with role progression from Junior Developer to Architecture Lead

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: Radix UI primitives with custom styling
- **Build Tool**: Vite for development and building

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ESM modules
- **Database ORM**: Drizzle ORM
- **Session Storage**: PostgreSQL-based sessions using connect-pg-simple
- **Development**: Hot reload with Vite middleware integration

### Database Architecture
- **Database**: PostgreSQL (configured via Drizzle)
- **Connection**: Neon Database serverless connection
- **Schema Management**: Drizzle Kit for migrations
- **Schema Location**: Shared schema definitions in `/shared/schema.ts`

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation (emoji-free, professional icons)
- **Hero Section**: Main introduction with profile photo, resume download (kugll9606@gmail.com, 010-4162-9606)
- **Experience Timeline**: Comprehensive 5-year career progression (2019-2024) with detailed role evolution, core modules, tech stack, and quantified achievements
- **Skills Section**: Interactive skill progress bars with 4 categories (Core Development, Database & Infrastructure, Professional Libraries, QA & Quality Management) plus core modules expertise grid
- **Projects Section**: Detailed showcase of 9 core modules (Annotation/Ruby, Bookmarks, Form Objects, Find/Replace, Composition Symbols, Caption, Cross-reference, Page Thumbnail, Theme/ClrMap) with impact metrics and technical details
- **Achievements Section**: Quantified performance metrics and key accomplishments with visual impact indicators
- **Contact Section**: Professional contact information with email and phone integration
- **Theme System**: Dark/light mode toggle with persistent preferences

### Backend Infrastructure
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route Registration**: Centralized route management system
- **Error Handling**: Global error middleware
- **Request Logging**: Automatic API request/response logging
- **Static File Serving**: Vite-based static file serving in development

### Shared Resources
- **Schema Definitions**: Database schema with Zod validation
- **Type Safety**: End-to-end TypeScript types
- **Path Aliases**: Simplified import paths using TypeScript path mapping

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Processing**: Express routes handle requests through the storage interface
3. **Data Persistence**: Storage layer interacts with PostgreSQL via Drizzle ORM
4. **Response Handling**: Standardized JSON responses with error handling
5. **State Management**: Client-side caching and synchronization via TanStack Query

## External Dependencies

### UI and Styling
- **shadcn/ui**: Pre-built accessible UI components
- **Radix UI**: Headless UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **React Icons**: Additional icon sets

### Development Tools
- **Vite**: Fast build tool and dev server
- **TypeScript**: Type safety across the stack
- **ESBuild**: Fast JavaScript bundler for production
- **PostCSS**: CSS processing with Autoprefixer

### Database and Backend
- **Drizzle ORM**: Type-safe database toolkit
- **Neon Database**: Serverless PostgreSQL
- **connect-pg-simple**: PostgreSQL session store
- **Express**: Web application framework

## Deployment Strategy

### Development
- **Dev Server**: Vite development server with HMR
- **API Integration**: Express middleware integration with Vite
- **Database**: Local or cloud PostgreSQL instance
- **Environment**: NODE_ENV=development with debug logging

### Production Build
- **Frontend**: Vite build to `/dist/public`
- **Backend**: ESBuild bundle to `/dist/index.js`
- **Static Assets**: Served from build output directory
- **Database**: Production PostgreSQL with connection pooling

### Build Process
1. Frontend assets compiled and optimized by Vite
2. Backend code bundled with ESBuild for Node.js target
3. Database schema pushed using Drizzle Kit
4. Environment variables for database connection and session secrets
5. Production server serves both API and static files

The application follows a monorepo structure with clear separation between client, server, and shared code, enabling efficient development and deployment workflows.