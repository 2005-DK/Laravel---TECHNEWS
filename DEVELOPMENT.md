# TECHNEWS Development Guide

Complete guide for developers working on the TECHNEWS project.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Development Environment](#development-environment)
- [Project Structure](#project-structure)
- [Key Concepts](#key-concepts)
- [Common Tasks](#common-tasks)
- [Database](#database)
- [Testing](#testing)
- [Debugging](#debugging)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

---

## Project Overview

TECHNEWS is a Laravel 10 application that serves as a tech news platform with:
- Article management system
- User authentication and authorization
- Comment moderation
- Search functionality
- Admin dashboard
- Role-based access control

### Key Technologies
- **Backend**: Laravel 10, PHP 8.1+
- **Frontend**: Tailwind CSS, Vite, Alpine.js
- **Database**: MySQL/MariaDB
- **Authentication**: Laravel Sanctum
- **Package Manager**: Composer, npm

---

## Development Environment

### Setup on Windows

1. **Install Prerequisites**
   - PHP 8.1+ ([php.net](https://www.php.net/downloads))
   - Composer ([getcomposer.org](https://getcomposer.org/download/))
   - Node.js & npm ([nodejs.org](https://nodejs.org/))
   - MySQL 8.0+ or MariaDB

2. **Clone Repository**
   ```bash
   git clone https://github.com/2005-DK/Laravel---TECHNEWS.git
   cd technews
   ```

3. **Install Dependencies**
   ```bash
   composer install
   npm install
   ```

4. **Configure Environment**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. **Setup Database**
   - Create a MySQL database named `technews`
   - Update `.env` with credentials
   - Run: `php artisan migrate`
   - Optionally seed: `php artisan db:seed`

6. **Build Assets**
   ```bash
   npm run build
   ```

7. **Start Development**
   ```bash
   php artisan serve
   npm run dev
   ```

---

## Project Structure

### `/app` - Application Code

```
app/
├── Console/
│   └── Kernel.php              # Console/Artisan commands
├── Exceptions/
│   └── Handler.php             # Exception handling
├── Http/
│   ├── Controllers/            # Request handlers
│   │   ├── Article/            # Article CRUD operations
│   │   ├── Category/           # Category management
│   │   ├── Auth/               # Authentication controllers
│   │   └── ...
│   ├── Middleware/             # Route middleware
│   │   ├── Admin.php           # Admin role check
│   │   ├── CheckRole.php       # Role verification
│   │   └── ...
│   ├── Requests/               # Form request validation
│   │   └── article/
│   │       ├── StoreArticleRequest.php
│   │       └── UpdateArticleRequest.php
│   ├── Kernel.php              # HTTP middleware configuration
│   └── Controllers.php          # Base controller
├── Models/                      # Eloquent models
│   ├── Article.php
│   ├── Category.php
│   ├── Comment.php
│   ├── Contact.php
│   ├── Settings.php
│   ├── SocialMedia.php
│   └── User.php
├── Providers/                   # Service providers
│   ├── AppServiceProvider.php   # Application services
│   ├── AuthServiceProvider.php  # Authorization policies
│   └── ...
└── View/
    └── Components/             # Blade components
```

### `/routes` - Route Definitions

```
routes/
├── web.php                      # Web application routes
├── api.php                      # API routes (Sanctum)
├── auth.php                     # Authentication routes
├── channels.php                 # Broadcasting channels
└── console.php                  # Console commands
```

### `/database` - Database

```
database/
├── migrations/                  # Schema changes
├── seeders/                     # Test data
│   └── DatabaseSeeder.php       # Main seeder
└── factories/                   # Model factories
    └── UserFactory.php
```

### `/resources` - Views & Assets

```
resources/
├── views/                       # Blade templates
│   ├── front/                   # Public-facing pages
│   ├── back/                    # Admin/dashboard pages
│   ├── layouts/                 # Layout templates
│   └── components/              # Reusable Blade components
├── css/                         # Stylesheets
│   └── app.css                  # Main CSS (Tailwind config)
└── js/                          # JavaScript
    ├── app.js                   # Main JS entry point
    └── bootstrap.js             # Bootstrap script
```

### `/config` - Configuration Files

Key configuration files:
- `app.php` - Application settings
- `auth.php` - Authentication configuration
- `database.php` - Database connections
- `filesystems.php` - Storage configuration
- `mail.php` - Email settings

### `/tests` - Automated Tests

```
tests/
├── Unit/                        # Unit tests
├── Feature/                     # Feature/integration tests
├── TestCase.php                 # Base test class
└── CreatesApplication.php       # Test setup
```

---

## Key Concepts

### Models & Relationships

#### Article Model
```php
// Article has many relationships
- belongs to Category
- belongs to User (author)
- has many Comments
- has many Tags (through Tagging package)
```

#### User Model
```php
// User has two types of roles
- admin: Full system access
- author: Can create/edit articles
- Regular user: Can read and comment
```

#### Middleware

Custom middleware for protection:
- `Admin`: Checks if user is admin
- `CheckRole`: Checks if user has specific role

### Authentication

Uses **Laravel Breeze** with Sanctum for API:
- Email/password authentication
- Email verification
- Password reset
- API token support

### Database Relations

```
Users (1) ---< (Many) Articles
Users (1) ---< (Many) Comments
Categories (1) ---< (Many) Articles
Articles (1) ---< (Many) Comments
```

---

## Common Tasks

### Create a New Model

```bash
php artisan make:model ModelName -m
```

This creates:
- Model in `app/Models/`
- Migration in `database/migrations/`

### Create a Controller

```bash
php artisan make:controller NameController --resource
```

Creates a resource controller with CRUD methods.

### Create a Migration

```bash
php artisan make:migration create_table_name
```

Edit in `database/migrations/` and run:
```bash
php artisan migrate
```

### Create a Seeder

```bash
php artisan make:seeder TableNameSeeder
```

### Add Validation Request

```bash
php artisan make:request article/StoreArticleRequest
```

### Create Middleware

```bash
php artisan make:middleware MiddlewareName
```

Register in `app/Http/Kernel.php`.

---

## Database

### Migrations

Migrations are version control for your database schema.

**Creating a migration:**
```bash
php artisan make:migration add_image_to_articles
```

**Running migrations:**
```bash
php artisan migrate              # Run new migrations
php artisan migrate:rollback     # Undo last batch
php artisan migrate:refresh      # Reset database
php artisan migrate:fresh        # Clean migration
```

### Seeders

Add test data to database:

```bash
php artisan db:seed                        # Run all seeders
php artisan db:seed --class=UserSeeder    # Run specific seeder
php artisan migrate:fresh --seed          # Migrate and seed
```

### Factories

Generate fake data for testing:

```php
$articles = Article::factory(10)->create();
```

---

## Testing

### Run Tests

```bash
php artisan test                          # Run all tests
php artisan test tests/Feature            # Run feature tests
php artisan test --filter=test_name       # Run specific test
php artisan test --coverage               # Generate coverage report
```

### Writing Tests

```php
<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Article;

class ArticleTest extends TestCase
{
    public function test_article_list_is_visible()
    {
        $response = $this->get('/');
        $response->assertStatus(200);
    }

    public function test_article_can_be_created()
    {
        $data = [
            'title' => 'Test Article',
            'description' => 'Test description',
            'category_id' => 1,
        ];

        $response = $this->post('/article', $data);
        $this->assertDatabaseHas('articles', $data);
    }
}
```

### Test Database

Tests use the `.env.testing` configuration with SQLite in-memory database for speed.

---

## Debugging

### Laravel Tinker

Interactive REPL for testing code:

```bash
php artisan tinker
```

Examples:
```php
>>> $user = App\Models\User::first();
>>> $user->articles()->count();
>>> App\Models\Article::where('isActive', true)->get();
```

### DD (Dump and Die)

```php
dd($variable);  // Dump variable and stop execution
dump($variable); // Dump but continue
```

### Laravel Debugbar

Install for development:
```bash
composer require barryvdh/laravel-debugbar --dev
```

### Log Messages

```php
Log::info('Message', ['context' => $data]);
Log::error('Error message');
Log::debug('Debug info');

// Check logs in storage/logs/
```

### Browser Testing with Dusk (Coming)

For future implementation of browser testing.

---

## Best Practices

### Code Style

- Follow **PSR-12** standard
- Use **Laravel Pint** for formatting:
  ```bash
  ./vendor/bin/pint
  ```

### Naming Conventions

| Item | Convention | Example |
|------|-----------|---------|
| Models | Singular, PascalCase | `Article`, `User` |
| Controllers | PascalCase + Controller | `ArticleController` |
| Methods | camelCase | `storeArticle()` |
| Variables | camelCase | `$articleTitle` |
| Constants | UPPER_SNAKE_CASE | `MAX_ARTICLES` |
| Database tables | Plural, snake_case | `articles`, `user_roles` |
| Database columns | snake_case | `created_at`, `author_id` |

### Eloquent Best Practices

```php
// ✅ DO: Use eager loading
$articles = Article::with('author', 'category')->get();

// ❌ DON'T: N+1 query problem
$articles = Article::all();
foreach ($articles as $article) {
    echo $article->author->name; // Extra query per iteration
}

// ✅ DO: Use appropriate methods
Article::where('isActive', true)->first();
Article::find($id);

// ❌ DON'T: Fetch all then filter
$articles = Article::all()->where('isActive', true);
```

### Error Handling

```php
try {
    // Code that might fail
} catch (\Exception $e) {
    Log::error('Error description', ['error' => $e->getMessage()]);
    return response()->json(['error' => 'Something went wrong'], 500);
}
```

### Validation

```php
// In controller
$validated = $request->validate([
    'title' => 'required|string|max:255',
    'email' => 'required|email|unique:users',
    'age' => 'numeric|min:18',
]);

// Or use Form Request
public function store(StoreArticleRequest $request) {
    // Data is already validated
    Article::create($request->validated());
}
```

---

## Troubleshooting

### Common Issues

#### 1. Migration Fails
```bash
# Check migration status
php artisan migrate:status

# Rollback and try again
php artisan migrate:rollback
php artisan migrate
```

#### 2. Composer Issues
```bash
# Clear cache
composer clear-cache

# Update dependencies
composer update

# Reinstall
rm -rf vendor composer.lock
composer install
```

#### 3. Node Modules Issues
```bash
# Clear npm cache
npm cache clean --force

# Reinstall
rm -rf node_modules package-lock.json
npm install

# Rebuild assets
npm run build
```

#### 4. Storage Permissions
```bash
# Fix storage permissions (Linux/Mac)
chmod -R 755 storage
chmod -R 755 bootstrap/cache
```

#### 5. Key Generation Missing
```bash
php artisan key:generate
```

#### 6. Clear Application Cache
```bash
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear
```

### Getting Help

1. Check Laravel documentation: [laravel.com/docs](https://laravel.com/docs)
2. Review existing GitHub issues
3. Check the CHANGELOG.md
4. Create a detailed GitHub issue with:
   - Error message
   - Steps to reproduce
   - Your environment (PHP, Laravel versions)
   - Screenshots if applicable

---

## Performance Optimization

### Caching

```php
// Cache query results
$articles = Cache::remember('featured_articles', 3600, function () {
    return Article::featured()->get();
});

// Clear specific cache
Cache::forget('featured_articles');
```

### Indexing

Add indexes to frequently queried columns in migrations:
```php
$table->index('slug');
$table->index('category_id');
$table->index('author_id');
```

### Pagination

Always use pagination for large datasets:
```php
$articles = Article::paginate(15);
```

---

## Resources

- **Laravel Documentation**: https://laravel.com/docs
- **PHP Documentation**: https://www.php.net/docs.php
- **Tailwind CSS**: https://tailwindcss.com/docs
- **MySQL Documentation**: https://dev.mysql.com/doc/
- **Git Documentation**: https://git-scm.com/doc

---

**Happy Coding! 🚀**
