# Frontend for the GCP Resume Challenge

> **Status:** completed project (2023–2024). The live site (cloudcv.se) and the GCP project have been decommissioned; the code is kept as a reference.
> Backend, Terraform and Cloud Function: [backend_CVcloud](https://github.com/mvulcu/backend_CVcloud)

This repository is part of the GCP Resume Challenge, showcasing my serverless, dynamic resume hosted on Google Cloud Platform. It details the frontend aspect of the project, including HTML, CSS, JavaScript, and CI/CD pipeline configuration.

## What I Did

- **Developed a Static Web Resume**: Created `index.html` and `style.css` for the website's structure and style.
- **Dynamic Visitor Counter**: Implemented with `main.js` to display real-time visitor count.
- **CI/CD Integration**: Configured continuous integration and deployment using `frontend.yml`.

## How I Did It

### HTML & CSS

- Structured the resume content using HTML.
- Applied modern CSS styling for a responsive layout.

### JavaScript

- Implemented the visitor counter logic in `main.js`, interacting with the backend for live data.

### CI/CD with GitHub Actions

- `frontend.yml` deploys the site to a Google Cloud Storage bucket and invalidates the Cloud CDN cache.
- Since the project was decommissioned, the workflow runs only when started manually.

## Why I Did What I Did

### Technology Choices

- Chose HTML/CSS/JavaScript for their simplicity and effectiveness in creating static web pages.
- Selected serverless architecture for backend interaction to demonstrate cloud skills and ensure scalability.

### Implementation Strategy

- Aimed for a minimalist and efficient design for enhanced performance and user experience.
- Integrated real-time data to showcase dynamic web development capabilities.

## Conclusion

This project highlights my skills in web development and understanding of cloud technologies, particularly within the GCP ecosystem. The integration of CI/CD practices demonstrates my commitment to modern development methodologies.
