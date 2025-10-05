# Ultra-Low-Latency Market Data Parser on FPGA - Codebase Summary

## Project Overview

This project is a **Next.js 15-based web monitoring dashboard** for an Ultra-Low-Latency Market Data Parser implemented on FPGA hardware. The application provides real-time visualization and monitoring of FPGA-based financial market data processing with nanosecond-precision latency tracking.

### Key Characteristics
- **Technology Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Purpose**: Real-time monitoring of FPGA HFT (High-Frequency Trading) market data parser
- **Target Latency**: Sub-100ns processing time
- **Architecture**: Server-side rendered (SSR) dashboard with client-side interactivity

## Project Architecture

### Directory Structure

```
.
├── app/                          # Next.js App Router pages
│   ├── analytics/               # Performance analytics page
│   ├── latency/                 # Latency monitoring page
│   ├── parser/                  # Parser status and configuration page
│   ├── settings/                # System settings page
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Main dashboard page
│
├── components/                   # React components
│   ├── ui/                      # Reusable UI components (shadcn/ui)
│   │   ├── card.tsx
│   │   ├── button.tsx
│   │   ├── chart.tsx
│   │   └── ... (40+ UI primitives)
│   │
│   ├── error-analysis.tsx       # Error tracking component
│   ├── historical-metrics.tsx   # Historical performance data
│   ├── latency-chart.tsx        # Latency visualization
│   ├── latency-distribution.tsx # Latency distribution chart
│   ├── latency-heatmap.tsx      # Latency heatmap visualization
│   ├── latency-percentiles.tsx  # Latency percentile metrics
│   ├── latency-timeline.tsx     # Timeline of latency events
│   ├── message-types.tsx        # ITCH protocol message breakdown
│   ├── metric-card.tsx          # Reusable metric display card
│   ├── navigation.tsx           # Main navigation component
│   ├── packet-stats.tsx         # Packet processing statistics
│   ├── parser-config.tsx        # FPGA parser configuration UI
│   ├── parser-pipeline.tsx      # Parser pipeline visualization
│   ├── performance-trends.tsx   # Performance trend charts
│   ├── resource-utilization.tsx # FPGA resource monitoring
│   ├── system-status.tsx        # Component health status
│   ├── theme-provider.tsx       # Theme management
│   ├── throughput-chart.tsx     # Throughput visualization
│   └── timing-closure.tsx       # FPGA timing analysis
│
├── hooks/                       # Custom React hooks
│   ├── use-mobile.ts
│   └── use-toast.ts
│
├── lib/                         # Utility libraries
│   └── utils.ts                 # Helper functions (cn, etc.)
│
├── public/                      # Static assets
├── styles/                      # Additional stylesheets
│
└── Configuration Files
    ├── package.json             # Dependencies and scripts
    ├── tsconfig.json            # TypeScript configuration
    ├── next.config.mjs          # Next.js configuration
    ├── postcss.config.mjs       # PostCSS configuration
    ├── components.json          # shadcn/ui configuration
    └── pnpm-lock.yaml           # Lock file for dependencies
```

## Core Features

### 1. System Overview Dashboard (`app/page.tsx`)
The main landing page provides a high-level view of system performance:
- **Real-time Metrics**: Average latency (87ns), throughput (2.4M packets/sec), parse rate (99.97%)
- **Clock Frequency**: 312.5 MHz with timing closure
- **Visual Components**:
  - Metric cards with trend indicators
  - Latency chart
  - Throughput chart
  - Packet statistics
  - System status monitor

### 2. Latency Monitoring (`app/latency/page.tsx`)
Dedicated page for nanosecond-precision latency analysis:
- **Percentile Metrics**:
  - P50: 84ns (median)
  - P99: 96ns
  - P99.9: 103ns
- **Visualizations**:
  - Latency distribution histogram
  - Latency heatmap
  - Percentile charts
  - Timeline view
- **Time Range Selection**: 5min, 15min, 1hr, 24hr

### 3. Parser Status (`app/parser/page.tsx`)
FPGA hardware parser configuration and monitoring:
- **Hardware Metrics**:
  - FPGA Utilization: 67%
  - Pipeline Depth: 3 stages
  - Clock frequency monitoring
- **Pipeline Stages**:
  1. **Stage 1: Header Extraction** (28ns latency, 23% utilization)
     - Message type, length, timestamp extraction
  2. **Stage 2: Field Parsing** (34ns latency, 41% utilization)
     - Symbol, price, volume extraction
  3. **Stage 3: Validation** (25ns latency, 19% utilization)
     - Output formatting and checks
  - Total Pipeline Latency: 87ns
- **Message Types**: ITCH protocol distribution breakdown
- **Timing Closure**: Static timing analysis @ 312.5 MHz
- **Configuration Options**:
  - AXI Stream Width: 512 bits
  - Parser Lanes: 4
  - Buffer Depth: 1024 packets
  - PTP Clock Source: External 1588
  - Validation Mode: Strict
  - Output Format: Binary

### 4. Analytics (`app/analytics/page.tsx`)
Historical trends and system insights:
- **Key Metrics**:
  - Average uptime tracking
  - Peak throughput measurements
- **Visualizations**:
  - Performance trends over time
  - Error analysis
  - Resource utilization charts
  - Historical metrics table (daily summary)
- **Time Ranges**: 24hr, 7d, 30d, 90d

### 5. Settings (`app/settings/page.tsx`)
System configuration interface:
- **Performance Settings**:
  - Target latency configuration (100ns)
  - Parser lanes (4)
- **Alerts & Notifications**:
  - Latency alert threshold (120ns)
  - Error rate alert (0.1%)
- **Data Retention**:
  - Metrics retention period (7d, 30d, 90d, 1yr)
- **Security**:
  - API authentication configuration

## Key Components

### Navigation (`components/navigation.tsx`)
Client-side navigation with route highlighting:
- **Routes**:
  - Overview (/)
  - Latency (/latency)
  - Parser Status (/parser)
  - Analytics (/analytics)
  - Settings (/settings)
- Uses Next.js `usePathname` for active route detection
- Icons from Lucide React

### Metric Card (`components/metric-card.tsx`)
Reusable component for displaying key performance metrics:
- Props: `title`, `value`, `change`, `trend`, `description`
- Trend indicators: up (green), down (blue), stable (gray)
- Monospace font for numeric values

### Parser Pipeline (`components/parser-pipeline.tsx`)
Visualizes the 3-stage cut-through parser:
- Displays each stage with latency and utilization
- Progress bars for utilization visualization
- Arrow indicators between stages
- Total pipeline latency summary

### Message Types (`components/message-types.tsx`)
ITCH protocol message breakdown:
- **Message Types**:
  - Add Order (A): 42.3%
  - Order Executed (E): 26.1%
  - Order Cancel (X): 20.6%
  - Trade (P): 9.5%
  - System Event (S): 1.5%
- Visual percentage bars

### System Status (`components/system-status.tsx`)
Component health monitoring:
- **Components Tracked**:
  - FPGA Core (99.99% uptime)
  - AXI Stream (100% uptime)
  - PTP Clock (100% uptime)
  - Parser Pipeline (99.97% uptime)
  - Timestamp Counter (100% uptime)
  - Output Buffer (98.2% uptime - degraded)
- Status indicators: operational (green checkmark), degraded (yellow warning)

### Packet Stats (`components/packet-stats.tsx`)
Message type distribution:
- ITCH Messages: 76.8%
- FIX Messages: 17.6%
- Validation Errors: 0.05%
- Dropped Packets: 0.004%

### Timing Closure (`components/timing-closure.tsx`)
Static timing analysis at 312.5 MHz:
- **Critical Paths**:
  - AXI Stream Input → Stage 1: +2.34ns slack
  - Stage 1 → Stage 2: +1.87ns slack
  - Stage 2 → Stage 3: +3.12ns slack
  - Stage 3 → Output Buffer: +1.45ns slack
  - PTP Timestamp Counter: +4.23ns slack
  - Validation Logic: +0.89ns slack (warning)
- All paths meet timing requirements

### Historical Metrics (`components/historical-metrics.tsx`)
Daily performance summary table with:
- Date
- Average latency
- Throughput
- Uptime percentage
- Error count

### Resource Utilization (`components/resource-utilization.tsx`)
Charts showing:
- FPGA utilization over time
- Memory usage
- Power consumption
- Uses Recharts for visualization

## Technical Stack

### Core Dependencies
- **Next.js**: 15.2.4 (React framework with App Router)
- **React**: 19 (UI library)
- **TypeScript**: 5 (Type safety)
- **Tailwind CSS**: 4.1.9 (Utility-first CSS)

### UI Components
- **shadcn/ui**: Collection of reusable UI components
- **Radix UI**: Primitives for accessible components
- **Lucide React**: Icon library
- **Recharts**: Charting library for data visualization

### Fonts
- **Geist Sans**: Primary font family
- **Geist Mono**: Monospace font for metrics and code

### Additional Tools
- **Vercel Analytics**: Usage tracking
- **next-themes**: Theme management
- **class-variance-authority**: Component variant management
- **clsx** & **tailwind-merge**: Utility for conditional class names
- **zod**: Schema validation
- **react-hook-form**: Form handling

## Design System

### Color Scheme
The application uses a sophisticated color system:
- **Primary**: Used for main actions and highlights
- **Chart Colors**: chart-1 through chart-5 for data visualization
- **Success**: Green for positive trends and operational status
- **Warning**: Yellow/orange for degraded states
- **Destructive**: Red for errors
- **Muted**: Gray for secondary information

### Typography
- **Sans-serif**: Geist Sans for body text
- **Monospace**: Geist Mono for metrics, codes, and technical values
- Consistent font sizing with Tailwind's type scale

### Layout
- Responsive grid layouts (md:grid-cols-2, lg:grid-cols-4)
- Maximum width containers (max-w-7xl, max-w-4xl)
- Consistent spacing (space-y-6, gap-4, gap-6)
- Card-based component architecture

## FPGA System Specifications

### Hardware Configuration
- **FPGA Utilization**: 67%
- **Clock Frequency**: 312.5 MHz
- **AXI Stream Width**: 512 bits
- **Parser Lanes**: 4 parallel lanes
- **Buffer Depth**: 1024 packets
- **PTP Clock**: External IEEE 1588 synchronization

### Performance Targets
- **Target Latency**: Sub-100ns (currently 87ns average)
- **Throughput**: 2.4M packets/second (peak: 2.8M)
- **Parse Rate**: 99.97% success rate
- **Uptime**: 99.98% average

### Pipeline Architecture
Three-stage cut-through parser:
1. Header extraction
2. Field parsing
3. Validation and output

### Protocol Support
- **ITCH Protocol**: Primary message format
- **FIX Protocol**: Secondary message format
- Message types: Add Order, Order Executed, Order Cancel, Trade, System Event

## Development Workflow

### Available Scripts
```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Linting
npm run lint
```

### Package Manager
The project uses **pnpm** as indicated by `pnpm-lock.yaml`

### Build Configuration
- **Next.js**: ES modules (`.mjs` extensions)
- **TypeScript**: Strict mode enabled
- **Module Resolution**: Bundler strategy
- **Target**: ES6

## Component Patterns

### Server Components (Default)
Most pages and components are React Server Components:
- `app/page.tsx`
- `app/analytics/page.tsx`
- `app/latency/page.tsx`
- `app/parser/page.tsx`

### Client Components
Components using hooks or interactivity marked with `"use client"`:
- `components/navigation.tsx`
- `components/parser-config.tsx`
- `components/resource-utilization.tsx`
- Charts and interactive visualizations

### Component Composition
- Modular card-based components
- Reusable UI primitives from shadcn/ui
- Props-driven configuration
- TypeScript interfaces for type safety

## Data Flow

### Mock Data
Currently, the application uses static/mock data defined in components:
- Latency metrics
- Throughput data
- System status
- Historical metrics
- Message type distributions

### Future Integration Points
The architecture is ready for:
- WebSocket connections for real-time data
- REST API integration
- Server-side data fetching with Next.js
- Database integration for historical data

## Monitoring Capabilities

### Real-time Metrics
- Nanosecond-precision latency tracking
- Packet-level throughput monitoring
- Parse success rate
- Clock frequency stability

### Historical Analysis
- Daily performance summaries
- Trend analysis over configurable time periods
- Error rate tracking
- Resource utilization trends

### Alert System (Configured)
- Latency threshold alerts
- Error rate monitoring
- Component health checks
- Uptime tracking

## UI/UX Features

### Responsive Design
- Mobile-first approach
- Breakpoint-based layouts (md, lg)
- Flexible grid systems

### Dark Mode Support
- Theme provider configured
- CSS variable-based theming
- Consistent color system

### Accessibility
- Radix UI primitives (WAI-ARIA compliant)
- Semantic HTML structure
- Keyboard navigation support

### Data Visualization
- Multiple chart types (line, area, bar, heatmap)
- Interactive tooltips
- Color-coded metrics
- Trend indicators

## Key Files Reference

### Configuration
- `next.config.mjs`: Next.js build configuration
- `tsconfig.json`: TypeScript compiler options
- `components.json`: shadcn/ui component configuration
- `postcss.config.mjs`: PostCSS and Tailwind configuration

### Core Application
- `app/layout.tsx`: Root layout with navigation and analytics
- `app/page.tsx`: Main dashboard page
- `app/globals.css`: Global styles and CSS variables

### Utility
- `lib/utils.ts`: Helper functions (cn for className merging)
- `hooks/use-mobile.ts`: Responsive breakpoint detection
- `hooks/use-toast.ts`: Toast notification system

## Performance Considerations

### Optimization Strategies
- Server-side rendering for initial page load
- Component-level code splitting
- Static generation where applicable
- Optimized bundle size with tree shaking

### Next.js Features
- App Router for modern routing
- Image optimization (potential)
- Font optimization (Geist fonts)
- Built-in analytics support

## Future Enhancement Opportunities

### Potential Additions
1. **Real-time Data Integration**: WebSocket connection to live FPGA data
2. **Data Persistence**: Database for historical metrics storage
3. **User Authentication**: Secure access control
4. **Alert System**: Push notifications for threshold breaches
5. **Export Functionality**: CSV/PDF reports
6. **Custom Dashboards**: User-configurable layouts
7. **API Endpoints**: RESTful API for external integrations
8. **More Visualizations**: Advanced charting options
9. **Comparison Tools**: Side-by-side metric comparisons
10. **Log Viewer**: Real-time log streaming and search

## Deployment

### Vercel (Recommended)
- Native Next.js support
- Automatic deployments
- Edge network distribution
- Analytics included

### Self-hosted Options
- Node.js server
- Docker containerization
- Kubernetes orchestration
- Traditional hosting platforms

## Contributing Guidelines

### Code Style
- TypeScript strict mode
- ESLint configuration via Next.js
- Consistent component patterns
- Props interfaces for all components

### File Naming
- kebab-case for files
- PascalCase for components
- Descriptive, feature-based names

### Component Structure
```typescript
// Standard component pattern
interface ComponentProps {
  // Props definition
}

export function Component({ props }: ComponentProps) {
  return (
    // JSX
  )
}
```

## License and Credits

This codebase represents a sophisticated monitoring dashboard for FPGA-based high-frequency trading systems, built with modern web technologies and best practices.

---

**Last Updated**: January 2025  
**Framework Version**: Next.js 15.2.4  
**React Version**: 19  
**Node Version**: 22 (recommended)
