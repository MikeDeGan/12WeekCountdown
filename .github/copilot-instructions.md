# Copilot Instructions for 12 Week Countdown

## Project Overview

This is a simple, static web application that displays a 12-week countdown timer. It shows the current week, weeks remaining, and days remaining for a specific 84-day (12-week) period.

## Technologies Used

- **HTML5**: Semantic markup for the countdown display
- **Vanilla JavaScript**: Date calculations and DOM manipulation
- **CSS3**: Styling with custom properties and responsive design
- No frameworks or build tools are used - this is a pure static website

## Project Structure

```
/
├── index.html    # Main HTML file with countdown display structure
├── script.js     # JavaScript logic for date calculations and updates
├── style.css     # Styling with responsive design
└── .vscode/      # VS Code configuration
    └── launch.json
```

## Code Style Guidelines

### JavaScript
- Use ES6+ features where appropriate (const, let, arrow functions)
- Wrap code in IIFEs (Immediately Invoked Function Expressions) to avoid global scope pollution
- Use meaningful variable names that describe their purpose
- Format dates consistently in MM/DD/YYYY format
- Use `const` for constants and values that won't be reassigned
- Use template literals for string concatenation when appropriate

### HTML
- Use semantic HTML5 elements
- Include proper meta tags for viewport and charset
- Keep the structure simple and accessible
- Use meaningful IDs for elements that will be accessed via JavaScript

### CSS
- Use CSS custom properties (variables) for reusable values
- Follow mobile-first responsive design principles
- Use relative units (rem, em) for scalability
- Maintain consistent spacing and layout
- Group related styles together with comments

## Key Features

1. **Date Calculation**: The application calculates a 12-week (84-day) period from a start date
2. **Dynamic Updates**: Uses `setInterval` to update countdown values
3. **Responsive Design**: Adapts to different screen sizes using media queries
4. **Clean UI**: Simple, centered layout with clear typography

## When Making Changes

### Adding New Features
- Keep the simplicity of the application - no need for frameworks
- Ensure any new features work on mobile devices
- Test date calculations thoroughly (edge cases, timezone considerations)
- Maintain the clean, centered aesthetic

### Modifying Dates
- The period start date is defined in `script.js` as `periodStart`
- The period is always 84 days (12 weeks)
- End date is automatically calculated from the start date

### Styling Changes
- Use the existing CSS custom properties in `:root` for consistency
- Ensure responsive design is maintained across breakpoints
- Test on different screen sizes (the breakpoint is 768px)

### JavaScript Changes
- Maintain the IIFE pattern to avoid global scope pollution
- Keep time constants (second, minute, hour, day) at the top for clarity
- Ensure DOM elements are accessed by their IDs consistently
- Test countdown logic with different dates and scenarios

## Testing Considerations

- Manually test the countdown display in a browser
- Verify responsive design on mobile and desktop viewports
- Check date calculations for accuracy
- Ensure the countdown updates properly
- Test with different start dates to ensure flexibility

## Deployment

This is a static website that can be hosted on any web server or static hosting service (GitHub Pages, Netlify, Vercel, etc.). No build process is required.
