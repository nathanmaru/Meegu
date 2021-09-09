from django.db import models
from accounts.models import UserAccount

# Create your models here.


class Project(models.Model):
    STATUS_OPTIONS = [
        ("PUBLISHED", "PUBLISHED"),
        ("ONGOING", "ONGOING"),
        ("REVISION", "REVISION"),
        ("SUBMITTED", "SUBMITTED"),
    ]
    title = models.CharField(max_length=255)
    description = models.TextField()
    status = models.CharField(max_length=50, choices=STATUS_OPTIONS, default="ONGOING")
    members = models.ManyToManyField(
        "UserAccount",
    )
