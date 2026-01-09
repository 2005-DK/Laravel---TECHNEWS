# Quick Start Guide - TECHNEWS

Get TECHNEWS up and running in minutes!

---

## 🚀 5-Minute Setup

### Prerequisites
- PHP 8.1+
- Composer
- Node.js & npm
- MySQL/MariaDB

### Installation

```bash
# 1. Clone repository
git clone https://github.com/YOUR-USERNAME/Laravel-TECHNEWS.git
cd technews

# 2. Install PHP dependencies
composer install

# 3. Install Node dependencies
npm install

# 4. Setup environment
cp .env.example .env
php artisan key:generate

# 5. Configure database (edit .env)
# DB_HOST=127.0.0.1
# DB_DATABASE=technews
# DB_USERNAME=root
# DB_PASSWORD=

# 6. Run migrations
php artisan migrate

# 7. Build frontend
npm run build

# 8. Start application
php artisan serve
npm run dev
```

Visit **http://localhost:8000** in your browser!

---

## 🎯 First Steps

### Create Admin User

```bash
php artisan tinker
```

```php
>>> $user = App\Models\User::create([
    'name' => 'Admin User',
    'email' => 'admin@example.com',
    'password' => bcrypt('password'),
    'role' => 'admin'
])
```

### Access Dashboard
- **URL**: http://localhost:8000/dashboard
- **Email**: admin@example.com
- **Password**: password

---

## 📝 Create First Article

1. Login to dashboard
2. Go to Articles section
3. Click "Create Article"
4. Fill in:
   - Title: "First Article"
   - Category: Select one
   - Description: Write your content
   - Upload image (optional)
5. Publish!

---

## 🧪 Run Tests

```bash
php artisan test
```

---

## 📚 Learn More

- **Complete Setup**: See [README.md](README.md)
- **Development**: See [DEVELOPMENT.md](DEVELOPMENT.md)
- **API Docs**: See [API.md](API.md)
- **Contributing**: See [CONTRIBUTING.md](CONTRIBUTING.md)

---

## ⚡ Common Commands

```bash
# Run development server
php artisan serve

# Build frontend assets
npm run build

# Database
php artisan migrate              # Run migrations
php artisan migrate:fresh       # Reset database
php artisan db:seed             # Seed database

# Cache
php artisan cache:clear         # Clear cache
php artisan config:clear        # Clear config

# Format code
./vendor/bin/pint

# Interactive shell
php artisan tinker

# Tests
php artisan test
```

---

## 🆘 Troubleshooting

### Application doesn't start
```bash
php artisan cache:clear
php artisan config:clear
php artisan key:generate
php artisan migrate
```

### Assets not loading
```bash
npm run build
npm run dev
```

### Database errors
```bash
# Create database
mysql -u root
mysql> CREATE DATABASE technews;
mysql> exit

# Run migrations
php artisan migrate
```

---

## 🚢 Deployment

Ready to deploy? See [PORTFOLIO.md](PORTFOLIO.md) for deployment options and guides.

---

**Need help? Check the [DEVELOPMENT.md](DEVELOPMENT.md) guide!**
