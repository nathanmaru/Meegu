from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django_quill.fields import QuillField


# class Category(models.Model):
#     name = models.CharField(max_length=100)

#     def __str__(self):
#         return self.name


class Project(models.Model):

    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset() .filter(status='published')

    options = (
        ('draft', 'Draft'),
        ('published', 'Published'),
        ('submit', 'Submit'),
        ('revision', 'Revision'),
    )

    title = models.CharField(max_length=250)
    description = models.TextField(null=True, blank=True)
    published = models.DateTimeField(null=True, blank=True)
    status = models.CharField(
        max_length=10, choices=options, default='draft')
    isAResource = models.BooleanField(default=False)
    deadline = models.DateTimeField(null=True, blank=True)
    date_created = models.DateTimeField(default=timezone.now)
    date_updated = models.DateTimeField(default=timezone.now)


    objects = models.Manager()  # default manager
    postobjects = PostObjects()  # custom manager

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.title

class Member(models.Model):
    options = (
        ('leader', 'Leader'),
        ('member', 'Member'),
        ('adviser', 'Adviser'),
    )
    member = models.ForeignKey(
        User, on_delete=models.CASCADE)
    role = models.CharField(max_length=10, default='member', choices=options)
    project = models.ForeignKey(
        Project, on_delete=models.CASCADE)
    color = models.CharField(max_length=10, blank=True, null=True)
    date_created = models.DateTimeField(default=timezone.now)
    date_updated = models.DateTimeField(default=timezone.now)
    objects = models.Manager()

    def __str__(self):
        return self.member.get_full_name()

class Task(models.Model):
    options = (
        ('ongoing', 'Ongoing'),
        ('submit', 'Submit'),
        ('revision', 'Revision'),
    )
    task_name = models.CharField(max_length=100)
    description = models.TextField(null=True, blank=True)
    content = QuillField(null=True, blank=True)
    guide = models.TextField(null=True, blank=True)
    # video = models.FileField(upload_to='videos_uploaded', null=True, blank=True,
    #     validators=[FileExtensionValidator(allowed_extensions=['MOV','avi','mp4','webm','mkv'])])
    deadline = models.DateTimeField(null=True, blank=True)
    status = models.CharField(
        max_length=10, choices=options, default='ongoing')
    assigned_To = models.ForeignKey(User, on_delete=models.CASCADE,
        )
    project = models.ForeignKey(
        Project, on_delete=models.CASCADE)
    part_Of = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True)
    date_created = models.DateTimeField(default=timezone.now)
    date_updated = models.DateTimeField(default=timezone.now)
    objects = models.Manager()

    def __str__(self):
        return self.task_name
