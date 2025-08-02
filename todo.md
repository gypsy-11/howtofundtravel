# TODO List

## Vercel Configuration Cleanup
- [x] **REMOVE examples folder from public access** - Once affiliate links and other links are properly set up and working, remove the examples folder configuration from `vercel.json`
  - Remove the build configuration: `"src": "examples/**", "use": "@vercel/static"`
  - Remove the route: `"src": "/examples/(.*)", "dest": "/examples/$1"`
  - This is currently temporary for development/testing purposes

## Link Setup Tasks
- [ ] Set up affiliate links properly
- [ ] Test all link functionality
- [ ] Ensure all redirects work correctly
- [ ] Verify tracking and analytics are working

## Notes
- The examples folder is currently publicly accessible for testing purposes
- Remember to remove this access once everything is working properly
- This prevents exposing development/testing files in production 