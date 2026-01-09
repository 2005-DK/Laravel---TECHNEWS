# Contributing to TECHNEWS

Thank you for your interest in contributing to TECHNEWS! We welcome contributions from the community. Please take a moment to review this document to understand our contribution process.

---

## Code of Conduct

Be respectful and constructive in all interactions. We aim to maintain a welcoming and inclusive environment for everyone.

---

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
- A clear, descriptive title
- A detailed description of the bug
- Steps to reproduce the issue
- Expected and actual behavior
- Screenshots if applicable
- Your environment (PHP version, Laravel version, etc.)

### Suggesting Features

To suggest a new feature:
1. Check if the feature has already been proposed
2. Create an issue with the `enhancement` label
3. Clearly describe the feature and its benefits
4. Provide examples of how it would work

### Submitting Code Changes

#### Prerequisites
- Fork the repository
- Clone your fork locally
- Create a new branch for your changes

#### Steps

1. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Your Changes**
   - Follow the existing code style
   - Keep changes focused and manageable
   - Write clear, descriptive commit messages
   - Add tests for new functionality

3. **Test Your Changes**
   ```bash
   php artisan test
   ./vendor/bin/pint  # Format code
   ```

4. **Commit and Push**
   ```bash
   git add .
   git commit -m "Add your feature description"
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**
   - Use a clear title describing your changes
   - Reference any related issues
   - Describe what your PR does and why
   - Wait for review and feedback

---

## Code Style Guidelines

### PHP Code
- Follow PSR-12 coding standards
- Use meaningful variable and function names
- Add comments for complex logic
- Run Laravel Pint before submitting:
  ```bash
  ./vendor/bin/pint
  ```

### Blade Templates
- Indent properly with 4 spaces
- Use consistent formatting
- Keep template logic minimal
- Use Blade directives appropriately

### JavaScript/CSS
- Use consistent naming conventions
- Follow Tailwind CSS best practices
- Keep CSS classes organized
- Indent with 2 spaces

### Database Migrations
- Use descriptive migration names
- Include both `up()` and `down()` methods
- Add appropriate data types and constraints
- Use timestamps for created/updated at fields

---

## Git Workflow

### Commit Messages
Use clear, descriptive commit messages:
- Start with a verb (Add, Fix, Update, Remove)
- Be specific about what changed
- Keep the first line under 50 characters

Examples:
```
Add article search functionality
Fix comment deletion permissions
Update user profile validation
```

### Branch Naming
Use descriptive branch names:
```
feature/article-tagging
bugfix/comment-deletion
docs/api-documentation
```

---

## Testing

### Writing Tests

All new features should include tests:

```php
<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Article;

class ArticleTest extends TestCase
{
    public function test_article_can_be_created()
    {
        $response = $this->post('/article', [
            'title' => 'Test Article',
            'description' => 'Test Description',
            'category_id' => 1,
        ]);

        $this->assertDatabaseHas('articles', [
            'title' => 'Test Article',
        ]);
    }
}
```

### Running Tests

```bash
# Run all tests
php artisan test

# Run specific test file
php artisan test tests/Feature/ArticleTest.php

# Run tests with coverage
php artisan test --coverage
```

---

## Documentation

- Update documentation if you change functionality
- Document new features in the README or API.md
- Include code examples where helpful
- Keep documentation current and accurate

---

## Review Process

1. A maintainer will review your PR
2. They may request changes or ask questions
3. Make requested changes and push updates
4. Once approved, your PR will be merged

---

## Development Setup

### Prerequisites
- PHP 8.1+
- Composer
- Node.js & npm
- MySQL 8.0+

### Setup Steps

```bash
# Clone the repository
git clone https://github.com/2005-DK/Laravel---TECHNEWS.git
cd technews

# Install dependencies
composer install
npm install

# Setup environment
cp .env.example .env
php artisan key:generate

# Setup database
php artisan migrate
php artisan db:seed

# Start development
php artisan serve
npm run dev
```

---

## Common Issues

### Issue: Migrations fail
- Check database connection in `.env`
- Ensure database exists
- Try: `php artisan migrate:fresh`

### Issue: Assets not loading
- Run: `npm run build`
- Clear cache: `php artisan cache:clear`

### Issue: Tests failing
- Run: `composer install`
- Check `.env.testing` configuration
- Try: `php artisan test --no-cov`

---

## Performance Considerations

When contributing, keep performance in mind:
- Use eager loading (`with()`) to avoid N+1 queries
- Add appropriate indexes for frequently queried columns
- Cache expensive operations
- Use pagination for large datasets
- Optimize images before committing

---

## Security Guidelines

- Never commit `.env` files with real credentials
- Always validate user input
- Use parameterized queries (Laravel's Eloquent does this)
- Keep dependencies updated
- Report security vulnerabilities privately

---

## Questions?

- Check existing issues and PRs
- Review Laravel documentation
- Join our community discussions

---

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Project commits
- GitHub insights

Thank you for helping improve TECHNEWS!
