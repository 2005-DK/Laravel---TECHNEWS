# TECHNEWS API Documentation

Complete API documentation for the TECHNEWS platform.

---

## Table of Contents

- [Authentication](#authentication)
- [Response Format](#response-format)
- [Error Handling](#error-handling)
- [Endpoints](#endpoints)
  - [Articles](#articles)
  - [Categories](#categories)
  - [Comments](#comments)
  - [Users](#users)
  - [Contact](#contact)

---

## Authentication

The API uses **Laravel Sanctum** for token-based authentication.

### Obtaining a Token

```bash
POST /api/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password"
}
```

### Using a Token

Include the token in the `Authorization` header:

```bash
Authorization: Bearer {token}
```

---

## Response Format

All API responses use JSON format with a consistent structure:

### Success Response
```json
{
  "status": "success",
  "data": {
    "id": 1,
    "title": "Article Title",
    ...
  },
  "message": "Resource retrieved successfully"
}
```

### Error Response
```json
{
  "status": "error",
  "message": "Error description",
  "errors": {
    "field": ["error message"]
  }
}
```

### Paginated Response
```json
{
  "status": "success",
  "data": [...],
  "meta": {
    "current_page": 1,
    "total": 100,
    "per_page": 15,
    "last_page": 7
  }
}
```

---

## Error Handling

### Common HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK - Request successful |
| 201 | Created - Resource created |
| 204 | No Content - Request successful, no content |
| 400 | Bad Request - Invalid parameters |
| 401 | Unauthorized - Missing or invalid authentication |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Resource not found |
| 422 | Unprocessable Entity - Validation failed |
| 500 | Server Error - Internal server error |

### Error Response Example

```json
{
  "status": "error",
  "message": "Validation failed",
  "errors": {
    "title": ["Title is required"],
    "category_id": ["Category must be a valid ID"]
  }
}
```

---

## Endpoints

### Articles

#### Get All Articles

```
GET /api/articles
```

**Query Parameters:**
- `page` (integer) - Page number, default: 1
- `per_page` (integer) - Items per page, default: 15
- `category` (integer) - Filter by category ID
- `sort` (string) - Sort by: `latest`, `oldest`, `popular`
- `search` (string) - Search articles by title

**Example:**
```bash
GET /api/articles?page=1&per_page=20&category=1&sort=latest
```

**Response:**
```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "title": "Introduction to Laravel 10",
      "slug": "introduction-to-laravel-10",
      "description": "Article content...",
      "image": "/storage/articles/image.jpg",
      "author_id": 1,
      "category_id": 2,
      "isActive": true,
      "isComment": true,
      "isSharable": true,
      "created_at": "2024-01-09T10:30:00Z",
      "updated_at": "2024-01-09T10:30:00Z"
    }
  ],
  "meta": {
    "current_page": 1,
    "total": 50,
    "per_page": 20,
    "last_page": 3
  }
}
```

#### Get Single Article

```
GET /api/articles/{id}
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "id": 1,
    "title": "Introduction to Laravel 10",
    "slug": "introduction-to-laravel-10",
    "description": "Article content...",
    "image": "/storage/articles/image.jpg",
    "author": {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    },
    "category": {
      "id": 2,
      "name": "Laravel",
      "slug": "laravel"
    },
    "comments": [
      {
        "id": 1,
        "content": "Great article!",
        "author": "User Name",
        "created_at": "2024-01-09T11:00:00Z"
      }
    ],
    "isActive": true,
    "created_at": "2024-01-09T10:30:00Z",
    "updated_at": "2024-01-09T10:30:00Z"
  }
}
```

#### Create Article

```
POST /api/articles
```

**Required Headers:**
- `Authorization: Bearer {token}`
- `Content-Type: application/json`

**Request Body:**
```json
{
  "title": "New Article",
  "description": "Article content here...",
  "category_id": 1,
  "image": "base64_encoded_image_or_url",
  "isActive": true,
  "isComment": true,
  "isSharable": true
}
```

**Response (201 Created):**
```json
{
  "status": "success",
  "data": {
    "id": 51,
    "title": "New Article",
    "slug": "new-article",
    "description": "Article content here...",
    "category_id": 1,
    "author_id": 1,
    "isActive": true,
    "created_at": "2024-01-09T12:00:00Z"
  },
  "message": "Article created successfully"
}
```

#### Update Article

```
PUT /api/articles/{id}
```

**Required Headers:**
- `Authorization: Bearer {token}`

**Request Body:**
```json
{
  "title": "Updated Title",
  "description": "Updated content...",
  "category_id": 1,
  "isActive": true
}
```

**Response (200 OK):**
```json
{
  "status": "success",
  "data": {
    "id": 1,
    "title": "Updated Title",
    ...
  },
  "message": "Article updated successfully"
}
```

#### Delete Article

```
DELETE /api/articles/{id}
```

**Required Headers:**
- `Authorization: Bearer {token}`

**Response (204 No Content):**
Empty body

---

### Categories

#### Get All Categories

```
GET /api/categories
```

**Response:**
```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "name": "PHP",
      "slug": "php",
      "article_count": 15,
      "created_at": "2024-01-01T00:00:00Z"
    }
  ]
}
```

#### Get Category with Articles

```
GET /api/categories/{slug}
```

**Query Parameters:**
- `page` (integer) - Page number
- `per_page` (integer) - Items per page

**Response:**
```json
{
  "status": "success",
  "data": {
    "id": 1,
    "name": "PHP",
    "slug": "php",
    "articles": [...]
  }
}
```

---

### Comments

#### Get Article Comments

```
GET /api/articles/{article_id}/comments
```

**Response:**
```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "content": "Great article!",
      "author": "User Name",
      "author_id": 2,
      "created_at": "2024-01-09T11:00:00Z"
    }
  ]
}
```

#### Add Comment

```
POST /api/articles/{article_id}/comments
```

**Required Headers:**
- `Authorization: Bearer {token}`

**Request Body:**
```json
{
  "content": "Great article, very informative!"
}
```

**Response (201 Created):**
```json
{
  "status": "success",
  "data": {
    "id": 2,
    "content": "Great article, very informative!",
    "author_id": 1,
    "article_id": 1,
    "created_at": "2024-01-09T12:30:00Z"
  }
}
```

#### Delete Comment

```
DELETE /api/comments/{id}
```

**Required Headers:**
- `Authorization: Bearer {token}`

**Response (204 No Content):**
Empty body

---

### Users

#### Get Current User

```
GET /api/user
```

**Required Headers:**
- `Authorization: Bearer {token}`

**Response:**
```json
{
  "status": "success",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "role": "admin",
    "email_verified_at": "2024-01-01T00:00:00Z",
    "created_at": "2024-01-01T00:00:00Z"
  }
}
```

#### Update User Profile

```
PUT /api/user
```

**Required Headers:**
- `Authorization: Bearer {token}`

**Request Body:**
```json
{
  "name": "Updated Name",
  "email": "newemail@example.com"
}
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "id": 1,
    "name": "Updated Name",
    "email": "newemail@example.com",
    ...
  }
}
```

---

### Contact

#### Submit Contact Form

```
POST /api/contact
```

**Request Body:**
```json
{
  "name": "User Name",
  "email": "user@example.com",
  "subject": "Question about articles",
  "message": "I have a question..."
}
```

**Response (201 Created):**
```json
{
  "status": "success",
  "data": {
    "id": 1,
    "name": "User Name",
    "email": "user@example.com",
    "subject": "Question about articles",
    "message": "I have a question...",
    "created_at": "2024-01-09T13:00:00Z"
  },
  "message": "Message sent successfully"
}
```

---

## Rate Limiting

The API implements rate limiting:
- **Authenticated requests**: 60 requests per minute
- **Unauthenticated requests**: 20 requests per minute

Rate limit information is included in response headers:
```
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 59
X-RateLimit-Reset: 1704816000
```

---

## Pagination

Use these parameters for pagination:
- `page` (integer) - Page number, default: 1
- `per_page` (integer) - Items per page, default: 15, max: 100

Example:
```
GET /api/articles?page=2&per_page=20
```

---

## Filtering & Searching

### Search Articles
```
GET /api/articles?search=Laravel
```

### Filter by Category
```
GET /api/articles?category=1
```

### Sort Results
```
GET /api/articles?sort=latest
GET /api/articles?sort=oldest
GET /api/articles?sort=popular
```

### Combine Filters
```
GET /api/articles?search=Laravel&category=1&sort=latest&page=1&per_page=20
```

---

## Webhooks (Coming Soon)

Subscribe to real-time events when articles are created, updated, or deleted.

---

## Support

For API issues or questions:
- Check this documentation
- Review GitHub issues
- Create a new issue with details

---

**API Version:** 1.0  
**Last Updated:** January 2024
