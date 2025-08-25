# 🖼️ Image Lightbox Usage Guide

## Overview
The Image Lightbox component provides a beautiful, professional lightbox experience for viewing images across the site. It includes navigation, keyboard support, touch gestures, and accessibility features.

## Components Available

### 1. `ImageLightbox.astro` (Full Component)
The complete lightbox component with all features.

### 2. `LightboxImage.astro` (Simple Wrapper)
A drop-in replacement for `<img>` tags that automatically enables lightbox functionality.

## Usage Examples

### Basic Usage (Recommended)
```astro
---
import LightboxImage from '../components/LightboxImage.astro';
---

<LightboxImage 
  src="/images/my-image.jpg" 
  alt="Description of the image" 
  width="400" 
  height="300"
  caption="Optional caption text"
/>
```

### Advanced Usage
```astro
---
import ImageLightbox from '../components/ImageLightbox.astro';
---

<ImageLightbox 
  src="/images/my-image.jpg" 
  alt="Description of the image" 
  class="my-custom-class"
  width="400" 
  height="300"
  caption="This image shows..."
/>
```

## Features

### ✅ **Interactive Features**
- **Click to open** - Any image with the component becomes clickable
- **Navigation arrows** - Browse through multiple images
- **Image counter** - Shows current position (e.g., "2 / 5")
- **Close button** - X button in top-right corner
- **Click outside** - Click backdrop to close

### ✅ **Keyboard Support**
- **Escape** - Close lightbox
- **Arrow Left** - Previous image
- **Arrow Right** - Next image
- **Enter/Space** - Open lightbox (when image is focused)

### ✅ **Touch/Mobile Support**
- **Swipe left** - Next image
- **Swipe right** - Previous image
- **Tap outside** - Close lightbox
- **Responsive design** - Optimized for mobile screens

### ✅ **Accessibility**
- **ARIA labels** - Screen reader friendly
- **Focus management** - Proper tab order
- **Keyboard navigation** - Full keyboard support
- **High contrast** - Clear visual indicators

### ✅ **Visual Enhancements**
- **Smooth animations** - Professional transitions
- **Backdrop blur** - Modern visual effect
- **Hover effects** - Visual feedback on images
- **Loading states** - Smooth image loading

## Implementation Examples

### Blog Post Images
```astro
<LightboxImage 
  src="/images/blog-post-screenshot.png" 
  alt="Screenshot showing the website design" 
  caption="The final website design with improved user experience"
/>
```

### Case Study Images
```astro
<LightboxImage 
  src="/images/case-study-results.png" 
  alt="SEO results dashboard" 
  caption="300% increase in organic traffic over 6 months"
/>
```

### Portfolio Images
```astro
<LightboxImage 
  src="/images/portfolio-project.jpg" 
  alt="E-commerce website design" 
  caption="Modern e-commerce platform with AI-powered recommendations"
/>
```

## Styling

The component includes built-in styling that matches your site's design system. Images automatically get:
- **Hover effects** - Subtle scale and opacity changes
- **Focus indicators** - Accessible focus rings
- **Border radius** - Consistent with site design
- **Responsive sizing** - Works on all screen sizes

## Performance

- **Lazy loading** - Images load only when needed
- **Optimized animations** - Hardware-accelerated transitions
- **Memory efficient** - Proper cleanup on close
- **Fast initialization** - Minimal impact on page load

## Browser Support

- ✅ **Modern browsers** - Chrome, Firefox, Safari, Edge
- ✅ **Mobile browsers** - iOS Safari, Chrome Mobile
- ✅ **Progressive enhancement** - Works without JavaScript (falls back to regular images)

## Troubleshooting

### Images not opening in lightbox?
- Ensure the component is properly imported
- Check that the image path is correct
- Verify the component is being used instead of regular `<img>` tags

### Navigation not working?
- Make sure there are multiple images with the lightbox component on the page
- Check browser console for JavaScript errors

### Mobile gestures not working?
- Ensure touch events are enabled
- Test on actual mobile device (not just browser dev tools)

## Future Enhancements

Potential improvements for future versions:
- **Zoom functionality** - Pinch to zoom on mobile
- **Fullscreen mode** - Toggle fullscreen viewing
- **Image preloading** - Preload adjacent images
- **Custom themes** - Different visual styles
- **Gallery mode** - Grid view of all images
