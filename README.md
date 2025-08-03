# Magento 2 Luma Child Theme with Popup Feature

## Project Overview

This project demonstrates the creation of a custom child theme in Magento 2 based on the default Luma theme. A custom popup was added to appear on all pages except category pages. The environment was set up locally using Docker and WSL (Ubuntu 24.04) for development.

## Tasks Completed

### 1️⃣ Install Magento 2 Community Edition Locally
- Magento 2 Community Edition version 2.4.7 installed via Docker setup.
- Docker containers used: nginx, php-fpm, mariadb, redis.

### 2️⃣ Push Project to GitHub
- Initialized Git repository.
- Ignored unnecessary files (e.g., `vendor`, `node_modules`, `var`).
- Pushed project to [GitHub repository](https://github.com/FearLess93/Job_Project).

### 3️⃣ Install Magento Sample Data
- Sample data deployed to populate the storefront with categories, products, and banners.
- Command sequence used:
  - `bin/magento sampledata:deploy`
  - `bin/magento setup:upgrade`
  - `bin/magento indexer:reindex`
  - `bin/magento cache:flush`

### 4️⃣ Create and Use a Child Theme Based on Luma
- New theme created under `app/design/frontend/New_Theme/Child_Theme`.
- `theme.xml` and `registration.php` configured.
- Child theme set as the default theme in the admin panel (`Content > Design > Configuration`).

### 5️⃣ Add a Dialog/Popup to Every Page Except Category Pages
- Custom block and template added to child theme.
- Used `default.xml` and `catalog_category_view.xml` to control where the popup displays.
- Created a simple `popup.phtml` template with corresponding `popup.js` to show/hide the dialog.

---

## 🔎 Answer to Experience Questions

### What are the main issues you faced in the previous tasks?
- **Redis connection failures:** Magento was trying to connect to Redis (`tcp://redis:6379`) which was not running. This blocked `setup:upgrade` and `sampledata:deploy` commands.
- **File permission and ownership issues** between Windows and WSL.
- **Theme directory structure mistakes:** The popup file was not placed inside the correct `templates` folder at first.
- **Magento CLI not found:** Because initial commands were run inside WSL without linking to Docker's PHP container.
- **Magento authentication keys missing** when installing sample data (`401 Unauthorized` from repo.magento.com).
- **Homepage empty:** After sample data installation, the home CMS page was not linked correctly.
- **Git ignored folders:** The project structure conflicted with `.gitignore` settings, requiring manual staging of files.

### What are the resources/references you used in the previous tasks?
- Magento official documentation:  
  [https://developer.adobe.com/commerce/](https://developer.adobe.com/commerce/)
- Magento DevDocs for sample data installation:  
  [https://developer.adobe.com/commerce/php/guide/sample-data/](https://developer.adobe.com/commerce/php/guide/sample-data/)
- Stack Overflow and Magento Stack Exchange for troubleshooting Redis, Docker, and theme setup.
- Personal notes from experimentation and advice from ChatGPT.

### Do you have any extra notes?
- Working with Magento 2 inside WSL + Docker is powerful but requires careful handling of volumes and permissions.
- It’s important to disable Redis or properly configure it for local development to avoid frequent CLI errors.
- Always double-check the theme file paths (`app/design/frontend/Vendor/Theme/templates/...`).
- Using `bin/magento setup:upgrade` and `cache:flush` frequently helps resolve many issues during development.

---

## 💻 Technologies Used

- Magento 2.4.7 Community Edition
- PHP 8.2
- Docker + Docker Compose
- Ubuntu 24.04 LTS via WSL2
- Git + GitHub

## 📝 Author

FearLess93  
[GitHub Profile](https://github.com/FearLess93)

