export const JObs = [
    {
        "_id": ObjectId("647f848d8f93d2c1178b4567"),
        "title": "Software Engineer",
        "description": "We are looking for a talented software engineer...",
        "company": "Acme Corporation",
        "location": "San Francisco, CA",
        "category": "IT",
        "salary": "$100,000 - $120,000",
        "posted_date": ISODate("2024-04-15T12:34:56Z"),
        "closing_date": ISODate("2024-05-15T12:34:56Z"),
        "is_active": true,
        "applicants": [
            { "user_id": "user123", "applied_date": ISODate("2024-04-20T12:34:56Z") },
            { "user_id": "user456", "applied_date": ISODate("2024-04-22T12:34:56Z") }
        ]
    }
]

export const Users = [
    {
        "_id": ObjectId("647f848d8f93d2c1178b4568"),
        "first_name": "John",
        "last_name": "Doe",
        "email": "johndoe@example.com",
        "password": "hashed_password",
        "user_type": "job_seeker" // or "employer"
    }
]