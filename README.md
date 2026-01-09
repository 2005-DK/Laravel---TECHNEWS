# TECHNEWS - Modern Tech News Platform

<p align="center">
  <img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="300" alt="Laravel Logo">
</p>

<p align="center">
A full-featured tech news platform built with <strong>Laravel 10</strong> and <strong>Tailwind CSS</strong>. Showcasing modern web development practices with role-based access control, article management, user interactions, and more.
</p>

<p align="center">
<img src="https://img.shields.io/badge/Laravel-10.10%2B-red?logo=laravel" alt="Laravel">
<img src="https://img.shields.io/badge/PHP-8.1%2B-blue?logo=php" alt="PHP">
<img src="https://img.shields.io/badge/License-MIT-green" alt="MIT License">
</p>

[![CI](https://github.com/2005-DK/Laravel---TECHNEWS/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/2005-DK/Laravel---TECHNEWS/actions/workflows/ci.yml)

---

## Features

- **User Authentication & Authorization**
  - Role-based access control (Admin, Author, User)
  - Email verification
  - Password reset functionality
  - Profile management

- **Article Management**
  - Full CRUD operations for articles
  - Article categorization with slug URLs
  - Rich article descriptions
  - Image uploads for articles
  - Article status management (Active/Inactive)
  - Share controls

- **Comments System**
  - Nested comments on articles
  - Comment moderation (Lock/Unlock)
  - User-friendly comment display

- **Categories**
  - Organize articles by categories
  - Category-based filtering
  - URL-friendly slugs

- **Advanced Search**
  - Search articles by title and content
  - Full-text search capabilities

- **Admin Dashboard**
  - Manage articles, categories, users
  - Moderate comments
  - Track contact messages
  - System settings management
  - Social media link management

- **Contact System**
  - Contact form for visitors
  - Message management in admin panel

- **Social Media Integration**
  - Manage social media links
  - Shareable content

---

## Technology Stack

### Backend
- **Laravel 10** - Modern PHP framework
- **MySQL** - Database
- **Laravel Breeze** - Lightweight authentication scaffolding
- **Sanctum** - API authentication

### Frontend
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Next-generation frontend tooling
- **Alpine.js** - Lightweight JavaScript framework (via Breeze)

### Additional Libraries
- **Spatie Laravel Sluggable** - URL-friendly slug generation
- **Laravel Tagging** - Article tagging system
- **Guzzle HTTP** - HTTP client
- **Laravel Tinker** - Interactive REPL

### Development
- **PHPUnit** - Testing framework
- **Laravel Pint** - Code style formatter
- **Faker** - Generate fake data for testing
- **Mockery** - Mock testing library

---

## Installation & Setup

### Prerequisites
- PHP 8.1 or higher
- Composer
- Node.js & npm
- MySQL/MariaDB

### Step-by-step Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/2005-DK/Laravel---TECHNEWS.git
   cd technews
   ```

2. **Install PHP Dependencies**
   ```bash
   composer install
   ```

3. **Install Node Dependencies**
   ```bash
   npm install
   ```

4. **Environment Configuration**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. **Configure Database**
   Update `.env` with your database credentials:
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=technews
   DB_USERNAME=root
   DB_PASSWORD=
   ```

6. **Run Migrations**
   ```bash
   php artisan migrate
   ```

7. **Seed the Database (Optional)**
   ```bash
   php artisan db:seed
   ```

8. **Build Frontend Assets**
   ```bash
   npm run build
   ```

9. **Start Development Server**
   ```bash
   php artisan serve
   npm run dev
   ```

Visit `http://localhost:8000` in your browser.

---

## Project Structure

```
technews/
├── app/
│   ├── Http/
│   │   ├── Controllers/        # Application controllers
│   │   │   ├── Article/
│   │   │   ├── Category/
│   │   │   ├── Auth/
│   │   │   └── ...
│   │   ├── Middleware/         # Custom middleware
│   │   ├── Requests/           # Form request validation
│   │   └── Kernel.php
│   ├── Models/                 # Eloquent models
│   │   ├── Article.php
│   │   ├── Category.php
│   │   ├── Comment.php
│   │   ├── User.php
│   │   └── ...
│   ├── Providers/              # Service providers
│   └── View/Components/        # Livewire/Blade components
├── database/
│   ├── migrations/             # Database migrations
│   ├── seeders/                # Database seeders
│   └── factories/              # Model factories
├── resources/
│   ├── views/                  # Blade templates
│   ├── css/                    # CSS files
│   └── js/                     # JavaScript files
├── routes/
│   ├── web.php                 # Web routes
│   ├── api.php                 # API routes
│   ├── auth.php                # Authentication routes
│   └── channels.php            # Broadcasting channels
├── public/                      # Public assets
├── config/                      # Configuration files
├── storage/                     # Logs and cache
├── tests/                       # PHPUnit tests
└── vendor/                      # Composer dependencies
```

---

## Usage

### Admin Panel
Access the admin dashboard at `/dashboard` (requires admin role)

### Article Management
- **View Articles**: Browse all published articles
- **Create Articles**: Only admins and authors can create
- **Edit/Delete**: Manage your own articles
- **Categories**: Organize articles by category

### User Interactions
- **Comments**: Users can comment on articles
- **Search**: Find articles using the search feature
- **Contact**: Send messages via the contact form
- **Profile**: Edit user profile and preferences

---

## API Endpoints

The application includes RESTful API endpoints secured with Sanctum authentication.

### Main Endpoints
- `GET /` - Home page with featured articles
- `GET /detail/{slug}` - View article details
- `GET /categorie/{slug}` - View articles by category
- `POST /recherches` - Search articles
- `POST /comment/{id}` - Add comment to article
- `GET /dashboard` - Admin dashboard
- `GET /contacts` - Contact form page

For detailed API documentation, see [API.md](API.md)

---

## Testing

Run the test suite:
```bash
php artisan test
```

Run specific test file:
```bash
php artisan test tests/Feature/ArticleTest.php
```

---

## Code Quality

Format code using Laravel Pint:
```bash
./vendor/bin/pint
```

---

## Deployment

### Production Checklist
- [ ] Set `APP_DEBUG=false` in `.env`
- [ ] Set `APP_ENV=production`
- [ ] Run migrations: `php artisan migrate --force`
- [ ] Build assets: `npm run build`
- [ ] Clear caches: `php artisan cache:clear`
- [ ] Setup proper file permissions for `storage/` and `bootstrap/cache/`

### Suggested Hosting Platforms
- Laravel Forge
- DigitalOcean App Platform
- AWS Lightsail
- Heroku

---

## Key Features Implementation

### Authentication & Authorization
- Custom role-based middleware (`checkRole`, `admin`)
- Protected routes for admin and author-only features
- Email verification before access

### Database Relations
- Articles belong to Categories and Authors
- Comments belong to Articles
- Users have multiple articles and comments

### Content Management
- Sluggable articles with SEO-friendly URLs
- Image uploads with Storage facade
- Rich text content support

### User Experience
- Search functionality across articles
- Category filtering
- Comment moderation system
- Contact form for inquiries

---

## Contributing

We welcome contributions! For detailed guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md)

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is open-sourced software licensed under the [MIT license](LICENSE).

---

## Author

Built as a portfolio project to demonstrate modern Laravel development practices.

---

## Support

For issues, questions, or suggestions, please open a GitHub issue.

---

**Built with ❤️ using Laravel 10**
